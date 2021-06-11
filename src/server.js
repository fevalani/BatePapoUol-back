import express from "express";
import cors from "cors";
import postParticipants from "./postParticipants.js";
import postMessages from "./postMessages.js";
import participants from "./participants.js";
import messages from "./messages.js";
import getMessages from "./getMessages.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/participants", (req, res) => {
  postParticipants(req, res);
});

app.get("/participants", (req, res) => {
  res.send(participants);
});

app.post("/messages", (req, res) => {
  postMessages(req, res);
});

app.get("/messages", (req, res) => {
  getMessages(req, res);
});

app.listen(4000, () => {
  console.log("Servidor funcionando na porta 4000!");
});
