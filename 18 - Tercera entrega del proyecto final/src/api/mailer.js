const nodemailer = require("nodemailer");
const { MAILER_MAIL, MAILER_PASS } = require("../config.js");

async function mailer() {
    const mail = "jarvis.koelpin@ethereal.email";

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: MAILER_MAIL,
            pass: MAILER_PASS
        }
    });
    
    const info = await transporter.sendMail({
        from: "Servidor node",
        to: MAILER_MAIL,
        subject: "Mail desde node server",
        html: "<p>Este es el cuerpo del mensaje"
    })
}

module.exports = mailer();