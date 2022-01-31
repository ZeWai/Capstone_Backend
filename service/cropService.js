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

  //   async getCrop(usersId, area) {
  //     return await this.knex("zone")
  //       .select("*")
  //       .where("users_id", usersId)
  //       .where("area", area)
  //       .then((data) => {
  //         console.log(data);
  //         return this.knex("crop").select("*").where("zone_id", data[0].id);
  //       });
  //   }

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
