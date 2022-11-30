import mongoose from "mongoose";
import { MONGO_URL2 } from "../config/config.js";

mongoose.connect(MONGO_URL2);

const schema = {
    name: String,
    price: Number,
    image: String
}
 
const productsSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId });
const Products = mongoose.model("Products", productsSchema, "products");

export default Products;