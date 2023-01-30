import mongoose from 'mongoose';

export const schema = {
    id: String,
    name: String,
    description: String,
    price: Number,
    image: String
}

mongoose.set('strictQuery', false);
 
const productsSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId });
const Products = mongoose.model('Products', productsSchema, 'products');

export default Products;