
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    }, 
    lastname:{
        type:String
    }, 
    phoneno:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    houseno:{
     type: String,
     required: true,
    },
     street,block:{
        type:String,
        required:true
    },
     city:{
        type:String,
        required:true
    }, 
    state:{
        type:String,
        required:true
    }, 
    pincode:{
        type:String,
        required:true
    }
},{timestamps:true});

const userDetails=mongoose.model("user", userSchema);