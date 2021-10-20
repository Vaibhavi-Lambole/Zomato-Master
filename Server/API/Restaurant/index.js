import express from "express";
import passport from "passport";

import{RestaurantModel} from "../../Database/allModel.js";
//Validation
import {ValidateRestaurantCity, ValidateRestaurantSearchString} from "../../validation/restaurant.js";
import {ValidateRestaurantId} from "../../validation/food.js";
 const Router = express.Router();
 /*
 Route    /
 Des      Get all Restaurant details
 params    None
 Acess    Public
 Method   GET
 */
 Router.get("/",async(req,res)=>{
   try{
     await ValidateRestaurantCity(req.query)
    const {city}=req.query;
    const restaurant= await RestaurantModel.find({city});
    return res.json({restaurant});
   }catch(error){
    return res.status(500).json({error:error.message});
   }
 })
 /*
 Route    /
 Des      Get perticular  Restaurant details on id
 params    _id
 Acess    Public
 Method   GET
 */
 Router.get("/:_id",async(req,res)=>{
   try{
     await ValidateRestaurantId(req.query)
     const {_id}=req.params;
     const restaurant=await RestaurantModel.findOne(_id);

     if(!restaurant)
     return res.status(404).json({error:"Restaurant Not Found"});

     return res.json({restaurant});

   }catch(error){
     return res.status(500).json({error:error.message});

   }
 })
 /*
 Route     /search
 Des       Get Restaurant details on search
 params    none
 Body      searchString
 Acess    Public
 Method   GET
 */
 Router.get("/search",async(req,res)=>{
   try{
      await ValidateRestaurantSearchString(req.query)

     const {searchString}=req.body;

     const restaurant=await RestaurantModel.find({
       name:{$regex:searchString,$options:"i"},
     })
      }catch(error){
     return res.status(500).json({error:error.message})
   }
 })

 export default Router;
