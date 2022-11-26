import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, FROM_PHONE, TO_PHONE } from "../config.js";
import twilio from "twilio";
import logger from "./logger.js";

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

function wp(obj) {

    const body = `
        Nuevo pedido
        ${obj.username}
        ${obj.name}
        Productos del carro
    `

    client.messages
        .create({
            body,
            from: FROM_PHONE,
            to: TO_PHONE
        })
        .then(message => logger.info("Mensaje enviado"));
}

export default wp;