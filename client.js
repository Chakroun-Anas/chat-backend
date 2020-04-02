const socket = require("socket.io-client")("http://localhost:3000");
socket.on("connect", function() {
  console.log(`Client is connected to the server`);
});
socket.on("event", function(data) {
  console.log(`Data received from the server: ${data}`);
});
socket.on("disconnect", function() {
  console.log(`Disconnected from the server`);
});
