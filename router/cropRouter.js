const express = require("express");

class cropRouter {
  constructor(users, auth) {
    (this.users = users), (this.auth = auth);
  }

  router() {
    let router = express.Router();
    // Get all crops details by user
    router.get("/crops/:userid", this.getCrop.bind(this));
    // Submit farm planner form
    router.post("/crops/:userid", this.postCrop.bind(this));

    return router;
  }

  getCrop(req, res) {
    return;
  }
  postCrop(req, res) {}
}

module.exports = cropRouter;
