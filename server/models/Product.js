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
    category:{
        type:String,
        required: [true, "Please enter a category"],
    },

})

module.exports=mongoose.model("Product",productSchema)