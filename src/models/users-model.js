import { connect, model, set } from 'mongoose';
import { MONGO_URL2 } from '../config/config.js';

set('strictQuery', false);
connect(MONGO_URL2);
 
export default model('Users',{
    email: String,
    password: String,
    name: String,
    address: String,
    age: Number,
    phone: String,
    image: String
});

