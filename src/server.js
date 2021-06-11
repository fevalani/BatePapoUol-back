import express from "express";
import cors from "cors";
import postParticipants from "./postParticipants.js";
import postMessages from "./postMessages.js";
import getMessages from "./getMessages.js";
import dayjs from "dayjs";

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];
let participants = [];

setInterval(() => {
  const arr = participants.filter((item) => {
    let counter = 0;
    if (Date.now() - item.lastStatus > 10000) {
      messages.push({
        from: `${item.name}`,
        to: "Todos",
        text: "saiu da sala...",
        type: "status",
        time: `${dayjs().format("HH:mm:ss")}`,
      });
      counter = 1;
    }
    return counter === 0 ? true : false;
  });
  participants = arr;
}, 15000);

app.post("/participants", (req, res) => {
  postParticipants(req, res, participants, messages);
});

app.get("/participants", (req, res) => {
  res.send(participants);
});

app.post("/messages", (req, res) => {
  postMessages(req, res, participants, messages);
});

app.get("/messages", (req, res) => {
  getMessages(req, res, participants, messages);
});

app.post("/status", (req, res) => {
  const user = participants.find((item) => item.name === req.headers.user);
  const index = participants.findIndex(
    (item) => item.name === req.headers.user
  );
  if (!user) {
    res.status(400).send();
  } else {
    participants[index].lastStatus = Date.now();
    res.status(200).send();
  }
});

app.listen(4000, () => {
  console.log("Servidor funcionando na porta 4000!");
});
