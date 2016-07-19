function* fib() {
  var a = 0,b = 1;
  while (true) {
    yield a;
    a = b;
    b = a+b;
  }
}

const sequencer = fib();
for(var i = 0; i <10; i++){
  console.log(sequencer.next().value);
}
