import express from "express";
import { Uprava } from "../models/upravaModel.js";

const router = express.Router();

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

    const employee = await Uprava.create(newEmployee);

    return res.status(201).send(employee);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const employee = await Uprava.find({});
    return res.status(200).json({
      count: employee.length,
      data: employee,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Uprava.findByIdAndDelete(id);
    if (!result) res.status(404).send({ message: "Profesor nije pronaden" });

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan ${err.message}`);
  }
});
export default router;
