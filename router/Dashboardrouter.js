

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
        router.get("/productivity", this.auth.authenticate(), this.getproductivity.bind(this));
        router.get("/progress", this.auth.authenticate(), this.getprogress.bind(this));
        router.get("/progressS/:id",this.getprogressS.bind(this));
        return router;
    }
getclient(req, res) {
    console.log("at dash router22222222")
return this.dashboardService
    .client(req.user[0].id)
    .then((data) => res.json(data));
}


getharvest(req, res){
    console.log("at dash router")
    return this.dashboardService
      .count(req.user[0].id)
      .then((data) => {
          console.log("atdashroutethen", data)
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
    }


getgrowing(req, res){
    console.log("at dash router")
    return this.dashboardService
      .count2(req.user[0].id)
      .then((data) => {
          console.log("atdashroutethen2", data)
        res.json(data);
      })
      .catch((err) => {
        res.status(500);
        return res.json(err);
      });
    }
getsow(req, res){
    console.log("at dash router")
    return this.dashboardService
        .count3(req.user[0].id)
        .then((data) => {
            console.log("atdashroutethen3", data)
        res.json(data);
        })
        .catch((err) => {
        res.status(500);
        return res.json(err);
        });
    }

getproductivity(req, res){
    console.log("at dash router4")
    return this.dashboardService
        .count4(req.user[0].id)
        .then((data) => {
            console.log("atdashroutethen4", data)
        res.json(data);
        })
        .catch((err) => {
        res.status(500);
        return res.json(err);
        });
}

getprogress(req, res){
    console.log("at dash router5")
    return this.dashboardService
        .count5(req.user[0].id)
        .then((data) => {
            console.log("atdashroutethen5", data)
        res.json(data);
        })
        .catch((err) => {
        res.status(500);
        return res.json(err);
        });
}

getprogressS(req, res){
    console.log("at dash router6",req.params.id)
    return this.dashboardService
        .count6(req.params.id)
        .then((data) => {
            console.log("atdashroutethen6", data)
        res.json(data);
        })
        .catch((err) => {
        res.status(500);
        return res.json(err);
        });
}
}

module.exports = DashboardRouter;