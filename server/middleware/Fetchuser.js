const jwt = require("jsonwebtoken")
const jwt_secret = "LOL BHAI"
const Fetchuser = (req,res,next)=>{
    const token = req.header('jwt_data')
    if(!token){
        res.status(500).json({error:"SOme error happend"})
    }
    try {
        const data = jwt.verify(token,jwt_secret)
        req.user = data.user;
        next()
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = Fetchuser