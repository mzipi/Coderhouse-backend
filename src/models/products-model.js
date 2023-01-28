import mongoose from 'mongoose';

const schema = {
    id: String,
    name: String,
    description: String,
    price: Number,
    image: String
}

mongoose.set('strictQuery', false);
 
const productsSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId, strictQuery: false });
const Products = mongoose.model('Products', productsSchema, 'products');

export default Products;