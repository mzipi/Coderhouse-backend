import missingRoutesService from "../services/missing-routes-service.js";

function allController(req, res, next) {
    const response = missingRoutesService(req);
    res.status(404).json(response)
    next();
};

export default allController;