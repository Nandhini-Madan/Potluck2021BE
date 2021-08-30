const { update } = require("../database/dbconfig")
const db = require("../database/dbconfig")


async function find() {
    return await db("users as u")
        .select("u.ID", "u.firstName")

}
async function findPotluck(Id){
    return await db("addPotluck")
        .select("potluckId", "potluckName", "date", "time", "location", "foodItems","notes")
        .where("userId", Id)
        
}

async function addPotluck(potluck, Id) {
    const data = { userId: Id, ...potluck }

    const [result] = await db("addPotluck").insert(data).returning(["potluckId", "userId"])
    const {potluckId,userId}=result;
    console.log("PotluckId", potluckId, "userId",userId)
    return findById(potluckId,userId)

}
async function addUsers(data) {
    const [id] = await db("users").insert(data).returning("ID")
    console.log("ID", id)
    return findByUserId(id)

}
async function findByUserId(id) {
    console.log("findUserBy", id)
    return await db("users")
        .select("ID", "firstName", "lastName", "emailId", "password", "userType")
        .where("ID", id)
        .first()
}
async function findById(id,userID) {
    console.log("potluck id", id, "userid",userID)
    return await db("addPotluck")
        .select("potluckId", "potluckName", "date", "time", "location", "foodItems", "notes", "userId")
        .where({"potluckId":id,"userId":userID})
       // .first()
}
async function findByEmailId(emailId) {
    console.log("db email", emailId)
    return await db("users")
        .select("ID", "firstName", "password", "emailId")
        .where("emailId", emailId)
        .first()
}

async function updatePotluck(data, id, userID) {
    console.log("updatePotluck", id ,"userId",userID)
    await db("addPotluck")
        .where({"potluckId": id,"userId":userID})
        .update(data)
    return findById(id,userID)

}
async function deletePotluck(id){
    console.log("delete",id)
   return  await db("addPotluck")
        .where("potluckId",id)
        .del()
}
//-/guest/:id/invite/potLuck/:id
// async function inviteList(guestId,potluckId,data){
    
//         const [id]=await db("inviteList").insert()
// }

    module.exports = {
        find,
        addPotluck,
        findById,
        findByEmailId,
        findByUserId,
        addUsers,
        updatePotluck,
        deletePotluck,
        findPotluck
    }
