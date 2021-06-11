import dayjs from "dayjs";

export default function postParticipants(req, res, participants, messages) {
  if (req.body.name.trim().length === 0) {
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
  res.status(200).send();
}
