const eventEmitter = require("./emitterFile");

// eventEmitter.addListener("test", () => {
//   console.log("connected");
// });
var newData;
eventEmitter.emitter.on("test", (data) => {
  newData = data;
  console.log(newData);
});
