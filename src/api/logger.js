import { createLogger, transports } from "winston";

const logger = createLogger({
    transports: [
        new transports.Console({level: "info"}),
        new transports.File({filename: "./src/logs/warn.log", level: "warn"}),
        new transports.File({filename: "./src/logs/error.log", level: "error"})
    ]
})

export default logger;