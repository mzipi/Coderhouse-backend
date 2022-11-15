const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, FROM_PHONE, TO_PHONE } = require("../config.js");
const twilio = require("twilio");

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

function sms() {
    client.messages
        .create({
            body: "Esto es un mensaje desde Twilio",
            from: FROM_PHONE,
            to: TO_PHONE
        })
        .then(message => console.log("Mensaje enviado"));
}

module.exports = sms();