import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createUser(req, res) {

    const {name, email, age, password, CPF, CEP} = req.body

    const newUser = {
        name: name,
        email: email,
        age: age,
        password: password,
        CPF: CPF,
        CEP: CEP
    }

    const createNewUser = prisma.users.create({
        data: newUser
    })

    return res.send(201).body(newUser)
}

export {createUser}