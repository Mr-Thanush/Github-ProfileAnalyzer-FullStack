import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import profileRoute from './Routes/profileRoute.js'
import path from 'path';
import {fileURLToPath} from 'url';


const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);


dotenv.config();



const port=process.env.PORT || 6060;
const app=express();

//MiddleWare
app.use(express.json());
app.use(cors());

//routes
app.use('/github',profileRoute);


//server static files
app.use(express.static(path.join(__dirname,'../github-analyzer-frontend/dist')));
app.use((req,res)=>{
    res.sendFile(
        path.resolve(__dirname,'../github-analyzer-frontend/dist/index.html')
    )
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

//unCought Exception Error
process.on('uncaughtException',(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Server Is ShuttingDown Due To Uncounght Exception Error");

    process.exit(1);

})

//UnHandled Promise Rejection Error
process.on('unhandledRejection',(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Server Is ShuttingDown Due To Unhandled Promise Rejection Error");

    server.close(()=>{
        process.exit(1);
    })
})





