import ServiceSignup from '../services/signup-service.js';

const serviceSignup = new ServiceSignup();

export function getSignupController(req, res) {
    serviceSignup.getSignup(res);
}

export function postSignupController(req, res) {
    serviceSignup.postSignup();
}