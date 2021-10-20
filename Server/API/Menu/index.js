import express from "express"
import{MenuModel,ImageModel} from "../../Database/allModel.js"

const Router =express.Router();

/*
Route     /list
Des       Get the list of menu based on id
params    _id
Acess    Public
Method   GET
*/
Router.get("/list/_id",async(req,res)=>{
try{
  const {_id}= req.params;
  const menus=await MenuModel.findOne(_id);
   return res.json({menus});
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
Router.get("/image/id",async(req,res)=>{
  try{
   const{category}=req.params;
   const menus=await MenuModel.findOne(_id)

   return res.json({menus})
  }catch(error){
    return res.status(500).json({error:error.message});

  }
})
export default Router;
