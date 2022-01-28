class DashboardService {
    constructor(knex){
        this.knex = knex;
    }


    async count(id){
        console.log("at dashservice",id)
        return await this.knex("crop")
        .select("name")
        .where("zone_id", id)
        .andWhere("sowing", true)
        .andWhere("irrigation", true)
        .then((info)=> {
            console.log(info.length)
            if(info.length>0){
                return info.length;
            } else {
                throw new Error("not existing");
            }
        })
    }

    async count2(id){
        console.log("at dashservice",id)
        return await this.knex("crop")
        .select("name")
        .where("zone_id", id)
        .andWhere("sowing", true)
        .then((info)=> {
            console.log(info.length)
            if(info.length>0){
                return info.length;
            } else {
                throw new Error("not existing");
            }
        })
    }

    async count3(id){
        console.log("at dashservice",id)
        return await this.knex("crop")
        .select("name")
        .where("zone_id", id)
        .andWhere("sowing", false)
        .then((info)=> {
            console.log(info.length)
            if(info.length>0){
                return info.length;
            } else {
                throw new Error("not existing");
            }
        })
    }
}

module.exports = DashboardService;