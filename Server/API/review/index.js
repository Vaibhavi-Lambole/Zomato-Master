import express from "express"

 import{ReviewModel} from "../../Database/allModel.js"

 const Router =express.Router();

 /*
 Route         /new
 Descrip       add new // REVIEW:
 Params        None
 body          review object
 Access        Public
 Method        POST
 */

 Router.post("/new",async(req,res)=>{
 try{
   const{reviewData}=req.body;

   await ReviewModel.create(reviewData)
   return res.json({review:"Sucessfully Created Review"})

 }catch(error){
   return res.status(500).json({error:error.message})
 }

 })
 /*
 Route         /delet
 Descrip       delete a review
 Params        _id
 body          review object
 Access        Public
 Method        DELETE
 */

 Router.delete("/delete/:_id",async(req,res)=>{
 try{
   const{reviewData}=req.body;

   await ReviewModel.findByIAndDelete(reviewData)
   return res.json({review:"Sucessfully Created Review"})

 }catch(error){
   return res.status(500).json({error:error.message})
 }

 })
  export default Router;
