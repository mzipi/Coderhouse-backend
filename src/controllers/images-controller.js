import ServiceLogin from '../services/ServiceLogin.js';

const serviceLogin = new ServiceLogin();

export function getLoginController(req, res) {
    // serviceLogin.render(res);
}

export function postLoginController(req, res) {
    serviceLogin.auth();
}