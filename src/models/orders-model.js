import mongoose from 'mongoose';
import { MONGO_URL2 } from '../config/config.js';

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL2);

const schema = {
    id: String,
    date: String,
    idClient: String,
    items: Object
}
 
const ordersSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId }, { timestamps: true });
const Orders = mongoose.model('Orders', ordersSchema, 'orders');

export default Orders;