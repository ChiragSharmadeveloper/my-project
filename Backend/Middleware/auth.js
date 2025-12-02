// Authontication code 

import jwt from "jsonwebtoken";
import ('dotenv').config();
import userDetails from "../model/userModel.js";

export const authentication= async(req ,res ,next)=>{
    try{
        const token=req.headers.authorization;

        if(!token)
            return res.status(401).json({message:"token not provided"});
            console.log(token)

        let decoded=jwt.verify(token,JWT_SECRET);
        console.log(decoded)

        req.userDetails=decoded;
        next()
    }catch(err){
        return res.status(500).json({message:"Server Error", error:err.message})
    }
}


// authorization code

export const authorization=async (req , res ,next)=>{
    try{
        
        
    }catch(err){

    }
}
