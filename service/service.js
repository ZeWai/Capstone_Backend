const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

class Service {
    constructor(knex) {
        this.knex = knex;
    }

    async login(Username, password) {
        let user = await this.knex
            .select("*")
            .from("user")
            .where({ username: Username })
            .then((data) => data[0]);

        if (await bcrypt.compare(password, user.password)) {
            let payload = {
                id: user.id,
            };

            let token = jwt.sign(payload, config.jwtSecret);
            return token;
        }
        console.log(user)
    }

    async signup(username, password) {
        let hashedPassword = await bcrypt.hash(password, 10);
        password = hashedPassword;

        let userInfo = {
            username,
            password,
        };

        let userId = await this.knex("user").insert(userInfo).returning("id");
        return userId;
    }

    info(user) {
        let userInfo = this.knex("user").select("*").where({ id: user.id });
        return userInfo;
    }

}

module.exports = Service;
