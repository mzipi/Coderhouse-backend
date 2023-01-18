import ServiceAll from './missing-routes-service.js';

const allRotues = new ServiceAll();

function allController(req, res, next) {
    allRotues.log(req);
    next();
};

export default allController;