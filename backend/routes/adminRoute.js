import express from "express";
import { SALTROUNDS, SECRET } from "../config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise"; 
import {LOGIN} from "../config.js"

const router = express.Router();

// MySQL connection configuration
const pool = mysql.createPool(LOGIN);

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send({ message: "Unesi zadata polja: ime i šifru" });
    }

    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    const [result] = await pool.execute(
      "INSERT INTO admin (username, password) VALUES (?, ?)",
      [username, hashedPassword]
    );

    return res.status(201).send({ message: "Admin successfully created" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Kreiranje admina neuspješno");
  }
});

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM admin");
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching admins");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.execute("DELETE FROM admin WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: "Admin not found" });
    }

    res.status(200).send({ message: "Admin successfully deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Deleting admin failed" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await pool.execute("SELECT * FROM admin WHERE username = ?", [username]);
    const admin = rows[0];

    if (!admin) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password" });
    }

    const token = jwt.sign({ username: admin.username }, SECRET, { expiresIn: "5h" });

    return res.status(200).send({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error: ", error);
    return res.status(500).send({ message: "Server error" });
  }
});

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token.", error: err });
    }

    req.user = decoded;
    next();
  });
};

router.post("/verify-token", verifyToken, (req, res) => {
  res.status(200).json({ message: "Token is valid", user: req.user, verifyValid: true });
});

export default router;
