import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, FROM_PHONE, TO_PHONE } from "../config.js";
import twilio from "twilio";
import logger from "../api/logger.js";

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

function sms() {
    client.messages
        .create({
            body: "Esto es un mensaje desde Twilio",
            from: FROM_PHONE,
            to: TO_PHONE
        })
        .then(message => logger.info("Mensaje enviado"));
}

export default sms();