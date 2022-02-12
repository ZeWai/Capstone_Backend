// **** need think how to pass farmlog_id ****

const express = require("express");

class FarmlogRouter {
  constructor(farmlogService, auth) {
    this.farmlogService = farmlogService;
    this.auth = auth;
  }

  router() {
    let router = express.Router();
    router.get("/", this.auth.authenticate(), this.get.bind(this));
    router.post("/s1", this.auth.authenticate(), this.post_s1.bind(this));
    router.post("/s2", this.auth.authenticate(), this.post_s2.bind(this));
    router.post("/s3", this.auth.authenticate(), this.post_s3.bind(this));
    router.post("/s4", this.auth.authenticate(), this.post_s4.bind(this));
    router.post("/s5", this.auth.authenticate(), this.post_s5.bind(this));
    router.post("/s6", this.auth.authenticate(), this.post_s6.bind(this));
    router.post("/s7", this.auth.authenticate(), this.post_s7.bind(this));

    return router;
  }

  // GET form data
  // ==================================
  get(req, res) {
    return this.farmlogService
      .list()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }

  // POST form data
  // ==================================
  post_s1(req, res) {
    return this.farmlogService
      .submit_s1(req.body.form)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }

  post_s2(req, res) {
    return this.farmlogService
      .submit_s2(req.body.form)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }
  post_s3(req, res) {
    return this.farmlogService
      .submit_s3(req.body.form)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }
  post_s4(req, res) {
    return this.farmlogService
      .submit_s4(req.body.form)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }
  post_s5(req, res) {
    return this.farmlogService
      .submit_s5(req.body.form)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }
  post_s6(req, res) {
    return this.farmlogService
      .submit_s6(req.body.form)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
  }
  post_s7(req, res) {
    return this.farmlogService
      .submit_s7(req.body.form)
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
