// **** need think how to pass farmlog_id ****

const express = require("express");

class FarmlogRouter {
  constructor(farmlogService, auth) {
    this.farmlogService = farmlogService;
    this.auth = auth;
  }

  router() {
    let router = express.Router();
    // router.get("/", this.auth.authenticate(), this.get.bind(this));
    router.post("/:userid/planting", this.postPlanting.bind(this));
    router.post("/:userid/irrigation", this.postIrrigation.bind(this));
    router.post("/:userid/grooming", this.postGrooming.bind(this));
    router.post("/:userid/harvest", this.postHarvest.bind(this));
    return router;
  }

  // GET form data
  // ==================================
  // get(req, res) {
  //   return this.farmlogService
  //     .list()
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((err) => {
  //       res.status(500);
  //       return res.json(err);
  //     });
  // }

  // POST form data
  // ==================================
  
  
  postPlanting(req, res) {
    return this.farmlogService
      .submitPlanting(req.params.userid, req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }

  postIrrigation(req, res) {
    return this.farmlogService
      .submitIrrigation(req.params.userid, req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }
  postGrooming(req, res) {
    return this.farmlogService
      .submitGrooming(req.params.userid,req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }
  postHarvest(req, res) {
    return this.farmlogService
      .submitHarvest(req.params.userid,req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }

}

module.exports = FarmlogRouter;
