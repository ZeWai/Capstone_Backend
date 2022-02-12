class CropService {
  constructor(knex) {
    this.knex = knex;
  }

  async getCrop() {
    let crops = await this.knex
      .select("*")
      .from("zone")
      .innerJoin("crop", "zone.id", "crop.zone_id")
      .innerJoin("zone_crop", "zone.id", "zone_crop.zone_id");
    return crops;
  }

  async addCrop(usersId, area, cropinfo) {
    return await this.knex("zone")
      .select("*")
      .where({ users_id: usersId, area: area })
      .returning("id")
      .then((data) => {
        if (data.length == 0) {
          return this.knex("crop").insert({
            users_id: users_id,
            course_id: course_id,
            paid: true,
            zone_id: data[0],
            name: cropinfo.name,
            type: cropinfo.type,
            yield: cropinfo.yield,
            contribution: cropinfo.contribution,
            image: cropinfo.image,
            sowing: false,
            irrigation: false,
            grooming: false,
            harvest: false,
          });
        } else {
          throw new Error("Cant getCrop");
        }
      });
  }

  async getReadyToHarvest(location) {
    if (location !== "Loading") {
      return await this.knex("crop")
        .select("name", "area", "harvest_date", "type", "yield")
        .innerJoin("zone_crop", "zone_crop.crop_id", "crop.id")
        .innerJoin("zone", "zone_crop.zone_id", "zone.id")
        .innerJoin("users", "zone.users_id", "users.id")
        .where("username", location)
    }
  }

  async getZoneCrop(location, zone) {
    if (zone === "Overview") {
      return await this.knex("crop")
        .select("name", "area", "harvest_date", "type", "yield")
        .innerJoin("zone_crop", "zone_crop.crop_id", "crop.id")
        .innerJoin("zone", "zone_crop.zone_id", "zone.id")
        .innerJoin("users", "zone.users_id", "users.id")
        .where("username", location)
    }
    else {
      return await this.knex("crop")
        .select("name", "area", "harvest_date", "type", "yield","sowing_date")
        .innerJoin("zone_crop", "zone_crop.crop_id", "crop.id")
        .innerJoin("zone", "zone_crop.zone_id", "zone.id")
        .innerJoin("users", "zone.users_id", "users.id")
        .where("username", location)
        .where("area", zone)
    }
  }
}
module.exports = CropService;
