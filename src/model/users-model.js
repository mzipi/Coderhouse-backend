import { connect, model } from 'mongoose';
import { MONGO_URL } from '../config/config.js';

mongoose.set('strictQuery', false);
connect(MONGO_URL);
 
export default model('Users',{
    email: String,
    password: String,
    name: String,
    address: String,
    age: Number,
    phone: String,
    image: String
});