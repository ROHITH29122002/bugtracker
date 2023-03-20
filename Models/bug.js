import mongoose, { models } from "mongoose";

const bugSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
    },
    severity:{
        type:String,
        required:true,
    },
    assignedto:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:"open",
    },
})

module.exports = mongoose.models.Bug || mongoose.model('Bug',bugSchema)