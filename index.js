const express = require("express");
const cors = require("cors");
const knexfile = require("./knexfile").development;
const knex = require("knex")(knexfile);
const auth = require("./auth")(knex);
const app = express();
const Router = require("./router/router");
const Service = require("./service/service");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(auth.initialize());

const services = new Service(knex);

//set up router file
app.use("/api", new Router(services, auth).router());

app.listen(8080, () => {
    console.log("Application listening to port 8080");
});
