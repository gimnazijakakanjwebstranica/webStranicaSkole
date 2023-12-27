import express from "express";
import { Informacije } from "../models/informacijeModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.images) {
      return res.status(400).send({
        message: "Unesi slike",
      });
    }
    const newInformacije = {
      images: req.body.images,
    };

    const informacije = await Informacije.create(newInformacije);

    return res.status(201).send(informacije);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const informacije = await Informacije.find({});
    return res.status(200).json({
      count: informacije.length,
      data: informacije,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Informacije.findByIdAndDelete(id);
    if (!result) res.status(404).send({ message: "Slika nije pronadena" });

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan ${err.message}`);
  }
});
export default router;
