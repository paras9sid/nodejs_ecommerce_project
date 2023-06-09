const path = require("path");

//handle creation of product
const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// -- /admin/add-product -> GET req
router.get("/add-product", adminController.getAddProduct);
router.get("/products", adminController.getProducts);

// -- /admin/add-product -> POST req
//methods are different paths are same so it differs
router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

router.post("/delete-product", adminController.postDeleteProduct);

// module.exports = router;
module.exports = router;
