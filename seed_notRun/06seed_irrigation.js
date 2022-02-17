exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("irrigation")
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex("irrigation").insert([
        {
          farm_log_id: 1,
          s3q1: true,
          s3q1_remarks: "input.s3q1_remarks",
          s3q2: true,
          s3q2_date_start: "2021-01-01",
          s3q2_date_end: "2021-01-02",
          s3q2_time_start: "15:00",
          s3q2_time_end: "16:00",
          s3q2_frequency: 2,
          s3q3: 13,
        },
        {
          farm_log_id: 2,
          s3q1: false,
          s3q1_remarks: null,
          s3q2: true,
          s3q2_date_start: "2021-01-03",
          s3q2_date_end: "2021-01-04",
          s3q2_time_start: "17:00",
          s3q2_time_end: "18:00",
          s3q2_frequency: 4,
          s3q3: 10,
        },
        {
          farm_log_id: 3,
          s3q1: true,
          s3q1_remarks: "input.s3q1_remarks",
          s3q2: true,
          s3q2_date_start: "2021-01-05",
          s3q2_date_end: "2021-01-06",
          s3q2_time_start: "10:00",
          s3q2_time_end: "11:00",
          s3q2_frequency: 3,
          s3q3: 19,
        },
        {
          farm_log_id: 4,
          s3q1: false,
          s3q1_remarks: null,
          s3q2: true,
          s3q2_date_start: "2021-01-07",
          s3q2_date_end: "2021-01-08",
          s3q2_time_start: "09:00",
          s3q2_time_end: "10:00",
          s3q2_frequency: 1,
          s3q3: 5,
        },
      ]);
    });
};
