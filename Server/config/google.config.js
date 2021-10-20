 import googleOAuth from "passport-google-oauth20";
import {UserModel} from "../Database/allModel.js";
import passport from "passport";
const GoogleStrategy=googleOAuth.Strategy;
export default(passport)=>{
  passport.use(
    new GoogleStrategy({
      clientID:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:"http://localhost:4000/auth/google/callback"
    },
  async(acessToken,refreshToken,profile,done)=>{
    // creating new user
    const newUser={
      fullname:profile.displayName,
      email:profile.emails[0].value,
      profilePic:profile.photos[0].value
    }
    try{
      //check whether user exits or not
      const user=await UserModel.findOne({email:newUser.email});
      //generating JwtToken
      const token = user.generateJwtToken();
      if(user){
        //generating JwtToken
        const token = user.generateJwtToken()
        //return user
        done(null,{user,token});
      }else{
        //create new user
        const user=await UserModel.create(newUser);
        //generating JwtToken
        const token = user.generateJwtToken();
        //return user
        done(null,{user,token});
     }
   }catch(error){
     //return user
     done(error,null);
   }
  }
   )
  )

   passport.serializeUser((userData,done)=>done(null,{...userData}));
   passport.deserializeUser((id,done)=>done(null,id));
  }
