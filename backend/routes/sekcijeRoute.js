import express from "express";
import { Sekcije } from "../models/sekcijeModel.js";

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

    const sekcije = await Sekcije.create(newProfessor);

    return res.status(201).send(sekcije);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const sekcije = await Sekcije.find({});
    return res.status(200).json({
      count: sekcije.length,
      data: sekcije,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Sekcije.findByIdAndDelete(id);
    if (!result) res.status(404).send({ message: "Slika nije pronadena" });

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan ${err.message}`);
  }
});
export default router;
