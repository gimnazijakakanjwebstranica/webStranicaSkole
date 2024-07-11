import express from "express";
import mysql from "mysql2/promise";
import {LOGIN} from "../config.js"

const router = express.Router();

// MySQL connection configuration
const pool = mysql.createPool(LOGIN);

// Create a new professor
router.post("/", async (req, res) => {
  try {
    if (!req.body.full_name || !req.body.subjects || !req.body.titles) {
      return res.status(400).send({
        message: "Unesi zadata polja: ime i prezime, predmeti i zvanje",
      });
    }
    const newProfessor = {
      full_name: req.body.full_name,
      subjects: req.body.subjects,
      titles: req.body.titles,
    };

    const [result] = await pool.execute(
      "INSERT INTO profesori (full_name, subjects, titles) VALUES (?, ?, ?)",
      [newProfessor.full_name, newProfessor.subjects, newProfessor.titles]
    );

    return res.status(201).send({ id: result.insertId, ...newProfessor });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Retrieve all professors
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM profesori");
    return res.status(200).json({
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Delete a professor by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.execute("DELETE FROM profesori WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: "Profesor nije pronaden" });
    }

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: `Zahtjev neuspjesan ${err.message}` });
  }
});

export default router;
