const express = require("express");
const cors = require("cors");
const knexfile = require("./knexfile").development;
const knex = require("knex")(knexfile);
const auth = require("./auth")(knex);
const app = express();
const port = 8080;
const ip = "localhost";

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(auth.initialize());

//Set up service and routers
const UsersRouter = require("./router/UsersRouter");
const CropRouter = require("./router/CropRouter");

const UsersService = require("./service/UsersService");
const CropService = require("./service/CropService");

const usersService = new UsersService(knex);
const cropService = new CropService(knex);

//set up router file
app.use("/api", new UsersRouter(usersService, auth).router());
app.use("/api/crops/", new CropRouter(cropService, express).router());

const DashboardRouter = require("./router/Dashboardrouter.js");
const DashboardService = require("./service/DashboardService.js");
const dashboardService = new DashboardService(knex);
const Users = require("./service/users");
const users = new Users(knex);
//set up router file
app.use("/api", new Router(users, auth).router());
app.use("/dashboard", new DashboardRouter(dashboardService, express).router());

app.listen(port, ip, () => {
  console.log(`Application listening to port ${port}`);
});
