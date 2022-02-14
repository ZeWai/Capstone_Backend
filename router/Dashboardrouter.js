

class DashboardRouter {
    constructor(dashboardService,auth, express){
        this.dashboardService = dashboardService;
        this.express = express;
        this.auth= auth;
    }

    router(){
        let router = this.express.Router();
        router.get("/client", this.auth.authenticate(),this.getclient.bind(this));
        router.get("/harvest", this.auth.authenticate(),this.getharvest.bind(this));
        router.get("/growing",this.auth.authenticate(), this.getgrowing.bind(this));
        router.get("/sow", this.auth.authenticate(),this.getsow.bind(this));
        router.get("/size", this.auth.authenticate(),this.getsize.bind(this));
        router.get("/productivity", this.auth.authenticate(), this.getproductivity.bind(this));
        router.get("/progress", this.auth.authenticate(), this.getprogress.bind(this));
        router.get("/progressS/:id",this.getprogressS.bind(this));
        router.get("/scheduled", this.auth.authenticate(), this.getscheduled.bind(this));
        return router;
    }
getclient(req, res) {
return this.dashboardService
    .client(req.user[0].id)
    .then((data) => res.json(data));
}


getsize(req, res) {
    return this.dashboardService
    .getSoil(req.user[0].id)
    .then((data) => this.dashboardService.Addsize(data))
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500);
      return res.json(err);
    });
}

getharvest(req, res){
    return this.dashboardService
      .count(req.user[0].id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        return res.json(err);
      });
    }


getgrowing(req, res){
    return this.dashboardService
      .count2(req.user[0].id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
    }
getsow(req, res){
    return this.dashboardService
        .count3(req.user[0].id)
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(500);
        return res.json(err);
        });
    }

getproductivity(req, res){
    return this.dashboardService
        .count4(req.user[0].id)
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(500);
        return res.json(err);
        });
}

getprogress(req, res){
    return this.dashboardService
        .count5(req.user[0].id)
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(500);
        return res.json(err);
        });
}

getprogressS(req, res){
    return this.dashboardService
        .count6(req.params.id)
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(500);
        return res.json(err);
        });
}

getscheduled(req, res){
    return this.dashboardService
        .getscheduled(req.user[0].id)
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(500);
        return res.json(err);
        });
}
}

module.exports = DashboardRouter;