

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
          console.log("atdashroutethen", data)
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
            console.log("atdashroutethen", data)
        res.json(data);
        })
        .catch((err) => {
        res.status(500);
        return res.json(err);
        });
    }
}

module.exports = DashboardRouter;