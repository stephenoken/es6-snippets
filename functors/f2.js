const whenDragonLoaded = new Promise((resolve, reject) =>{
  setTimeout(()=> resolve(
    {name:'Fluffy',health:70}
  ),2000);
});

const names = whenDragonLoaded.then(name => console.log(name));
