const express = require("express");

class ClientNameRouter {
    constructor(clientNameService, auth) {
        this.clientNameService = clientNameService;
        this.auth = auth;
    }

    router() {
        let router = express.Router();
        // Get all crops details by user
        router.get("/:id", this.auth.authenticate(), this.getclientname.bind(this));
        return router;
    }

    getclientname(req, res) {
        return this.clientNameService
            .getClientName(req.params.id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500);
                return res.json(err);
            });
    }
}

module.exports = ClientNameRouter;
