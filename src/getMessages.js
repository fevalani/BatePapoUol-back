import messages from "./messages.js";
import participants from "./participants.js";

export default function getMessages(req, res) {
  const objMessages = messages.filter(
    (item) =>
      item.to === req.headers.user ||
      item.to === "Todos" ||
      item.from === req.headers.user
  );
  res.send(objMessages.slice(-(req.query.limit || participants.length)));
}
