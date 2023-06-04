import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./mongodb/connect.js";
import dalleRoutes from './Routes/dalleRoutes.js';
import postRoutes from './Routes/postRoutes.js';
dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));


app.get('/',async(req,res)=>{
    res.send('hello world');
})

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes)

const start=async()=>{

    try{
        connectDB(process.env.MongoDb_URL);
        app.listen(4444,()=>{
            console.log("http://localhost:4444");
        })
    }
    catch(err){
        console.log(err);
    }
   
    
}
start();