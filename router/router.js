const express = require("express");

class Router {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
    }

    router() {
        let router = express.Router();

        router.post("/login", this.login.bind(this));
        router.post("/signup", this.signup.bind(this));
        router.get('/info', this.auth.authenticate(), this.info.bind(this))
        return router;
    }

    login(req, res) {
        return this.service
            .login(req.body.username, req.body.password)
            .then((token) => (token ? res.json(token) : res.sendStatus(401)));
    }

    signup(req, res) {
        return this.service
            .signup(req.body.username, req.body.password)
            .then((userId) => res.send(userId));
    }

    info(req, res) {
        return this.service.info(req.user[0]).then((data) => res.send(data));
    }
}

module.exports = Router;
