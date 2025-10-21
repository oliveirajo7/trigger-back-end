import { Router } from "express";
import { createUser } from "../controllers/users-controler.js";

const roteador = Router();

roteador.post("/", (req, res) => {
    createUser(req,res)
})


export default roteador;