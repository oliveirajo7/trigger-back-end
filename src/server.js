import express from "express";
import usersRoute from "./routers/users-route.js";

const app = express();
app.use(express.json());

app.use("/users", usersRoute);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});