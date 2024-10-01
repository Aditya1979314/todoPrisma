import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function gettodouser(userid:number) {
    const response = await prisma.todo.findMany({
        where:{userid:userid},
        select:{
            user:true,
            title:true,
            description:true
        }
    });
    console.log(response);
}

gettodouser(1);