import express from "express";
import mysql from "mysql2/promise";
import {LOGIN} from "../config.js"

const router = express.Router();

// MySQL connection configuration
const pool = mysql.createPool(LOGIN);

// Create a new student
router.post("/", async (req, res) => {
  try {
    if (!req.body.name || !req.body.last_name || !req.body.year) {
      return res.status(400).send({
        message: "Unesi zadata polja: ime i prezime i godinu",
      });
    }
    const newStudent = {
      name: req.body.name,
      last_name: req.body.last_name,
      year: req.body.year,
    };

    const [result] = await pool.execute(
      "INSERT INTO ucenici_generacije (name, last_name, year) VALUES (?, ?, ?)",
      [newStudent.name, newStudent.last_name, newStudent.year]
    );

    return res.status(201).send({ id: result.insertId, ...newStudent });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Retrieve all students
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM ucenici_generacije");
    return res.status(200).json({
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Delete a student by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.execute("DELETE FROM ucenici_generacije WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: "Učenik nije pronaden" });
    }

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: `Zahtjev neuspjesan ${err.message}` });
  }
});

export default router;
