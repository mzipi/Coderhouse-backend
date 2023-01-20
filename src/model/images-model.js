import { connect, model, set } from 'mongoose';
import { MONGO_URL2 } from '../config/config.js';

set('strictQuery', false);
connect(MONGO_URL2);
 
export default model('Images',{
    image: {
        data: Buffer,
        contentType: String
    }
});