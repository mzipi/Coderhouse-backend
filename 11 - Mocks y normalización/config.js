import dotenv from "dotenv";

dotenv.config();

const PROJECT_ID = process.env.PROJECT_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;

export  {
    PROJECT_ID,
    PRIVATE_KEY,
    CLIENT_EMAIL,
};