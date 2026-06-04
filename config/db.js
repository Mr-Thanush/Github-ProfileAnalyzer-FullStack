import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();


const pool=mysql.createPool(process.env.DB_URL);

const testConnection = async()=>{
    try {
        const [rows]=await pool.query('SELECT 1');
        console.log("Database connection successful");
    }catch(error){
       console.log("Database connection failed:",error);
    }
    
}

testConnection();




export default pool

