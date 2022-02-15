exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("other_issues")
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex("other_issues").insert([
        {
          farm_log_id: 1,
          s7q1: "remarks",
        },
        {
          farm_log_id: 2,
          s7q1: "remarks",
        },
        {
          farm_log_id: 3,
          s7q1: "remarks",
        },
        {
          farm_log_id: 4,
          s7q1: "remarks",
        },
      ]);
    });
};
