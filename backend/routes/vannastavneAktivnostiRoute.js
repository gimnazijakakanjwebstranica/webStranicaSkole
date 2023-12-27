import express from "express";
import { VannastavneAktivnosti} from "../models/vannastavneAktivnostiModel.js"

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.images) {
      return res.status(400).send({
        message: "Unesi slike",
      });
    }
    const newAktivnost = {
      images: req.body.images,
    };

    const aktivnosti = await VannastavneAktivnosti.create(newAktivnost);

    return res.status(201).send(aktivnosti);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const aktivnosti = await VannastavneAktivnosti.find({});
    return res.status(200).json({
      count: aktivnosti.length,
      data: aktivnosti,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await VannastavneAktivnosti.findByIdAndDelete(id);
    if (!result) res.status(404).send({ message: "Slika nije pronadena" });

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan ${err.message}`);
  }
});
export default router;
