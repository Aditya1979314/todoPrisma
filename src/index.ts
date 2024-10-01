import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(username:string,password:string,firstname:string,lastname:string,email:string) {
    await prisma.user.create({
    data:{
        username,
        password,
        firstname,
        lastname,
        email
    }
    });
}

createUser("aditya2","test123","adit",'singh','some@gmail.com');