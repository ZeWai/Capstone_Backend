class FarmlogService {
  constructor(knex) {
    this.knex = knex;
  }

  // Submit Planting farmlog
  async submitPlanting(farmerId, input) {
    let UsersZone = await this.knex("zone")
    .innerJoin("users", "users.id", "zone.users_id")
    .select("zone.users_id","zone.id", "users.username", "zone.area")
    .where({ username: input.data[0].users })
    .where({ area: input.data[0].zone })
    let getfarmlogId = {
      farmer_id: farmerId,
      users_id: UsersZone[0].users_id,
      zone_id: UsersZone[0].id,
      time: input.data[0].time,
      date: input.data[0].date,
      weather: input.data[0].weather,
      temp: input.data[0].temp,
    }
    let farmlogId = await this.knex("farm_log").insert(getfarmlogId).returning("farm_log.id")

    if (farmlogId === undefined) {
      let err = "Incorrect input of Client and Zone";
      return err;
    } 

    let plantingInfo = {
      P_farm_log_id: farmlogId[0].id,
      s2q1: input.data[1].s2q1,
      s2q1_remarks: input.data[1].s2q1_remarks,
      s2q2: input.data[1].s2q2,
      s2q2_fertiliser: input.data[1].s2q2_fertiliser,
      s2q2_remarks: input.data[1].s2q2_remarks,
      s2q3: input.data[1].s2q3,
      s2q3_remarks: input.data[1].s2q3_remarks,
      s2q4: input.data[1].s2q4,
      s2q4_remarks: input.data[1].s2q4_remarks,
    }
    await this.knex("planting").insert(plantingInfo)

    let gardenManagementInfo = {
      GA_farm_log_id: farmlogId[0].id,
      s6q1: input.data[5].s6q1,
      s6q1_remarks: input.data[5].s6q1_remarks,
      s6q2: input.data[5].s6q2,
      s6q3: input.data[5].s6q3,
      s6q3_fertiliser: input.data[5].s6q3_fertiliser,
      s6q3_quantity: input.data[5].s6q3_quantity,
      s6q3_remarks: input.data[5].s6q3_remarks,
      s6q4: input.data[5].s6q4,
      s6q4_remarks: input.data[5].s6q4_remarks,
    }
    await this.knex("garden_management").insert(gardenManagementInfo)

    await this.knex("other_issues").insert({      
      O_farm_log_id: farmlogId[0].id,
     s7q1:input.data[6].s7q1})


    let cropid = await this.knex("crop")
    .innerJoin("zone_crop","zone_crop.crop_id","crop.id" )
    .where("crop.zone_id",  UsersZone[0].id)
    .where("sowing", false)
    .orderBy("sowing_date", "asc")
    
    if (cropid.length > 0){
    await this.knex("crop").update({
       sowing: true,
    }).where("id",cropid[0].id)
  }
     return `Planting Success`
  }

  // Submit Irrigation farmlog
  async submitIrrigation(farmerId, input) {
    let UsersZone = await this.knex("zone")
    .innerJoin("users", "users.id", "zone.users_id")
    .select("zone.users_id","zone.id", "users.username", "zone.area")
    .where({ username: input.data[0].users })
    .where({ area: input.data[0].zone })

    let getfarmlogId = {
      farmer_id: farmerId,
      users_id: UsersZone[0].users_id,
      zone_id: UsersZone[0].id,
      time: input.data[0].time,
      date: input.data[0].date,
      weather: input.data[0].weather,
      temp: input.data[0].temp,
    }

    let I_farmlogId = await this.knex("farm_log").insert(getfarmlogId).returning("farm_log.id")
    let irrigationInfo = {
      I_farm_log_id: I_farmlogId[0].id,
      s3q1: input.data[2].s3q1,
      s3q1_remarks: input.data[2].s3q1_remarks,
      s3q2: input.data[2].s3q2,
      //s3q2_date_start: input.data[2].s3q2_date_start,
      //s3q2_date_end: input.data[2].s3q2_date_end,
      //s3q2_time_start: input.data[2].s3q2_time_start,
      //s3q2_time_end: input.data[2].s3q2_time_end,
      s3q2_frequency: input.data[2].s3q2_frequency,
      s3q3: input.data[2].s3q3,
    }
    console.log(irrigationInfo)

    await this.knex("irrigation").insert(irrigationInfo)
    console.log("hi")

    let gardenManagementInfo = {
      GA_farm_log_id: I_farmlogId[0].id,
      s6q1: input.data[5].s6q1,
      s6q1_remarks: input.data[5].s6q1_remarks,
      s6q2: input.data[5].s6q2,
      s6q3: input.data[5].s6q3,
      s6q3_fertiliser: input.data[5].s6q3_fertiliser,
      s6q3_quantity: input.data[5].s6q3_quantity,
      s6q3_remarks: input.data[5].s6q3_remarks,
      s6q4: input.data[5].s6q4,
      s6q4_remarks: input.data[5].s6q4_remarks,
    }
    console.log(gardenManagementInfo)
    await this.knex("garden_management").insert(gardenManagementInfo)

    await this.knex("other_issues").insert({      
      O_farm_log_id: I_farmlogId[0].id,
     s7q1:input.data[6].s7q1})

    return `Irrigation Success`
  }

  // Submit Groomingn farmlog
  async submitGrooming(farmerId, input) {
    let UsersZone = await this.knex("zone")
    .innerJoin("users", "users.id", "zone.users_id")
    .select("zone.users_id","zone.id", "users.username", "zone.area")
    .where({ username: input.data[0].users })
    .where({ area: input.data[0].zone })

    let getfarmlogId = {
      farmer_id: farmerId,
      users_id: UsersZone[0].users_id,
      zone_id: UsersZone[0].id,
      time: input.data[0].time,
      date: input.data[0].date,
      weather: input.data[0].weather,
      temp: input.data[0].temp,
    }
    
    let G_farmlogId = await this.knex("farm_log").insert(getfarmlogId).returning("farm_log.id")

    let groomingInfo = {
      G_farm_log_id: G_farmlogId[0].id,
      s4q1: input.data[3].s4q1,
      s4q1_pest: input.data[3].s4q1_pest,
      s4q1_dosage: input.data[3].s4q1_dosage,
      s4q1_remarks: input.data[3].s4q1_remarks,
      s4q2: input.data[3].s4q2,
      s4q2_remarks: input.data[3].s4q2_remarks,
      s4q3: input.data[3].s4q3,
      s4q3_remarks: input.data[3].s4q3_remarks,
      s4q4: input.data[3].s4q4,
    }

    await this.knex("grooming").insert(groomingInfo)

    let gardenManagementInfo = {
      GA_farm_log_id: G_farmlogId[0].id,
      s6q1: input.data[5].s6q1,
      s6q1_remarks: input.data[5].s6q1_remarks,
      s6q2: input.data[5].s6q2,
      s6q3: input.data[5].s6q3,
      s6q3_fertiliser: input.data[5].s6q3_fertiliser,
      s6q3_quantity: input.data[5].s6q3_quantity,
      s6q3_remarks: input.data[5].s6q3_remarks,
      s6q4: input.data[5].s6q4,
      s6q4_remarks: input.data[5].s6q4_remarks,
    }
    await this.knex("garden_management").insert(gardenManagementInfo)

    await this.knex("other_issues").insert({      
      O_farm_log_id: G_farmlogId[0].id,
     s7q1:input.data[6].s7q1})

    return `Grooming Success`
  }


  // Submit Harvest farmlog
  async submitHarvest(farmerId, input) {
    let UsersZone = await this.knex("zone")
    .innerJoin("users", "users.id", "zone.users_id")
    .select("zone.users_id","zone.id", "users.username", "zone.area")
    .where({ username: input.data[0].users })
    .where({ area: input.data[0].zone })

    let getfarmlogId = {
      farmer_id: farmerId,
      users_id: UsersZone[0].users_id,
      zone_id: UsersZone[0].id,
      time: input.data[0].time,
      date: input.data[0].date,
      weather: input.data[0].weather,
      temp: input.data[0].temp,
    }
    
    let H_farmlogId = await this.knex("farm_log").insert(getfarmlogId).returning("farm_log.id")

    let harvestInfo = {
      H_farm_log_id: H_farmlogId[0].id,
      s5q1: input.data[4].s5q1,
      s5q2: input.data[4].s5q2,
      s5q3: input.data[4].s5q3,
    }

    await this.knex("harvest").insert(harvestInfo)

    let gardenManagementInfo = {
      GA_farm_log_id: H_farmlogId[0].id,
      s6q1: input.data[5].s6q1,
      s6q1_remarks: input.data[5].s6q1_remarks,
      s6q2: input.data[5].s6q2,
      s6q3: input.data[5].s6q3,
      s6q3_fertiliser: input.data[5].s6q3_fertiliser,
      s6q3_quantity: input.data[5].s6q3_quantity,
      s6q3_remarks: input.data[5].s6q3_remarks,
      s6q4: input.data[5].s6q4,
      s6q4_remarks: input.data[5].s6q4_remarks,
    }
    await this.knex("garden_management").insert(gardenManagementInfo)

    await this.knex("other_issues").insert({      
      O_farm_log_id: H_farmlogId[0].id,
     s7q1:input.data[6].s7q1})

     var today = new Date();
 
     let cropid = await this.knex("crop")
     .innerJoin("zone_crop","zone_crop.crop_id","crop.id" )
     .where("crop.zone_id",  UsersZone[0].id)
     .where("crop.name", input.data[4].s5q1)
     .where("sowing", true)
     .where("harvest_date","<=", today);
     
    if (cropid.length == 1){
    await this.knex("crop").update({
       harvest: true,
    }).where("id",cropid[0].id)
    } else {
     throw new Error("Fail to update status")
    }

    return `harvest Success`
  }

}

module.exports = FarmlogService;
