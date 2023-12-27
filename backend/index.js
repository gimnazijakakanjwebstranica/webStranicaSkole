import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import cors from "cors";
import mongoose from "mongoose";
import articleRoute from "./routes/articleRoute.js";
import adminRoute from "./routes/adminRoute.js";
import professorRoute from "./routes/professorRoute.js";
import sekcijeRoute from "./routes/sekcijeRoute.js";
import vannastavneAktivnostiRoute from "./routes/vannastavneAktivnostiRoute.js";
import informacijeRoute from "./routes/informacijeRoute.js"
import ucenikGeneracijeRoute from "./routes/ucenikGeneracijeRoute.js"
import maturantiRoute from "./routes/maturantiRoute.js"
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
app.use("/uposlenici/profesori", professorRoute);
app.use("/za-ucenike/sekcije", sekcijeRoute);
app.use(
  "/za-ucenike/termini-vannastavnih-aktivnosti",
  vannastavneAktivnostiRoute
);
app.use("/za-roditelje/termini-individualnih-konsultacija", informacijeRoute);
app.use("/o-skoli/ucenici-generacije", ucenikGeneracijeRoute);
app.use("/o-skoli/maturanti", maturantiRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App conected to database");
    app.listen(process.env.PORT || PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
