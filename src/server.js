import express from "express";
import roteador from "./Router/Routers.js";

const app = express();
app.use(express.json());

app.use("/teste", roteador)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});