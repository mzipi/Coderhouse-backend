import ServiceLogout from "../services/ServiceLogout.js";

const serviceLogout = new ServiceLogout();

export default function logoutController(req, res) {
    serviceLogout.logout(req, res);
}