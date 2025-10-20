import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function createUser(req, res) {
    
    const {name, email, age, password, CPF, CEP} = req.body

    const novoUser = {
        name: name,
        email: email,
        age: age, 
        password: password,
        CPF: CPF,
        CEP: CEP
    }

    const criar = await prisma.users.create({
        data: novoUser
    })

    return res.send(200).body(criar)

}


export {createUser}