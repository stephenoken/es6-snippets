const _ = require('highland');
const fs = require('fs');
function readFiles(fileName="") {
  return _(fs.createReadStream(fileName,"utf8"))
    .split()
    .flatMap(line => _(parseJSON(line).then(value => value)))

}


 function parseJSON(line) {
   return new Promise((resolve, reject) => {
     try {
      resolve(JSON.parse(line));
     } catch (e) {
       reject({id:-1});
     }
   });
 }

const files = [
  "MOCK.json",
  "MOCK2.json",
  "MOCK3.json"
]

_(files).flatMap(fileName => readFiles(fileName)).parallel(3)
.each(x => console.log(`Each ${x.id}`))
