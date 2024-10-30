const express = require("express");
const router = express.Router();
const { insertRowUsers, insertRowBiometrics, checkEmailExists, getUserId, checkUserIdExists } = require("../database/connect");
const { generateToken } = require("../controllers/tokenController");
const tokenVerifying = require("../middlewares/authMiddleware");

// SAVING USER CREDENTIALS IN DATABASE
router.post('/user', async (req, res) => {

    const { name, email, password } = req.body;
    
    const response = await insertRowUsers(name, email, password);
    console.log(response);

    res.status(201).json({message: 'ok done', user_id: response});

});

// SAVING USER BIOMETRICS IN DATABASE
router.post('/biometrics', async (req, res) => {

    const user_id = req.headers['authorization'].split(' ')[1];

    if (!user_id)
        return res.status(403).json({error: 'Sign in first'});

    const { h,w,age,gender,bp,steps,heartrate,fat,bmi,chest,waist,hips,cond,restrict } = req.body;

    try{
        const response = await insertRowBiometrics(user_id, h,w,age,gender,bp,steps,heartrate,fat,bmi,chest,waist,hips,cond,restrict)
        console.log(response);
    
        res.status(201).json({message: 'Biometrics added'});
    } catch (err){
        res.status(403).json({error: 'Something went wrong.', err});
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    //  CHECK IF THE GIVEN EMAIL IS PRESENT OR NOT
    const response = await checkEmailExists(email);

    if(response === false)
        return res.status(403).json({error: 'You need to sign up'});

    //  GET USER_ID FROM TABLE
    const user_id = await getUserId(email);

    //  CHECK WHETHER THIS USER ID IS PRESENT IN BIOMETRICS OR NOT
    const result = await checkUserIdExists(user_id);

    //  GENERATE TOKEN
    try{
        const token = await generateToken(user_id);
        console.log(token);
        return res.status(201).json({message: 'User Found', token: token, user_id: user_id, userIdExists: result});
    } catch (err){
        res.status(403).json({error: `Error: ${err}`});
    }
});

router.post('/protected', tokenVerifying, (req, res)=>{
    res.status(201).json({message: 'success'});
})

module.exports = router;