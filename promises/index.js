const prom = require("./prom");

//Really shitty
prom.cb(5,(err,success1)=>{
	console.log(success1);
});
prom.cb(1,(err,success2) =>{
	console.log(success2);
});
prom.cb(1,(err,success3)=>{
	console.log(success3);
	console.log("This is crap");
});

//Still kind of shitty
prom.p(5).then((response)=>{
	console.log(response);
});
prom.p(1).then((response)=>{
	console.log(response);
});
prom.p(1).then((response)=>{
	console.log(response);
	console.log("Better but still not great");
});

Promise.all([
	prom.p(5),
	prom.p(1),
	prom.p(1)
]).then((responses)=>{
	responses.forEach(response => console.log(response));
}).catch(err => {
	console.log("error");
});
