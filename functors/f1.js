function StringFunctor(value="",fn) {
  let chars = value.split("");
  return chars.map((char) => {
    return String.fromCharCode(fn(char.charCodeAt(0)));
  }).join("");
}

function plus1(value=0) {
  return value+1;
}
function minus1(value=0) {
  return value-1;
}
console.log([...Array(5).keys()].map(minus1));
console.log(StringFunctor("AbCd134",plus1));
