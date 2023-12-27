import express from "express";
import {Professor} from "../models/professorModel.js"

const router = express.Router();

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

    const professor = await Professor.create(newProfessor);

    return res.status(201).send(professor);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const professors = await Professor.find({});
    return res.status(200).json({
      count: professors.length,
      data: professors,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Professor.findByIdAndDelete(id);
    if (!result) res.status(404).send({ message: "Profesor nije pronaden" });

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan ${err.message}`);
  }
});
export default router;