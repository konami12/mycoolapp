"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Server = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
Server.get("/", function (request, response) {
  response.status(200);
  response.send("<h1>Hola Server ⚙️ 2 Glitch</h1>");
});
Server.listen(PORT, function () {
  console.log("Corriendo => ", PORT);
});