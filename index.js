import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import profileRoute from './Routes/profileRoute.js'
import path from 'path';
import {fileURLToPath} from 'url';


const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);


dotenv.config();




const app=express();
const port=process.env.PORT || 6060;

//MiddleWare
app.use(express.json());
app.use(cors());

//routes
app.use('/github',profileRoute);

const frontendPath=path.resolve(__dirname,'github-analyzer-frontend/dist');
app.use(express.static(frontendPath));


//server static files
app.get((req,res)=>{
    if(req.path.startsWith('/github')) return res.status(404).end();
    res.sendFile(path.resolve(frontendPath,'index.html'));
})


const server = app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

// unCought Exception Error
process.on('uncaughtException',(err)=>{
    console.error(`Uncaught Exception: ${err.message}`);
    console.error(err.stack);
    console.log("Server is shutting down due to uncaught exception.");
    process.exit(1);
})

// Unhandled Promise Rejection Error
process.on('unhandledRejection',(err)=>{
    console.error(`Unhandled Rejection: ${err?.message || err}`);
    console.error(err?.stack);
    console.log("Server is shutting down due to unhandled promise rejection.");

    server.close(()=>{
        process.exit(1);
    })
})





