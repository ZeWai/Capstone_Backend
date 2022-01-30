/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("planting")
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex("planting").insert([
        {
          farm_log_id: 1,
          s2q1: true,
          s2q1_remarks: "s2q1_remarks",
          s2q2: true,
          s2q2_fertiliser: "fertiliser",
          s2q2_method: "method",
          s2q2_remarks: "remarks",
          s2q3: false,
          s2q3_cropType: null,
          s2q3_quantity: null,
          s2q3_remarks: null,
          s2q4: false,
          s2q4_cropType: null,
          s2q4_fertiliser: null,
          s2q4_usage: null,
          s2q4_remarks: "remarks",
        },
        {
          farm_log_id: 2,
          s2q1: false,
          s2q1_remarks: "s2q1_remarks",
          s2q2: false,
          s2q2_fertiliser: "fertiliser",
          s2q2_method: "method",
          s2q2_remarks: "remarks",
          s2q3: true,
          s2q3_cropType: "s2q3_cropType",
          s2q3_quantity: null,
          s2q3_remarks: null,
          s2q4: true,
          s2q4_cropType: null,
          s2q4_fertiliser: null,
          s2q4_usage: null,
          s2q4_remarks: "remarks",
        },
        {
          farm_log_id: 3,
          s2q1: true,
          s2q1_remarks: "s2q1_remarks",
          s2q2: true,
          s2q2_fertiliser: "fertiliser",
          s2q2_method: "method",
          s2q2_remarks: "remarks",
          s2q3: true,
          s2q3_cropType: "s2q3_cropType",
          s2q3_quantity: "s2q3_quantity",
          s2q3_remarks: "s2q3_remarks",
          s2q4: true,
          s2q4_cropType: "s2q4_cropType",
          s2q4_fertiliser: "s2q4_fertiliser",
          s2q4_usage: "s2q4_usage",
          s2q4_remarks: "remarks",
        },
        {
          farm_log_id: 4,
          s2q1: false,
          s2q1_remarks: "s2q1_remarks",
          s2q2: false,
          s2q2_fertiliser: "fertiliser",
          s2q2_method: "method",
          s2q2_remarks: "remarks",
          s2q3: false,
          s2q3_cropType: "s2q3_cropType",
          s2q3_quantity: "s2q3_quantity",
          s2q3_remarks: "s2q3_remarks",
          s2q4: false,
          s2q4_cropType: "s2q4_cropType",
          s2q4_fertiliser: "s2q4_fertiliser",
          s2q4_usage: "s2q4_usage",
          s2q4_remarks: "remarks",
        },
      ]);
    });
};
