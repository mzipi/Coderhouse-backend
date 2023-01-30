import mongoose from 'mongoose';

const productSchema = {
    id: String,
    quantity: Number
}

const schema = {
    id: String,
    products: [productSchema]
}

mongoose.set('strictQuery', false);
 
const cartSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId });
const Cart = mongoose.model('Cart', cartSchema, 'carts');

export default Cart;