const express = require("express");

class ZoneRouter {
    constructor(zoneService, auth) {
        this.zoneService = zoneService;
        this.auth = auth;
    }

    router() {
        let router = express.Router();
        router.get("/:location", this.auth.authenticate(), this.getZone.bind(this));
        return router;
    }

    getZone(req, res) {
        return this.zoneService
            .getZone(req.params.location)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500);
                return res.json(err);
            });
    }
}

module.exports = ZoneRouter;
