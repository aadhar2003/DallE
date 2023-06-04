import  express from "express";
import * as dotenv from 'dotenv';
// import cors from 'cors';
import Post from "../models/post.js";
import { v2 as cloudinary } from 'cloudinary';
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });


  const router=express.Router();
  router.get('/',async(req,res)=>{
    try {
        const post=await Post.find({});
        res.status(200).json({data:post});

    } catch (error) {
        res.status(500).json({message:error})
    }
  })



  router.post('/',async(req,res)=>{
    try {
        const {name,prompt,photo}=req.body;
    const photoUrl=await cloudinary.uploader.upload(photo);

    const newPost=await Post.create({
        name,
        prompt,
        photo:photoUrl.url
    })
    res.status(200).json({data:newPost});
    } catch (error) {
        res.status(500).json({message:error});
    }
  })



export default router;
