const jwt = require("jsonwebtoken");


module.exports = {
  restrict
}
async function restrict(req, res, next) {

  try {
    //const token =res.cookies.token
    //const token =req.headers.authorization
    const token = req.cookies.token
    console.log("token", token, "cookies", req.cookies)
    if (!token) {
      return res.status(401).json({ message: 'shall not pass!' });
    }
    
    jwt.verify(token, "keep it secret,keep it safe", (err, decoded) => {
      if (err) {
        console.log(err)
        return res.status(401).json({
          message: "Invalid credentials",
        })
      }
      req.token = decoded
      next()
    })
    // next()
  } catch (err) {
    next(err)
  }
};