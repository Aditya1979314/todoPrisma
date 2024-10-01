import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function gettodo(userid:number) {
    const response = await prisma.todo.findMany({
        where:{userid:userid}
    })

    console.log(response)
}

gettodo(1);