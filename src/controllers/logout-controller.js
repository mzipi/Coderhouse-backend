import ServiceLogout from '../services/logout-service.js';

const serviceLogout = new ServiceLogout();

export default function logoutController(req, res) {
    serviceLogout.logout(req, res);
}