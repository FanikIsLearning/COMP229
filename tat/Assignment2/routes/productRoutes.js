const express = require("express");
const productController = require("./../controllers/product.controller.js");
const router = express.Router();

// router.param('id', tourController.checkID);

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
