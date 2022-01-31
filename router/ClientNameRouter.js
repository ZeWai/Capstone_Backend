const express = require("express");

class ClientNameRouter {
    constructor(clientNameService) {
        this.clientNameService = clientNameService;
    }

    router() {
        let router = express.Router();
        // Get all crops details by user
        router.get("/:id", this.getclientname.bind(this));
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
