const router = require("express").Router()
const model = require("./auth-model")
const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


router.get("/users", async (req, res, next) => {
    try {
        res.json(await model.find())
    }
    catch (err) {
        next(err)
    }
})
router.post("/login", async (req, res, next) => {
    try {
        const { emailId, password } = req.body
        const user = await model.findByEmailId(emailId)
        console.log("user",user)
        if (!user) {
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        }
        //comparing with hashed password 
        const passwordValid = await bycrypt.compare(password, user.password)
        if (!passwordValid) {
            return res.status(401).json({
                message: "Invalid password"
            })
        }
        const token = jwt.sign({
            userID: user.ID,
            // userRole:user.role,

        }, "keep it secret,keep it safe")
        res.cookie("token", token)
        res.json({
            message: `Welcome ${user.firstName}!`,
            data: `${user.ID}`
        })
    }
    catch (err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        let { firstName, lastName, emailId, password, userType } = req.body
        console.log("emailId",emailId)
        const users = await model.findByEmailId(emailId)
        console.log("users router",users)// When i get [] its working 

        if (users) {
            return res.status(409).json({
                message: "Your Email Address already registered",
            })
        }
        else{
            password= await bycrypt.hash(password, 14)
            const newUser = await model.addUsers({
                firstName,
                lastName,
                emailId,
                password,//Password harshed 14 times
                userType
            })
            console.log("New user",newUser)
            res.status(201).json(newUser)
        }
       
    }
    catch (err) {
        next(err)
    }
})



module.exports = router