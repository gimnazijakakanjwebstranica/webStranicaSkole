import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import cors from "cors";
import mongoose from "mongoose";
import articleRoute from "./routes/articleRoute.js";
import adminRoute from "./routes/adminRoute.js"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));

//za policy
app.use(cors());

//za koristenje body requestova
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("Everything valid");
});

app.use("/novosti", articleRoute);
app.use("/admin", adminRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App conected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
