import Express, { static as Statics } from "express";
import Path from "path";

const Server = Express();
const PORT = process.env.PORT || 3000;
const ROOT_PATH = Path.join(__dirname, "../");

Server.use("/", Statics(`${ROOT_PATH}/public/`));

Server.get("/", (request, response) => {
    response.status(200);
    response.send("<h1>Hola Server ⚙️</h1>");
});

Server.listen(PORT, () => {
    console.log("Corriendo => ", PORT);
});


export default Server;