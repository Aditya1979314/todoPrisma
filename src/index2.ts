import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface updateuser{
    firstname :string,
    lastname :string
}

async function updateuserf(username:string,{firstname,lastname}:updateuser){
const response = await prisma.user.update({
    where :{username},
    data:{
        firstname,
        lastname
    }
})
console.log(response);

}

updateuserf("aditya21",{firstname:"aditya",lastname:"kumar"})