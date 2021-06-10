import express from "express";
import cors from "cors";
import postParticipants from "./postParticipants.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/participants", (req, res) => {
  postParticipants(req, res);
});

app.listen(4000, () => {
  console.log("Servidor funcionando na porta 4000!");
});
