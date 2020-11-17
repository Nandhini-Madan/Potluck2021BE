const db=require("../database/dbconfig")


async function find(){
    return await db("users as u")
    .select("u.ID","u.firstName")

}

async function addPotluck(data){
    const {id}= await db("addPotluck").insert(data)
    return findById(id)
   
}
async function addUsers(data){
    const [id]= await db("users").insert(data).returning("ID")
    console.log("ID",id)
    return findByUserId(id)
   
}
async function findByUserId(id){
    console.log("findUserBy",id)
    return await db("users")
                .select("ID","firstName","lastName","emailId","password","userType")
                .where("ID",id)
               // .first()
}
async function findById(id){
    console.log("addpotluck id",id)
    return await db("addPotluck")
                .select("potluckId","potluckName","date","time","location","foodItems","notes","userId")
                .where({id})
                .first()
}
async function findByEmailId(emailId){
    console.log("db email",emailId)
return await db("users")
                .select("ID","firstName","password","emailId")
                  .where("emailId",emailId)
                  .first()

              

}

module.exports={
    find,
    addPotluck,
    findById,
    findByEmailId,
    findByUserId,
    addUsers,
}