//Arrow Functions
console.log("Arrow functions");
var evens =[2,4,6,8,10,20];
var odds = evens.map(v => v+1);
var nums = evens.map((v,i)=> v+i);
var fives = [];
nums.forEach(v => {
  if(v%5===0)
    fives.push(v);
});

//Lexical this
var rob ={
  _name:"Rob"
}
var bob = {
  _name:"Bob",
  _friends: [rob],
  printFriends:function (){
    this._friends.forEach(f => console.log(`${this._name} knows ${f._name}`));
  }
}
// NOTE: This is a multiline string hence the ``  it allows trmplate strings, take that groovy
console.log(
`Odds: ${odds}
Nums: ${nums}
Fives: ${fives}
bob: ${bob.printFriends()}`
);

//Object Literals
class Animal {
  constructor(name) {
    this._name = name;
  }

  makeNoise(){
    return `${this._name} made a noise`
  }
}

class Dog extends Animal{
  makeNoise(){
    return `${this._name} barked`
  }
}
var animal = new Animal("Generic Animal");
var dog = new Dog("Lola");
console.log(animal.makeNoise());
console.log(dog.makeNoise());
