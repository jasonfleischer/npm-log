
var LOG_NON_ERROR_MESSAGES = true;

export const log = (msg) => {
	if (LOG_NON_ERROR_MESSAGES)
		console.log(msg);
};
export const logE = (msg) => {
	console.log("%c ERROR: " + msg, "background: red; color: white; display: block;");
};
