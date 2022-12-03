import { infoLog } from '../api/logger.js';

class ServiceAll {
    log(req) {
        infoLog.info(`URL: ${req.originalUrl} - Method: ${req.method}`);
    }
}

export default ServiceAll;