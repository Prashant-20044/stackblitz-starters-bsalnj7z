import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    username:{
      type:String,
      required:True,
      unique:True
    },

    email:{
      type:String,
      required:True,

    }
  }, {timestamps:true}
)

export const User=mongoose.model("User", userSchema)