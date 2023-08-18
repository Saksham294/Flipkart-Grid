const {postProduct,getAllProducts,getProductById,purchaseProduct } = require("../controllers/productController")
const express = require("express")
const router = express.Router();
const isAuthenticated = require("../middleware/auth")


router.post("/postProduct",isAuthenticated,postProduct)
router.get("/getAllProducts",getAllProducts)
router.get("/product/:id",getProductById);
router.route("/product/buy/:id").get(isAuthenticated,purchaseProduct)


module.exports = router