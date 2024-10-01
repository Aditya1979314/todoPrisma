import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createtodo(userid:number,title:string,description:string) {
    const res = await prisma.todo.create({
        data:{
            userid:userid,
            title:title,
            description:description
        }
    })
    console.log(res);
}

createtodo(1,"go to gym","go to the biggest gym");