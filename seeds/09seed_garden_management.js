exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("garden_management")
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex("garden_management").insert([
        {
          farm_log_id: 1,
          s6q1: false,
          s6q1_remarks: null,
          s6q2: 1,
          s6q3: false,
          s6q3_fertiliser: null,
          s6q3_quantity: null,
          s6q3_remarks: null,
          s6q4: false,
          s6q4_remarks: null,
        },
        {
          farm_log_id: 2,
          s6q1: true,
          s6q1_remarks: "s6q1_remarks",
          s6q2: 2,
          s6q3: true,
          s6q3_fertiliser: "fertiliser",
          s6q3_quantity: 3,
          s6q3_remarks: "remarks",
          s6q4: false,
          s6q4_remarks: null,
        },
        {
          farm_log_id: 3,
          s6q1: true,
          s6q1_remarks: "s6q1_remarks",
          s6q2: 4,
          s6q3: true,
          s6q3_fertiliser: "fertiliser",
          s6q3_quantity: 5,
          s6q3_remarks: "remarks",
          s6q4: false,
          s6q4_remarks: null,
        },
        {
          farm_log_id: 4,
          s6q1: false,
          s6q1_remarks: null,
          s6q2: 1,
          s6q3: false,
          s6q3_fertiliser: null,
          s6q3_quantity: null,
          s6q3_remarks: null,
          s6q4: false,
          s6q4_remarks: null,
        },
      ]);
    });
};
