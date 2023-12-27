import express from "express";
import { UceniciGeneracije } from "../models/ucenikGeneracijeModel.js";

const router = express.Router();

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

    const student = await UceniciGeneracije.create(newStudent);

    return res.status(201).send(student);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const students = await UceniciGeneracije.find({});
    return res.status(200).json({
      count: students.length,
      data: students,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await UceniciGeneracije.findByIdAndDelete(id);
    if (!result) res.status(404).send({ message: "Učenik nije pronaden" });

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan ${err.message}`);
  }
});
export default router;
