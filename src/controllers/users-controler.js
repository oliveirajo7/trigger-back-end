import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function getUsers(req, res) {
    try {
        const users = await prisma.users.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao buscar usuários" });
    }

    return res.send(201).body(newUser)
}

async function createUser(req, res) {
    const { name, email, age, password, CPF, CEP } = req.body;

    try {
        const user = await prisma.users.create({
            data: {
                name: name,
                email: email,
                age: age,
                password: password,
                CPF: CPF,
                CEP: CEP
            }
        });
        res.status(201).json({ message: "Usuário criado com sucesso", id: user.id });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao criar usuário" });
    }
};

export {
    createUser,
    getUsers
}