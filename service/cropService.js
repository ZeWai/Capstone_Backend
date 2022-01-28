class CropService {
  constructor(knex) {
    this.knex = knex;
  }

  async getCrop(usersId, area) {
    return await this.knex("zone")
      .select("*")
      .where({ users_id: usersId, area: area })
      .returning("id")
      .then((data) => {
        if (data.length === 1) {
          return this.knex("crop")
            .join("zone_crop", { zone_id: "zone_crop.zoned_id" })
            .select("*")
            .where({ zone_id: "zone_crop.zoned_id" });
        } else {
          throw new Error("Cant getCrop");
        }
      });
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
}

module.exports = CropService;

//const knexFile = require("../knexfile").development;
//const knex = require("knex")(knexFile);
//let cropService = new CropService(knex);
//
//cropService.getCrop(1, "A").then((a) => console.log(a));
