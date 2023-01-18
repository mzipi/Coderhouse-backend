import ServiceLogin from '../services/load-images-service.js';

const serviceLogin = new ServiceLogin();

export function postLoginController(req, res) {
    serviceLogin.auth();
}