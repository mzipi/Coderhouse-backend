import { errorLog } from "../api/logger.js";

export default class ServiceLogout {
    logout(req, res) {
        req.session.destroy(err => { errorLog.error("Hubo un error al hacer logout") });
        res.render("pages/logout");
    }
}