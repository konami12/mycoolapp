import Express, { static as Statics } from "express";
import Path from "path";

const Server = Express();
const PORT = process.env.PORT || 3000;
const ROOT_PATH = Path.join(__dirname, "../");
// importamos el paquete mongoose
const Mongoose = require("mongoose");

// configuracion
const USER = "pokemon";
const PASS = "p0k3m0n.";
const DB = "api";

// conector


// Generamos un schema
const SCHEMA_POKEMON = new Mongoose.Schema({
    pid: Number,
    abilities: [String],
    evolution: [String],
    height: String,
    id: String,
    name: { type: String, required: true },
    species: String,
    stats: {
        attack: Number,
        defense: Number,
        hp: Number,
        sp: {
            atk: Number,
            def: Number,
        },
        speed: Number,
        total: Number,
    },
    types: [String],
    weight: String,
});

// Basado en el Schema se genera el modelo
const Pokemon = Mongoose.model("Pokemon", SCHEMA_POKEMON);

Server.use("/", Statics(`${ROOT_PATH}/public/`));


Server.use("/find/:id?", (request, response) => {
    const { id = "" } = request.params;
    Pokemon.find({}, (error, data) => {
        if (error) {
            response.status(500);
            response.json(error);
        }
        response.status(200);
        response.json(data);
    });
});


Server.get("/", (request, response) => {
    const SAVE = new Pokemon({
        name: "dante"
    });
    SAVE.save((error, data) => {
        if (error) console.log(error);
        console.log(data);
    });
    response.status(200);
    response.send("<h1>Hola Server ⚙️</h1>");
});


Mongoose.connect(
    `mongodb+srv://${USER}:${PASS}@cluster0-u55vg.mongodb.net/${DB}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (error, data) => {
        if (error) console.log(error);
        Server.listen(PORT, () => {
            console.log("Corriendo => ", PORT);
        });
    }
);

export default Server;