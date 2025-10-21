import { Router } from "express";

import { 
    createUser,
    getUsers
 } from "../controllers/users-controler.js";

const usersRouter = Router();

usersRouter.post("/create", (req, res) => {
    createUser(req,res)
})

usersRouter.get("/get", (req, res) => {
    getUsers(req, res);
});


export default usersRouter;