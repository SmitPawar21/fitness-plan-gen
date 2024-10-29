const jwt = require("jsonwebtoken");

const generateToken = (user_id)=>{
    const token = jwt.sign({ id: user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
};

module.exports = {generateToken};