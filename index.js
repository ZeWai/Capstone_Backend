const express = require("express");
const cors = require("cors");
const knexfile = require("./knexfile").development;
const knex = require("knex")(knexfile);
const auth = require("./auth")(knex);
const app = express();
const Router = require("./router/router");
const port = 8080;
const ip = "localhost";

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(auth.initialize());

//Set up service and routers
const Users = require("./service/users");
const users = new Users(knex);
//set up router file
app.use("/api", new Router(users, auth).router());

app.listen(port, ip, () => {
    console.log(`Application listening to port ${port}`);
});
