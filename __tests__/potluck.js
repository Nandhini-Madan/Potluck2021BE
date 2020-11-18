
const supertest = require("supertest")

const server=require("../api/server")
const db=require("../database/dbconfig")


describe("potluck integration testing",()=>{
    it ("Get list of users",async()=>{
        const res= await supertest(server).get("/users")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBeGreaterThanOrEqual(3)
        expect(res.body[0].firstName).toBe("nandhini")
    })

    it("Post potluck",()=>{
        it()
    })
})