import express from "express";
import roteador from "./routers/users-router.js";

const app = express();
app.use(express.json());

app.use("/create", roteador)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});