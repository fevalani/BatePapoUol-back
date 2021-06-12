export default function postStatus(req, res, participants) {
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
}
