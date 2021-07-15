
const supertest = require("supertest")

const server=require("../api/server")
const db=require("../database/dbconfig")


describe("potluck integration testing",()=>{
    it("Add Potluck",async()=>{
        const res=await supertest(server)
        .post("/addpotluck")
        .send({
            potluckName:"Party",
            date:"17-15-2020",
            time:"8:39 AM",
            location:"USA",
            foodItems:"rice",
            notes:"Hiwesds"
        })
        
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.potluckName).toBe("Party")
        expect(res.body.potluckId).toBeDefined()
    })
    it ("Get list of users",async()=>{
        const res= await supertest(server).get("/users")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBeGreaterThanOrEqual(3)
        expect(res.body[0].firstName).toBe("nandhini")
    })    
      
    })
