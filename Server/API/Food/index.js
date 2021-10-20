//Libraries
import express from "express";
import passport from "passport";

//Database Model
import {FoodModel} from "../../Database/allModel.js";

//Validation
import {ValidateRestaurantId, ValidateCategory} from "../../validation/food.js";
const Router =express.Router()

/*
Route     /
Des       Get all the foods based on particular restaurant
params    _id
Acess    Public
Method   GET
*/
Router.get("/:_id",async(req,res)=>{
  try{
     await ValidateRestaurantId(req.params);
   const{id}=req.params;
   const foods=await FoodModel.find({restaurant:_id});

   return res.json({foods})
  }catch(error){
    return res.status(500).json({error:error.message});

  }
})
/*
Route     /r
Des       Get all the foods based on particular category
params    category
Acess    Public
Method   GET
*/
Router.get("/r/category",async(req,res)=>{
  try{
    await ValidateCategory(req.params);
   const{category}=req.params;
   const foods=await FoodModel.find({category:
     {$regx:category,$options:"i"}
   });

   return res.json({foods})
  }catch(error){
    return res.status(500).json({error:error.message});

  }
})
/*
Route     /image
Des       Get menu image based on id
params    _id
Acess    Public
Method   GET
*/
export default Router;
