import express from "express";
import { VijeceRoditelja } from "../models/vijeceModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.images) {
      return res.status(400).send({
        message: "Unesi slike",
      });
    }
    const newVijece = {
      images: req.body.images,
    };

    const vijece = await VijeceRoditelja.create(newVijece);

    return res.status(201).send(vijece);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const vijece = await VijeceRoditelja.find({});
    return res.status(200).json({
      count: vijece.length,
      data: vijece,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await VijeceRoditelja.findByIdAndDelete(id);
    if (!result) res.status(404).send({ message: "Slika nije pronadena" });

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan ${err.message}`);
  }
});
export default router;
