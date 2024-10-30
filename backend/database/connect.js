const { Client } = require("pg");

const client = new Client({
    host: 'localhost',       // PostgreSQL server address
    port: 5432,              // Default PostgreSQL port
    user: 'postgres',        // Database user
    password: 'smitpawar21082005',  // Database password
    database: 'fitnessplangendb',  // Database name
});

const connectDatabase = ()=>{

    client.connect()
        .then(() => console.log('Connected to PostgreSQL'))
        .catch(err => console.error('Connection error', err));

}

//  TABLE NAME: users
//  COLUMNS: id [PK], name, email, password

//  INSERTION 
const insertRowUsers = async (name, email, password) => {
    const query = `
        INSERT INTO users (name, email, password)
        VALUES ('${name}', '${email}', '${password}')
        RETURNING id;
    `;

    try{
        const response = await client.query(query);
        return response.rows[0].id;
    } catch (err){
        console.error('Insertion Error: ', err);
        return 0;
    }
}

//  TABLE NAME: user_biometrics
//  COLUMNS: biometrics_id [PK], id [FK], height, weight, age, gender, bp, steps,         heartrate, fat, bmi, chest, waist, hips, condition, restrictions

//  INSERTION
const insertRowBiometrics = async (user_id, h,w,age,gender,bp,steps,heartrate,fat,bmi,chest,waist,hips,cond,restrict)=>{
    const query = `
         INSERT INTO user_biometrics (id, height, weight, age, gender, bp, steps, heartrate, fat, bmi, chest, waist, hips, condition, restrictions)
         VALUES ($1, $2, CAST(ARRAY[$3] AS integer[]), $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);
    `;
    console.log("this is user id:", user_id);
    const values = [user_id, h,w,age,gender,bp,steps,heartrate,fat,bmi,chest,waist,hips,cond,restrict];

    try{
        await client.query(query, values);
        console.log('Inserted successfully');
    } catch (err){
        console.error('Insertion Error: ', err);
    }
};

//  CHECK IF EMAIL EXIST IN DATABASE
const checkEmailExists = async (email) =>{
    const query = `
        SELECT EXISTS (
            SELECT 1 
            FROM users 
            WHERE email = $1
        )
    `;

    const result = await client.query(query, [email]);
    return result.rows[0].exists;
};

const getUserId = async (email) =>{
    const query = `
        SELECT id FROM users
        WHERE email = $1
    `;

    const result = await client.query(query, [email]);

    return result.rows[0].id;
}

module.exports = {connectDatabase, insertRowUsers, insertRowBiometrics, checkEmailExists, getUserId};
