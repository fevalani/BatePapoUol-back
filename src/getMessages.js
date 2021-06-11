export default function getMessages(req, res, participants, messages) {
  const objMessages = messages.filter(
    (item) =>
      item.to === req.headers.user ||
      item.to === "Todos" ||
      item.from === req.headers.user
  );
  res.send(objMessages.slice(-(req.query.limit || participants.length)));
}
