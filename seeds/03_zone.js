/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("zone")
    .del()
    .then(function () {
      let area = ["A", "B", "C", "D"]
      let size = [100, 150, 300, 550]
      let zoneInsert = [];
      for (let i = 0; i < area.length; i++) {
        zoneInsert.push({
          id: i + 1,
          users_id: 1,
          area: area[i],
          size: size[i]
        })
      }
      // Inserts seed entries
      return knex("zone")
        .insert(zoneInsert);
    });
};


