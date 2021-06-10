import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express());

app.listen(4000, () => {
  console.log("Servidor funcionando na porta 4000!");
});