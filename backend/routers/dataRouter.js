const express = require("express");
const router = express.Router();
const { insertRowUsers, insertRowBiometrics, checkEmailExists, getUserId, checkUserIdExists, getAllBiometrics, addTask } = require("../database/connect");
const { generateToken } = require("../controllers/tokenController");
const getLLMresponse = require("../controllers/LLMController");
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

router.get('/biometrics', async (req, res) => {
    const {user_id} = req.body;

    try{
        const response = await getAllBiometrics(user_id);

        res.status(201).json({response});
    } catch (err){
        res.status(403).json({error: `Something went wrong ${err}`});
    }
});

router.patch('/biometrics', async (req, res) =>{
    const user_id = req.headers['authorization'].split(' ')[1];

    const {formData} = req.body;

    try{
        const response = await updateBiometrics(user_id, formData);

        res.status(201).json({message: 'updated', response: response});
    } catch (err){
        res.status(403).json({error: `Something went wrong. ${err}`});
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

router.post('/generateplan', async (req, res)=>{

    const {user_id} = req.body;

    const biometrics = await getAllBiometrics(user_id);

    const prompt = `
        Here is the user's biometrics data for fitness planning:
        - Age: ${biometrics.age}
        - Gender: ${biometrics.gender}
        - Height: ${biometrics.height} cm
        - Weight: ${biometrics.weight[biometrics.weight.length - 1]} kg
        - Blood Pressure: ${biometrics.bp}
        - Average steps count per day: ${biometrics.steps}
        - Resting Heart rate: ${biometrics.heartrate}
        - Fat: ${biometrics.fat}
        - BMI: ${biometrics.bmi}
        - Chest measurement: ${biometrics.chest}
        - Waist measurement: ${biometrics.waist}
        - Hips measurement: ${biometrics.hips}
        - Medical condition: ${biometrics.cond}
        - Health restrictions: ${biometrics.restrict}

        Note: Ignore all the null and 0 values present for any of the key discussed above. Consider it as user has not entered that particular values.

        Generate a personalized fitness plan based on the above biometrics.

        Start with "Hello mam" or "Hello sir" based on gender of the above present data.
    `;

    const response = await getLLMresponse(prompt);

    res.status(201).json({plan: response});
});

router.post('todolist', async (req, res) => {
    const {user_id, task} = req.body;

    try{
        await addTask(user_id, task);
        res.status(201).json({message: 'Task Added'});
    } catch (err){
        res.status(403).json({error: `Something went wrong. ${err}`});
    }
});

module.exports = router;