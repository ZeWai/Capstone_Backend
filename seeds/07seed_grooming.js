/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("grooming")
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex("grooming").insert([
        {
          farm_log_id: 1,
          s4q1: true,
          s4q1_substanceType: "input.s4q1_substanceType",
          s4q1_cropType: "input.s4q1_cropType",
          s4q1_dosage: "input.s4q1_dosage",
          s4q1_remarks: "input.s4q1_remarks",
          s4q2: true,
          s4q2_cropType: "input.s4q2_cropType",
          s4q2_remarks: "input.s4q2_remarks",
          s4q3: false,
          s4q3_cropType: null,
          s4q3_remarks: null,
          s4q4: "NA",
        },
        {
          farm_log_id: 2,
          s4q1: true,
          s4q1_substanceType: "input.s4q1_substanceType",
          s4q1_cropType: "input.s4q1_cropType",
          s4q1_dosage: "input.s4q1_dosage",
          s4q1_remarks: "input.s4q1_remarks",
          s4q2: true,
          s4q2_cropType: "input.s4q2_cropType",
          s4q2_remarks: "input.s4q2_remarks",
          s4q3: false,
          s4q3_cropType: null,
          s4q3_remarks: null,
          s4q4: "NA",
        },
        {
          farm_log_id: 3,
          s4q1: false,
          s4q1_substanceType: null,
          s4q1_cropType: null,
          s4q1_dosage: null,
          s4q1_remarks: null,
          s4q2: false,
          s4q2_cropType: null,
          s4q2_remarks: null,
          s4q3: false,
          s4q3_cropType: null,
          s4q3_remarks: null,
          s4q4: "NA",
        },
        {
          farm_log_id: 4,
          s4q1: false,
          s4q1_substanceType: null,
          s4q1_cropType: null,
          s4q1_dosage: null,
          s4q1_remarks: null,
          s4q2: false,
          s4q2_cropType: null,
          s4q2_remarks: null,
          s4q3: false,
          s4q3_cropType: null,
          s4q3_remarks: null,
          s4q4: "NA",
        },
      ]);
    });
};
