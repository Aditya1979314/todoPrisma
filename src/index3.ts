import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getuser(username:string) {
    const response = await prisma.user.findFirst({
        where : {username}
    })
    console.log(response);
}

getuser("aditya21");