const express = require("express");

class CropRouter {
  constructor(cropService, auth) {
    this.cropService = cropService;
    this.auth = auth;
  }

  router() {
    let router = express.Router();
    // Get all crops details by user
    router.get("/", this.auth.authenticate(), this.getCrop.bind(this));
    // Submit farm planner form
    router.post("/:userid", this.auth.authenticate(), this.addCrop.bind(this));
    router.get("/readytoharvest/:location", this.auth.authenticate(), this.getReadyToHarvest.bind(this))
    router.get("/readytoharvest/:location/:zone", this.auth.authenticate(), this.getZoneCrop.bind(this))
    router.get("/todo/:location/:zone", this.auth.authenticate(), this.getTodo.bind(this))
    return router;
  }

  getCrop(req, res) {
    return this.cropService
      .getCrop()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }

  addCrop(req, res) {
    return this.cropService
      .addCrop(
        req.session.passport.user.users_id,
        req.body.area,
        req.body.cropinfo
      )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }

  getReadyToHarvest(req, res) {
    return this.cropService
      .getReadyToHarvest(
        req.params.location
      )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err)
      })
  }

  getZoneCrop(req, res) {
    return this.cropService
      .getZoneCrop(
        req.params.location,
        req.params.zone
      )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err)
      })
  }

  getTodo(req, res) {
    return this.cropService
      .getTodo(
        req.params.location,
        req.params.zone
      )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err)
      })
  }
}

module.exports = CropRouter;
