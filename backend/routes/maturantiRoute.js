import express from "express";
import mysql from "mysql2/promise";
import { LOGIN } from "../config.js";

const router = express.Router();

// MySQL connection configuration
const pool = mysql.createPool(LOGIN);

// Create a new maturant
router.post("/", async (req, res) => {
  try {
    if (!req.body.images) {
      return res.status(400).send({
        message: "Unesi slike",
      });
    }
    const images = JSON.stringify(req.body.images);
    const [result] = await pool.execute(
      "INSERT INTO maturanti (images) VALUES (?)",
      [images]
    );

    return res.status(201).send({ id: result.insertId, images });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Retrieve all maturants
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM maturanti");
    return res.status(200).json({
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Delete a maturant by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.execute("DELETE FROM maturanti WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: "Slika nije pronadena" });
    }

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: `Zahtjev neuspjesan ${err.message}` });
  }
});

export default router;
