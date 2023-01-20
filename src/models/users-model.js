import { connect, model, Schema, set } from 'mongoose';
import bcrypt from 'bcrypt';

import { MONGO_URL2 } from '../config/config.js';

set('strictQuery', false);
connect(MONGO_URL2);

const UserSchema = new Schema ({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    address: String,
    age: Number,
    phone: String,
    image: String
});

UserSchema.pre('save', async function(next) {
    try {
        const user = this;
        if (!user.isModified('password')) {
            next()
        };
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

UserSchema.methods.matchPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

const Users = model('users', UserSchema);

export default Users;