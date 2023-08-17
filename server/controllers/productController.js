const Product=require("../models/Product")
const cloudinary = require("cloudinary")


exports.postProduct=async(req,res)=>{
    try {
        const { name, image, brand, price,mainCategory,subCategory,description,rating } = req.body
        let product = await Product.findOne({ name })
        if (product) {
            return res.status(400).json({
                success: false,
                message: "Product already exists"
            })
        }

        const myCloud = await cloudinary.v2.uploader.upload(image, {
            folder: "productImages"
        })
        product = await Product.create({
            name,
            image: {
                public_id: myCloud.public_id, url: myCloud.secure_url
            },
            brand,
            price,
            mainCategory,
            subCategory,
            description,
            rating
        })

        res.status(200).json({
            success: true,
            message: "Product posted successfully",
            product
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.getAllProducts=async(req,res)=>{
    try {
        const products=await Product.find({})
        res.status(200).json({
            success:true,
            products
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.getProductById=async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id)
        res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

