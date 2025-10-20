import { Router } from "express";
import { mensagem } from "../Controller/Controllers.js";

const roteador = Router();

roteador.get("/", (req, res) => {
    mensagem(req,res)
})


export default roteador;