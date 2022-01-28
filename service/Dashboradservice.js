class DashboardService {
    constructor(knex){
        this.knex = knex;
    }


    count(id){
        return this.knex("crop")
        .select("name")
        .where("zone_id", id)
        .andWhere("sowing", true)
        .then((info)=> {
            if(info.length>0){
                return info.length;
            } else {
                throw new Error("not existing");
            }
        })
    }
}