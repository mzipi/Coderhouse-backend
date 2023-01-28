import mongoose from 'mongoose';

const schema = {
    image: {
        data: Buffer,
        contentType: String
    }
}

mongoose.set('strictQuery', false);

const imageSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId });
const Images = mongoose.model('Images', imageSchema, 'orders');

export default Images;