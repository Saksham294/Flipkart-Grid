const express=require("express")
const app=require("./app")
const mongoose=require("mongoose")
var cors=require('cors');
const dotenv=require("dotenv")
const cloudinary=require("cloudinary")

dotenv.config(path="./config.env");

app.use(cors());

app.use(express.json())

cloudinary.config({
    cloud_name:"dnbqfa0qf",
  api_key:"736543861472486",
  api_secret:"XKynZMZVXC0n72GTENSG5h8_5B4",
})

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://sakshamsingh5001:E4lapByjNeX6EUEW@cluster0.dplqkow.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error: ", err.message);
});


app.listen(4000,()=>{
    console.log(`Server started at port 4000`)
})