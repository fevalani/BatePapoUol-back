import dayjs from "dayjs";

export default function postMessages(req, res, participants, messages) {
  const objMessage = {
    ...req.body,
    from: req.headers.user,
    time: `${dayjs().format("HH:mm:ss")}`,
  };
  if (
    objMessage.to.trim().length === 0 ||
    objMessage.text.trim().length === 0
  ) {
    res.status(400).send("Destinatário ou mensagem não encontrada");
    return;
  } else if (
    objMessage.type !== "private_message" &&
    objMessage.type !== "message"
  ) {
    res.status(400).send("Tipo de mensagem não aceita");
    return;
  } else if (participants.map((item) => item.name).includes(req.headers.user)) {
    res.status(200).send();
    messages.push(objMessage);
    return;
  } else {
    res.status(400).send("Usuário não logado");
    return;
  }
}
