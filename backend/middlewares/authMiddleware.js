const jwt = require("jsonwebtoken");

const tokenVerifying = (req, res, next)=>{
    const token = req.headers['authorization'].split(' ')[1];

    if(!token){
        return res.status(403).json({error: 'Access denied'});
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        console.log("good");
        next();
    } catch (err) {
        console.log(err);
    }
};

module.exports = tokenVerifying;