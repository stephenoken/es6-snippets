"use strict";

function* fib() {
	var fn1 = 0,fn2 = 1;
	while(true){
		var currentValue = fn1;
		fn1 = fn2;
		fn2 = currentValue+fn2;
		yield currentValue;
	}
}

const sequencer = fib();
for (var i = 0; i < 10; i++) {
	  console.log(sequencer.next().value);
}
