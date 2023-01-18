import ServiceLogin from '../services/login-service.js';

const serviceLogin = new ServiceLogin();

export function postLoginController(req, res) {
    serviceLogin.auth();
}