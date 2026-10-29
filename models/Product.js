import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
     ref: "Category", // Category
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
