import ServiceLogin from '../services/login-service.js';

const serviceLogin = new ServiceLogin();

export function getLoginController(req, res) {
    // serviceLogin.render(res);
}

export function postLoginController(req, res) {
    serviceLogin.auth();
}