import { Router } from "express";
import { createUser } from "../Controller/Controllers.js";

const roteador = Router();

roteador.post("/", (req, res) => {
    createUser(req,res)
})


export default roteador;