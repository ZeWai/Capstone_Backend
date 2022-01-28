class CropService {
  constructor(knex) {
    this.knex = knex;
  }

  getCrop(users_id) {
    return this.knex("crop")
      .select("*")
      .where({ users_id: users_id, course_id: course_id })
      .then((info) => {
        if (info.length == 0) {
          return this.knex("user_booking").insert({
            users_id: users_id,
            course_id: course_id,
            paid: true,
          });
        } else {
          throw new Error("Cant getCrop");
        }
      });
  }
}

module.exports = CropService;
