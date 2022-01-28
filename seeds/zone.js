/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("zone")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("zone").insert([
        {
          users_id: 1,
          area: "A",
          size: 100,
        },
        {
          users_id: 1,
          area: "B",
          size: "200",
        },
        {
          users_id: 1,
          area: "C",
          size: "300",
        },
      ]);
    });
};
