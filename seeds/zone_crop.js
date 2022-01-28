/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('zone_crop').del()
    .then(function () {
      // Inserts seed entries
      return knex('zone_crop').insert([
        {
          id: 1,
          crop_id:1,
          zone_id:1,
        },
        {
          id: 2,
          crop_id:2,
          zone_id:1,
        },
        {
          id: 3,
          crop_id:3,
          zone_id:2,
        },
        {
          id: 4,
          crop_id:4,
          zone_id:2,
        },
        {
          id: 5,
          crop_id:5,
          zone_id:1,
        },
        {
          id: 6,
          crop_id:6,
          zone_id:1,
        },
        {
          id: 7,
          crop_id:7,
          zone_id:1,
        },
        {
          id: 8,
          crop_id:8,
          zone_id:3,
        },
        {
          id: 9,
          crop_id:9,
          zone_id:3,
        },
      ]);
    });
};
