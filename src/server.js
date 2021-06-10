import express from "express";
import cors from "cors";
import participants from "./participants.js";
import messages from "./messages.js";
import dayjs from "dayjs";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/participants", (req, res) => {
  if (req.body.name === "") {
    res.status(400).send("Nome vazio!");
    return;
  }
  if (participants.map((item) => item.name).includes(req.body.name)) {
    res.status(401).send("Nome já em uso!");
    return;
  }
  const objUser = { ...req.body, lastStatus: Date.now() };
  const objMessage = {
    from: `${req.body.name}`,
    to: "Todos",
    text: "entra na sala...",
    type: "status",
    time: `${dayjs().format("HH:mm:ss")}`,
  };
  participants.push(objUser);
  messages.push(objMessage);
  res.status(200);
});

app.listen(4000, () => {
  console.log("Servidor funcionando na porta 4000!");
});
