const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    image:{
        type:String,
        required:true,

    },
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,

    },
    content:{
        type:String,
        required:true,

    }
},{timestamps:true})

export default mongoose.models.Post || mongoose.model('Post',postSchema);