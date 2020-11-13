const db=require("../database/dbconfig")


async function find(){
    return await db("users as u")
    .select("u.ID","u.firstName")

}

module.exports={
    find,
}