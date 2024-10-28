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
        VALUES ('${name}', '${email}', '${password}' );
    `;

    try{
        await client.query(query);
        console.log("inserted successfully");
    } catch (err){
        console.error('Insertion Error: ', err);
    }
}

module.exports = {connectDatabase, insertRowUsers};
