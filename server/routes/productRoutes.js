const {postProduct,getAllProducts,getProductById } = require("../controllers/productController")
const express = require("express")
const router = express.Router();
const isAuthenticated = require("../middleware/auth")


router.post("/postProduct",isAuthenticated,postProduct)
router.get("/getAllProducts",getAllProducts)
router.get("/product/:id",getProductById);


module.exports = router