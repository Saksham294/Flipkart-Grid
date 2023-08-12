const mongoose=require("mongoose")


const productSchema=new mongoose.Schema({

    name:{
        type:String,
    },
    image:{
        type:String,
    },
    price:{
        type:Number,
        required: [true, "Please enter a price"],
    },
    description:{
        type:String,
        required: [true, "Please enter a description"],
    },
    mainCategory:{
        type:String,
        required: [true, "Please enter a category"],
    },
    subCategory:{
        type:String,
        required: [true, "Please enter a category"],
    },
    rating:{
        type:Number,
        default:0,
    },

})

module.exports=mongoose.model("Product",productSchema)