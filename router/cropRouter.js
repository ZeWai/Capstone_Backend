const express = require("express");

class CropRouter {
  constructor(cropService, express) {
    (this.cropService = cropService), (this.express = express);
  }

  router() {
    let router = express.Router();
    // Get all crops details by user
    router.get("/:userid", this.getCrop.bind(this));
    // Submit farm planner form
    router.post("/:userid", this.addCrop.bind(this));

    return router;
  }

  getCrop(req, res) {
    return this.cropService
      .getCrop()
      .then((data) => {
        // console.log(req);
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }

  addCrop(req, res) {
    return this.cropService
      .addCrop()
      .then((data) => {
        // console.log(req);
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }
}

module.exports = CropRouter;
