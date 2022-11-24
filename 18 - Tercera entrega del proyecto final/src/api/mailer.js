import { createTransport } from "nodemailer";
import { MAILER_MAIL, MAILER_PASS } from "../config.js";

async function mailer() {
    const mail = "jarvis.koelpin@ethereal.email";

    const transporter = createTransport({
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

export default mailer();