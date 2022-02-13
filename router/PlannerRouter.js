class PlannerRouter {
    constructor(plannerService,auth, express){
        this.plannerService = plannerService;
        this.auth= auth;
        this.express = express;
    
    }
    router() {
        let router = this.express.Router();
        router.post("/:userid", this.postplanner.bind(this));
        router.get("/getzone", this.auth.authenticate(),this.getzone.bind(this));
        return router;
    }

    postplanner(req, res) {
        console.log("at postroute", req.body)
        return this.plannerService.postPlanner(req.params.userid,req.body.PlannerForm)
        .then((data) => res.json(data));
    }

    getzone(req, res){
        return this.plannerService
            .getZoneinFP(req.user[0].id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500);
                return res.json(err);
            });
    }

    
}
module.exports = PlannerRouter;