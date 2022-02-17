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

    console.log(`farmlog id`, farmlogId[0].id)
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
    console.log(gardenManagementInfo)
    await this.knex("garden_management").insert(gardenManagementInfo)

    await this.knex("other_issues").insert({      
      O_farm_log_id: farmlogId[0].id,
     s7q1:input.data[6].s7q1})


    //  select *  from crop inner join zone_crop on  zone_crop.crop_id = crop.id where crop.zone_id = 3 and sowing = 'f' order by sowing_date ASC;
    let cropid = await this.knex("crop")
    .innerJoin("zone_crop","zone_crop.crop_id","crop.id" )
    .where("crop.zone_id",  UsersZone[0].id)
    .where("sowing", false)
    .orderBy("sowing_date", "asc")
    
    console.log(`crop`,cropid)
    
    if (cropid.length > 0){
    await this.knex("crop").update({
       sowing: true,
    }).where("id",cropid[0].id)
  }
     return `Planting Success`
  }

  // Submit Irrigation farmlog
  async submitIrrigation(farmerId, input) {
    console.log(`submitIrrigation`)
    console.log(`submitIrrigation`)

    let UsersZone = await this.knex("zone")
    .innerJoin("users", "users.id", "zone.users_id")
    .select("zone.users_id","zone.id", "users.username", "zone.area")
    .where({ username: input.data[0].users })
    .where({ area: input.data[0].zone })

    console.log(`UsersZone`, UsersZone)

    let getfarmlogId = {
      farmer_id: farmerId,
      users_id: UsersZone[0].users_id,
      zone_id: UsersZone[0].id,
      time: input.data[0].time,
      date: input.data[0].date,
      weather: input.data[0].weather,
      temp: input.data[0].temp,
    }
    console.log(`I_getfarmlogId`,getfarmlogId)
    
    let I_farmlogId = await this.knex("farm_log").insert(getfarmlogId).returning("farm_log.id")

    let irrigationInfo = {
      I_farm_log_id: I_farmlogId[0].id,
      s3q1: input.data[2].s3q1,
      s3q1_remarks: input.data[2].s3q1_remarks,
      s3q2: input.data[2].s3q2,
      s3q2_date_start: input.data[2].s3q2_date_start,
      s3q2_date_end: input.data[2].s3q2_date_end,
      s3q2_time_start: input.data[2].s3q2_time_start,
      s3q2_time_end: input.data[2].s3q2_time_end,
      s3q2_frequency: input.data[2].s3q2_frequency,
      s3q3: input.data[2].s3q3,
    }
    console.log(`irrigationInfo`, irrigationInfo)

    await this.knex("irrigation").insert(irrigationInfo)

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

  


  postGrooming(farmlogId, input) {
    return this.knex("irrigation").insert({
      farm_log_id: farmlogId,
      s3q1: input.s3q1,
      s3q1_remarks: input.s3q1_remarks,
      s3q2: input.s3q2,
      s3q2_date_start: input.s3q2_date_start,
      s3q2_date_end: input.s3q2_date_end,
      s3q2_time_start: input.s3q2_time_start,
      s3q2_time_end: input.s3q2_time_end,
      s3q2_frequency: input.s3q2_frequency,
      s3q3: input.s3q3,
    });
  }

//      .where("sowing", true)
// harvest = false
// harvest_date <= today + 1
// time -> T23

  postHarvest(farmlogId, input) {
    return this.knex("harvest").insert({
      farm_log_id: farmlogId,
      s5q1: input.s5q1,
      s5q2: input.s5q2,
      s5q3: input.s5q3,
    });
  }

}

module.exports = FarmlogService;
