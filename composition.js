/*
You should use this over inheritance.
Prevents design mistakes
*/
const barker = (state) => {
  return {bark : () => console.log("Woof, I am " + state.name)};
}
const driver = (state) => {
  return {drive : () => console.log("Drive, I am " + state.name)};
}
const killer = (state) => {
  return {kill : () => console.log("Kill, I am " + state.name)};
}

const murderRobotDog = (name) =>{
  let state = {
    name,
    speed: 100,
    position: 0
  };

  return Object.assign(
    {},
    barker(state),
    driver(state),
    killer(state)
  );
}

murderRobotDog("sniffles").bark();
