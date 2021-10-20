import express from "express"

 import{ReviewModel} from "../../Database/allModel.js"

 const Router =express.Router();

 /*
 Route         /
 Descrip       GET AN User data
 Params        _id
 body          none
 Access        Public
 Method        GET
 */

 Router.get("/:_id",async(req,res)=>{
 try{
   const{_id}=req.body;
   const getUser=await UserModel.findById(_id);
   return res.json({user:getUser})

 }catch(error){
   return res.status(500).json({error:error.message})
 }

 })
 /*
 Route         /update
 Descrip       update AN User data
 Params        _userid
 body          user data
 Access        Public
 Method        PUT
 */

 Router.put("/update/:_userId",async(req,res)=>{
 try{
   const{userId}=req.params;
   const {userData}=req.body;
   const updateUseData=await UserModel.findByIdAndUpdate(
     userId,
     {$set:userData},
     {new:true}
   );
   return res.json({user:getUser})

 }catch(error){
   return res.status(500).json({error:error.message})
 }

 })
 export default Router;
