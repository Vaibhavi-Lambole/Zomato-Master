//env varible
import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
//config import
import googleAuthConfig from "./config/google.config.js";
import routeConfig from "./config/route.config.js"
//api
import Auth from "./API/Auth/index.js";
import Restaurant from "./API/Restaurant/index.js";
import Food from "./API/Food/index.js";
import Menu from "./API/Menu/index.js"
import Image from "./API/Image/index.js"
import orders from "./API/orders/index.js"
import review from "./API/review/index.js"
//database connection
import ConnectDB from "./Database/connection.js";

const zomato= express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuration
 googleAuthConfig(passport)
routeConfig(passport)
//for application routes
//localhost:4000/auth/signup
zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food" ,Food);
zomato.use("/menu" ,Menu);
zomato.use("/image" ,Image);
zomato.use("/order" ,orders);
zomato.use("/review" ,review);
zomato.get("/",(req,res)=>res.json({message:"Setup Success yassss!!!"}));

zomato.listen(4000,()=>
ConnectDB().then(()=>console.log("Server is up and running"))
.catch(()=>console.log("Db connection failed")));
[[]]
