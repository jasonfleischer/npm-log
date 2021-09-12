// Usage:

// in JS (ex main.js):
// const { log, logE, turnOffNonErrorLogs } = require("../node_modules/simple-log-kit/index")
// log("normal message");
// logE("error message");
// turnOffNonErrorLogs();

var LOG_NON_ERROR_MESSAGES = true;

exports.log = (msg) => {
	if (LOG_NON_ERROR_MESSAGES)
		console.log(msg);
};

exports.logE = (msg) => {
	console.log("%c ERROR: " + msg, "background: red; color: white; display: block;");
};

exports.turnOffNonErrorLogs = () => {
	LOG_NON_ERROR_MESSAGES = false
};




////////

const var log = {}

log.i = function(msg) {
	if (LOG_NON_ERROR_MESSAGES)
		console.log(msg);
}

log.e = function(msg) {
	console.log("%c ERROR: " + msg, "background: red; color: white; display: block;");
}

//var log = require("simple-log-kit")

module.exports = log
