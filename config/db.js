import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DB_URL) {
    console.error('Missing DB_URL environment variable. Set DB_URL in Render or in your .env file.');
    process.exit(1);
}

const pool=mysql.createPool(process.env.DB_URL);

const testConnection = async()=>{
    try {
        const [rows]=await pool.query('SELECT 1');
        console.log("Database connection successful");
    }catch(error){
       console.error("Database connection failed:", error.message || error);
       process.exit(1);
    }
}

testConnection();





export default pool


