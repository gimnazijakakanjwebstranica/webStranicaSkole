import express from "express";
import { Article } from "../models/articleModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.date || !req.body.body) {
      return res.status(400).send({
        message: "Unesi zadata polja: naslov, datum i tekst",
      });
    }
    const newArticle = {
      title: req.body.title,
      date: req.body.date,
      body: req.body.body,
      images: req.body.images,
    };

    const article = await Article.create(newArticle);

    return res.status(201).send(article);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});
//ispisi sve clanke
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find({});
    return res.status(200).json({
      count: articles.length,
      data: articles,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//ispisi clanak po id-u
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findOne({ _id: id });
    return res.status(200).json(article);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//korigovanje clanka
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.date || !req.body.body) {
      res.status(400).send("Unesi zadata polja: naslov, datum i tekst");
    }
    const { id } = req.params;

    //dodacvanje novog dijela
    const updatedArticle = await Article.findByIdAndUpdate(id, req.body);

    if (!updatedArticle) {
      res.status(404).send({ message: "Clanak nije pronaden" });
    }

    res.status(200).send({ message: "Korigovanje clanka uspjesno" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan, ${err.message}`);
  }
});

//brisanje clanka
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Article.findByIdAndDelete(id);
    if (!result) res.status(404).send({ message: "Clanak nije pronaden" });

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Zahtjev neuspjesan ${err.message}`);
  }
});
export default router;
