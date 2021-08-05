const eventEmitter = require("./emitterFile");

setInterval(() => {
  test = {
    a: "sea",
    b: "ase",
  };
  eventEmitter.emitter.emit("test", test);
}, 1000 * 1);

// eventEmitter.on("test", (data) => {
//   // newData = data;
//   console.log(data);
// });
