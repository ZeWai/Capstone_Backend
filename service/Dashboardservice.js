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
        console.log("at dashsowservice",id)
        return await this.knex("crop")
        .select("name")
        .where("zone_id", id)
        .andWhere("sowing", false)
        .then((info)=> {
            console.log(info.length)
            if(info.length>0){
                return info.length;
            } else {
                return 0;
            }
        })
    }

    async count4(id){
        console.log("at dashproductservice",id)
        return await this.knex("crop")
        .select("name","yield","contribution", "harvest_date") 
        .join("zone_crop","crop.id",'zone_crop.crop_id')
        .where("crop.zone_id", id)
        .andWhere("harvest", true)
        .then((info)=> {
            console.log("xxxx",info)
            if(info.length>0){
                return info;
            } else {
                console.log("not work")
                return 0;
            }
        })
    }
    async count5(id){
        console.log("at dashprogressservice", id)
        return await this.knex("crop")
        .select("id", "name","type","contribution") 
        .where("zone_id", id)
        .andWhere("harvest", false)
        .then((info)=> {
            console.log("yyyy",info)
            if(info.length>0){
                return info;
            } else {
                console.log("not work")
                return 0;
            }
        })
    }

    async count6(id){
        console.log("at dashprogressSservice", id)
        return await this.knex("crop")
        .select("crop.id", "name","type","contribution","sowing_date") 
        .join("zone_crop","crop.id", 'zone_crop.crop_id')
        .where("crop.id", id)
        .then((info)=> {
            console.log("yyyy",info)
            if(info.length>0){
                return info;
            } else {
                console.log("not work")
                return 0;
            }
        })
    }
}

module.exports = DashboardService;