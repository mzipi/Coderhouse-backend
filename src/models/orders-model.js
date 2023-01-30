import mongoose from 'mongoose';

const schema = {
    id: String,
    date: String,
    idClient: String,
    items: Object
}

mongoose.set('strictQuery', false);
 
const ordersSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId }, { timestamps: true });
const Orders = mongoose.model('Orders', ordersSchema, 'orders');

export default Orders;