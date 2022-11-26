import { createLogger, transports as _transports } from "winston";

const logger = createLogger({
    transports: [
        new _transports.Console({level: "info"}),
        // new winston.transports.File({filename: "warn.log", level: "warn"}),
        // new winston.transports.File({filename: "error.log", level: "error"})
    ]
})

export default logger;