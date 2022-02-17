class PlannerService {
    constructor(knex){
        this.knex = knex;
    }

    async getZoneinFP(id) {
        let zone = await this.knex
            .select("area")
            .from("zone")
            .where("users_id", id)

        return zone;
    }

    async getCropstore(){
        let crop = await this.knex
            .select("*")
            .from("crop_store")
        return crop;
    }

    async getCropinfo(crop){
        let cropinfo = await this.knex
            .select("*")
            .from("crop_store")
            .where("name", crop)
        return cropinfo;
    }
    
    async postPlanner(id,Pinfo){
        let Zoneid = await this.knex("zone").select("id").where("users_id", id).andWhere("area", Pinfo.zone);
        let CropInsert = {
            zone_id: Zoneid[0].id,
            name: Pinfo.cropN,
            type: Pinfo.cropT,
            yield: Pinfo.yield,
            contribution: Pinfo.Contri,
            image:Pinfo.image,
            sowing: false,
            grooming: false,
            harvest: false,
          };
        let Cropid = await this.knex("crop").insert(CropInsert).returning("id")
        let Zone_cropInsert = {
            crop_id: Cropid[0].id,
            zone_id: Zoneid[0].id,
            sowing_date: Pinfo.SowD,
            irrigation_period: parseInt(Pinfo.IrriD),
            grooming_date: Pinfo.SowD,
            harvest_date: Pinfo.HarD,
          };
        await this.knex("zone_crop").insert(Zone_cropInsert)
        if(typeof Cropid[0].id== "number"){ 
            return ("Success to save farm planner!")
        } else {
            throw new Error("Fail to save farm planner");
        }
    }
} 
module.exports = PlannerService;