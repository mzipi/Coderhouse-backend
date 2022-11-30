import { connect, model, Schema } from "mongoose";
import { MONGO_URL2 } from "../config/config.js";

connect(MONGO_URL2);

const schema = {
    author: {
        name: String,
        lastname: String,
        nick: String,
        age: Number,
        email: String,
        avatar: String
    },
    text: String
}

const msgSchema = new Schema(schema, { timestamps: true });
const Msg = model("Msg", msgSchema, "messages");

export default Msg;