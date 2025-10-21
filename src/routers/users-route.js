import { Router } from "express";

import { 
    createUser,
    getUsers
 } from "../controllers/users-controler.js";

import { 
    verifyAdmin
 } from "../middlewares/users-admin-middleware.js";

const usersRouter = Router();

usersRouter.post("/create", verifyAdmin, (req, res) => {
    createUser(req,res)
})

usersRouter.get("/get", (req, res) => {
    getUsers(req, res);
});


export default usersRouter;