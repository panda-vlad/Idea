// const Router = require(IMPORT ROUTE FROM: koa, express, etc)

const userRoute = require("./routes");

const routes = new Route();
routes.use("/users", /** middleware validation */ userRoute);
