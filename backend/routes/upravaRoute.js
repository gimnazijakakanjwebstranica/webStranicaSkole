import express from "express";
import mysql from "mysql2/promise";
import {LOGIN} from "../config.js"

const router = express.Router();

// MySQL connection configuration
const pool = mysql.createPool(LOGIN);

// Create a new employee
router.post("/", async (req, res) => {
  try {
    if (!req.body.full_name || !req.body.job) {
      return res.status(400).send({
        message: "Unesi zadata polja: ime i prezime i posao",
      });
    }
    const newEmployee = {
      full_name: req.body.full_name,
      job: req.body.job,
    };

    const [result] = await pool.execute(
      "INSERT INTO uprava (full_name, job) VALUES (?, ?)",
      [newEmployee.full_name, newEmployee.job]
    );

    return res.status(201).send({ id: result.insertId, ...newEmployee });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Retrieve all employees
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM uprava");
    return res.status(200).json({
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Delete an employee by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.execute("DELETE FROM uprava WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: "Zaposlenik nije pronaden" });
    }

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: `Zahtjev neuspjesan ${err.message}` });
  }
});

export default router;
