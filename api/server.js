const express=require("express")
const cors=require("cors")
const helmet=require("helmet")
const cookieParser=require("cookie-parser")
//const potluckRouter=require("")
const PORT=process.env.PORT||3300;
const server=express()
server.use(cookieParser())
server.use(helmet())
server.use(cors())
server.use(express.json());
// server.get("/",(req,res,next)=>{
//     res.status
// })



module.exports=server;