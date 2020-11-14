const express=require("express")
const cors=require("cors")
const helmet=require("helmet")
const cookieParser=require("cookie-parser")
const potluckRouter=require("../auth/auth-router")
const PORT=process.env.PORT||3300;
const server=express()
server.use(cookieParser())
server.use(helmet())
server.use(cors())
server.use(express.json());
server.use(potluckRouter)

server.get("/",(req,res,next)=>{
    res.send("hello world")
})



module.exports=server;