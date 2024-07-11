import express from "express";
import mysql from "mysql2/promise";
import {LOGIN} from "../config.js"
const router = express.Router();

// MySQL connection configuration
const pool = mysql.createPool(LOGIN);

// Create a new entry
router.post("/", async (req, res) => {
  try {
    if (!req.body.images) {
      return res.status(400).send({
        message: "Unesi slike",
      });
    }

    const images = JSON.stringify(req.body.images);  // Store images as a JSON string

    const [result] = await pool.execute(
      "INSERT INTO vijece_roditelja (images) VALUES (?)",
      [images]
    );

    return res.status(201).send({ id: result.insertId, images: req.body.images });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Retrieve all entries
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM vijece_roditelja");
    const vijece = rows.map(row => ({
      ...row,
      images: JSON.parse(row.images)  // Parse the JSON string back to an array
    }));
    return res.status(200).json({
      count: vijece.length,
      data: vijece,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Delete an entry by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.execute("DELETE FROM vijece_roditelja WHERE id = ?", [id]);
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
