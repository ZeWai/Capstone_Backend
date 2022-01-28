class DashboardRouter {
    constructor(dashboardService, express){
        this.dashboardService = dashboardService;
        this.express = express;
    }

    router(){
        let router = this.express.Router();
        router.get("/overview", this.get.bind(this));

        return router;
    }



get(req, res){
    return this.bookService
      .count(1)
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