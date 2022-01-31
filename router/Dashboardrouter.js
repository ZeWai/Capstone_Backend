

class DashboardRouter {
    constructor(dashboardService, express){
        this.dashboardService = dashboardService;
        this.express = express;
    }

    router(){
        let router = this.express.Router();
        router.get("/harvest", this.getharvest.bind(this));
        router.get("/growing", this.getgrowing.bind(this));
        router.get("/sow", this.getsow.bind(this));
        router.get("/productivity", this.getproductivity.bind(this));
        router.get("/progress", this.getprogress.bind(this));
        router.get("/progressS/:id", this.getprogressS.bind(this));
        return router;
    }



getharvest(req, res){
    console.log("at dash router")
    return this.dashboardService
      .count(1)
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
      .count2(1)
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
        .count3(1)
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
        .count4(1)
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
        .count5(1)
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