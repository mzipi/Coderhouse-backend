import mongoose from 'mongoose';
import { MONGO_ATLAS, MONGO_LOCAL, NODE_ENV } from '../config/config.js';

export let mongoUrl = NODE_ENV === 'development' ? MONGO_ATLAS : MONGO_LOCAL;

const connect = async () => mongoose.connect(mongoUrl);

export default connect;