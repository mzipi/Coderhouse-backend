import mongoose from 'mongoose';
import { MONGO_URL2 } from '../config/config.js';

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL2);

const schema = {
    id: String,
    items: String
}
 
const cartSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId });
const Cart = mongoose.model('Cart', cartSchema, 'cart');

export default Cart;