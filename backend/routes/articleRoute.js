// Import necessary modules
import express from "express";
import mysql from "mysql2/promise"; // mysql2/promise for async/await support
import { LOGIN } from "../config.js";

const router = express.Router();

// MySQL connection configuration
const pool = mysql.createPool(LOGIN);

// Create article
router.post("/", async (req, res) => {
  try {
    const { title, date, body, images } = req.body;

    if (!title || !date || !body || !images) {
      return res.status(400).send({
        message: "Unesi zadata polja: naslov, datum, tekst i slike",
      });
    }
   
    // Stringify the images object to JSON string
    const imagesJson = JSON.stringify(images);


    // Insert query
    const query = "INSERT INTO clanci (title, date, body, images) VALUES (?, ?, ?, ?)";
    const [result] = await pool.query(query, [title, date, body, imagesJson]);

    return res.status(201).send({ id: result.insertId });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Get all articles
router.get("/", async (req, res) => {
  try {
    
    const [rows] = await pool.query("SELECT * FROM clanci");

    return res.status(200).json({
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Get article by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;


    // Select query with parameterized query
    const [rows] = await pool.query("SELECT * FROM clanci WHERE id = ?", [id]);

    
    if (rows.length === 0) {
      return res.status(404).send({ message: "Clanak nije pronaden" });
    }

    return res.status(200).json(rows[0]);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date, body, images } = req.body;

    if (!title || !date || !body) {
      return res.status(400).send("Unesi zadata polja: naslov, datum i tekst");
    }

    // Stringify the images array to JSON string
    const imagesJson = JSON.stringify(images);

    // Update query
    const query = "UPDATE clanci SET title = ?, date = ?, body = ?, images = ? WHERE id = ?";
    const [result] = await pool.query(query, [title, date, body, imagesJson, id]);

    if (result.affectedRows === 0) {
      return res.status(404).send({ message: "Clanak nije pronaden" });
    }

    return res.status(200).send({ message: "Korigovanje clanka uspjesno" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan, ${err.message}`);
  }
});

// Delete article by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
   
    // Delete query
    const [result] = await pool.query("DELETE FROM clanci WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).send({ message: "Clanak nije pronaden" });
    }

    return res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan ${err.message}`);
  }
});

export default router;
