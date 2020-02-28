const Express = require("express");
const Server = Express();
const PORT = process.env.PORT || 3000;


Server.get("/", (request, response) => {
    response.status(200);
    response.send("<h1>Hola Server ⚙️ 2</h1>");
});

Server.listen(PORT, () => {
    console.log("Corriendo => ", PORT);
});