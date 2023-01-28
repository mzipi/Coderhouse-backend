import mongoose from 'mongoose';

const schema = {
    id: String,
    items: String
}

mongoose.set('strictQuery', false);
 
const cartSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId, strictQuery: false });
const Cart = mongoose.model('Cart', cartSchema, 'carts');

export default Cart;