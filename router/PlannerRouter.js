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
        router.get("/getcropstore",this.getcropstore.bind(this));
        router.get("/getcropinfo/:crop",this.getcropinfo.bind(this));
        return router;
    }

    getcropstore(req, res) {
        return this.plannerService.getCropstore()
        .then((data) => res.json(data));
    }

    getcropinfo(req, res) {
        return this.plannerService.getCropinfo(req.params.crop)
        .then((data) => res.json(data));
    }

    postplanner(req, res) {
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