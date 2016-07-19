let sleep = require("sleep");

function promWithCB (time,cb){
	sleep.sleep(time);
	cb(null,`Successful call slept for ${time} seconds`);
}

function prom(time) {
	return new Promise((resolve, reject) => {
		let response = `Successful call slept for ${time} seconds`
		sleep.sleep(time);
		resolve(response)
	});
}

module.exports.cb = promWithCB
module.exports.p = prom
