import mongoose from "mongoose"

const todoSchema=mongoose.Schema(
{
  title:{
    type:String,
    required:True,
  },

  description:{
      type:String,
      default:''
  }

},{timestamps:true})

export const todo =mongoose.model("Todo", todoSchema)