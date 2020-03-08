"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Server = (0, _express["default"])();
var PORT = process.env.PORT || 3000;

var ROOT_PATH = _path["default"].join(__dirname, "../"); // importamos el paquete mongoose


var Mongoose = require("mongoose"); // configuracion


var USER = "jmendez";
var PASS = "konami05";
var DB = "api"; // conector

Mongoose.connect("mongodb+srv://".concat(USER, ":").concat(PASS, ".@cluster0-n1dqb.mongodb.net/").concat(DB, "?retryWrites=true&w=majority"), {
  useNewUrlParser: true
}); // Generamos un schema

var SCHEMA_POKEMON = new Mongoose.Schema({
  pid: Number,
  abilities: [String],
  evolution: [String],
  height: String,
  id: String,
  name: {
    type: String,
    required: true
  },
  species: String,
  stats: {
    attack: Number,
    defense: Number,
    hp: Number,
    sp: {
      atk: Number,
      def: Number
    },
    speed: Number,
    total: Number
  },
  types: [String],
  weight: String
}); // Basado en el Schema se genera el modelo

var Pokemon = Mongoose.model("Pokemon", SCHEMA_POKEMON);
Server.use("/", (0, _express["static"])("".concat(ROOT_PATH, "/public/")));
Server.get("/", function (request, response) {
  var SAVE = new Pokemon({
    name: "dante"
  });
  SAVE.save(function (error, data) {
    if (error) console.log(error);
    console.log(data);
  });
  response.status(200);
  response.send("<h1>Hola Server ⚙️</h1>");
});
Server.listen(PORT, function () {
  console.log("Corriendo => ", PORT);
});
var _default = Server;
exports["default"] = _default;