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
const FarmlogRouter = require("./router/FarmlogRouter");
const ClientNameRouter = require("./router/ClientNameRouter")

const UsersService = require("./service/UsersService");
const CropService = require("./service/CropService");
const FarmlogService = require("./service/FarmlogService");
const ClientNameService = require("./service/ClientNameService")

const usersService = new UsersService(knex);
const cropService = new CropService(knex);
const farmlogService = new FarmlogService(knex);
const clientNameService = new ClientNameService(knex);

//set up router file
app.use("/api", new UsersRouter(usersService, auth).router());
app.use("/api/crops/", new CropRouter(cropService).router());
app.use("/api/farmlog/", new FarmlogRouter(farmlogService).router());
app.use("/api/clientname/", new ClientNameRouter(clientNameService).router());

const DashboardRouter = require("./router/Dashboardrouter.js");
const DashboardService = require("./service/DashboardService.js");
const dashboardService = new DashboardService(knex);

//set up router file

app.use("/api/dashboard", new DashboardRouter(dashboardService, auth, express).router());

app.listen(port, ip, () => {
  console.log(`Application listening to port ${port}`);
});
