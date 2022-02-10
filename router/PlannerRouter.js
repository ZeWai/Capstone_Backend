class PlannerRouter {
    constructor(plannerService, express){
        this.plannerService = plannerService;
        this.express = express;
    
    }
    router() {
        let router = this.express.Router();
        router.post("/", this.postplanner.bind(this));
        return router;
    }

    postplanner(req, res) {
        console.log("at postroute", req.body)
        return this.plannerService.postPlanner(1,req.body.PlannerForm)
        .then((data) => res.json(data));
    }
}
module.exports = PlannerRouter;