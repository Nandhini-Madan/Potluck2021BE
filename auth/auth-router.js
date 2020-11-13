const router = require("express").Router()
const user = require("./auth-model")
const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


router.get("/users", async (req, res, next) => {
    try {
        res.json(await user.find())
    }
    catch (err) {
        next(err)
    }
})

module.exports = router