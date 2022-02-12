class FarmlogService {
  constructor(knex) {
    this.knex = knex;
  }

  // list all the farmlog
  list() {
    return this.knex("farm_log")
      .select("*")
      .innerJoin("planting", "farm_log.id", "planting.farm_log_id")
      .innerJoin("irrigation", "farm_log.id", "irrigation.farm_log_id")
      .innerJoin("grooming", "farm_log.id", "grooming.farm_log_id")
      .innerJoin("harvest", "farm_log.id", "harvest.farm_log_id")
      .innerJoin(
        "garden_management",
        "farm_log.id",
        "garden_management.farm_log_id"
      )
      .innerJoin("other_issues", "farm_log.id", "other_issues.farm_log_id")
      .then((info) => {
        if (info.length > 0) {
          return info;
        } else {
          throw new Error("Cannot list farmlog.");
        }
      });
  }

  submit_s1(farmerId, usersId, zoneId, input) {
    return this.knex("farm_log").insert({
      // ******
      farmer_id: farmerId,
      users_id: usersId,
      zone_id: zoneId,
      time: input.time,
      date: input.date,
      weather: input.weather,
      temp: input.temp,
    });
  }
  submit_s2(farmlogId, input) {
    return this.knex("planting").insert({
      farm_log_id: farmlogId,
      s2q1: input.s2q1,
      s2q1_remarks: input.s2q1_remarks,
      s2q2: input.s2q2,
      s2q2_fertiliser: input.s2q2_fertiliser,
      s2q2_method: input.s2q2_method,
      s2q2_remarks: input.s2q2_remarks,
      s2q3: input.s2q3,
      s2q3_cropType: input.s2q3_cropType,
      s2q3_quantity: input.s2q3_quantity,
      s2q3_remarks: input.s2q3_remarks,
      s2q4: input.s2q4,
      s2q4_cropType: input.s2q4_cropType,
      s2q4_fertiliser: input.s2q4_fertiliser,
      s2q4_usage: input.s2q4_usage,
      s2q4_remarks: input.s2q4_remarks,
    });
  }
  submit_s3(farmlogId, input) {
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

  submit_s4(farmlogId, input) {
    return this.knex("grooming").insert({
      farm_log_id: farmlogId,
      s4q1: input.s4q1,
      s4q1_substanceType: input.s4q1_substanceType,
      s4q1_cropType: input.s4q1_cropType,
      s4q1_dosage: input.s4q1_dosage,
      s4q1_remarks: input.s4q1_remarks,
      s4q2: input.s4q2,
      s4q2_cropType: input.s4q2_cropType,
      s4q2_remarks: input.s4q2_remarks,
      s4q3: input.s4q3,
      s4q3_cropType: input.s4q3_cropType,
      s4q3_remarks: input.s4q3_remarks,
      s4q4: input.s4q4,
    });
  }

  submit_s5(farmlogId, input) {
    return this.knex("harvest").insert({
      farm_log_id: farmlogId,
      s5q1: input.s5q1,
      s5q2: input.s5q2,
      s5q3: input.s5q3,
    });
  }

  submit_s6(farmlogId, input) {
    return this.knex("garden_management").insert({
      farm_log_id: farmlogId,
      s6q1: input.s6q1,
      s6q1_remarks: input.s6q1_remarks,
      s6q2: input.s6q2,
      s6q3: input.s6q3,
      s6q3_fertiliser: input.s6q3_fertiliser,
      s6q3_quantity: input.s6q3_quantity,
      s6q3_remarks: input.s6q3_remarks,
      s6q4: input.s6q4,
      s6q4_remarks: input.s6q4_remarks,
    });
  }

  submit_s7(farmlogId, input) {
    return this.knex("other_issues").insert({
      farm_log_id: farmlogId,
      s7q1: input.s7q1,
      s7q2_album: input.s7q2_album,
      s7q3_image: input.s7q3_image,
    });
  }
}

module.exports = FarmlogService;
