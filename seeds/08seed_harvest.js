exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("harvest")
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex("harvest").insert([
        {
          farm_log_id: 1,
          s5q1: "input.s5q1",
          s5q2: 10,
          s5q3: "input.s5q3",
        },
        {
          farm_log_id: 2,
          s5q1: "input.s5q1",
          s5q2: 20,
          s5q3: "input.s5q3",
        },
        {
          farm_log_id: 3,
          s5q1: "input.s5q1",
          s5q2: 30,
          s5q3: "input.s5q3",
        },
        {
          farm_log_id: 4,
          s5q1: "input.s5q1",
          s5q2: 40,
          s5q3: "input.s5q3",
        },
      ]);
    });
};
