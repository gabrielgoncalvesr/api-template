const pino = require('pino');
const callerId = require('caller-id');
const expressPino = require('express-pino-logger');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });

const formatMessage = (caller, message) => {
    let callerFormatted = "";
    if(caller) {
        callerFormatted = caller.replace(/([A-Z])/g, " $1").split(' ').join('_').toLowerCase() + " - ";
    }

    return callerFormatted.toUpperCase() + message;
}

const info = message => {
    const caller = callerId.getData().functionName;
    logger.info(formatMessage(caller, message));
}

const debug = message => {
    const caller = callerId.getData().functionName;
    logger.debug(formatMessage(caller, message));
}

const error = message => {
    const caller = callerId.getData().functionName;
    logger.error(formatMessage(caller, message));
}

module.exports = {
    info,
    error,
    debug,
    expressLogger
};