import ServiceAll from '../services/ServiceAll.js';

const allRotues = new ServiceAll();

function allController(req, res, next) {
    allRotues.log(req);
    next();
};

export default allController;