const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken")

async function authMiddleware (req,res, next){
    const tokenRaw = req.headers.authorization;
    if(!tokenRaw || !tokenRaw.startsWith('Bearer ')){
        res.status(403).json({});
    }
    const tokenArr = tokenRaw.split(' ');
    const token = tokenArr[1];
    try{
        const decodeValue = jwt.verify(token, JWT_SECRET);
        const id = decodeValue.userId;
        req.userId = id;
        next();
    }
    
    catch(err){
        res.status(403).json({});
    }
}

module.exports = authMiddleware;