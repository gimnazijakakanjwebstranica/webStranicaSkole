import express from "express";
import { Maturanti } from "../models/maturantiModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.images) {
      return res.status(400).send({
        message: "Unesi slike",
      });
    }
    const newProfessor = {
      images: req.body.images,
    };

    const maturanti = await Maturanti.create(newProfessor);

    return res.status(201).send(maturanti);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const maturanti = await Maturanti.find({});
    return res.status(200).json({
      count: maturanti.length,
      data: maturanti,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Maturanti.findByIdAndDelete(id);
    if (!result) res.status(404).send({ message: "Slika nije pronadena" });

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan ${err.message}`);
  }
});
export default router;
