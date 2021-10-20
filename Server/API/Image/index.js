import dotenv from "dotenv"
dotenv.config()
//libraries
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

//database Model
import {ImageModel} from "../../Database/allModel.js";

//utilities
import{s3Upload} from "../../Utils/AWS/s3.js"
const Router= express.Router();
//Multer config
const storage=multer.memoryStorage();
const upload=multer({storage});
//AWS s3 bucket configuration


/*
Route         /
Descrip       uploading given image to s3 bucket, and then saving in momgodb
Params        None
Access        Public
Method        GET
*/

Router.post("/",upload.single("file"),async(req,res)=>{
  try{
    const file=req.file;
    //s3 bucket options
    const bucketOptions={
      Bucket:"shapeaijulybatch18",
      Key:file.originalname,
      Body:file.buffer,
      ContentType:file.mimetype,
      ACL:"public-read"
    }

  const uploadImage=await s3Upload(bucketOptions);
  }catch(error){
   return res.status(500).json({error:error.message})
  }
})

export default Router;
