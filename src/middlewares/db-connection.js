import mongoose from 'mongoose';
import { MONGO_URL } from '../config/config.js';

export const mongoUrl = MONGO_URL;
export const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connect = async () => mongoose.connect(mongoUrl, mongoOptions);

export default connect;