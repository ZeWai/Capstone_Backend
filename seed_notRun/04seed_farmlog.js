exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("farm_log")
    .del()
    .then(async function () {
      // Inserts seed entries
      // from user seed: 1, 5 is clients
      // from user seed: 3, 4 is farmer
      return knex("farm_log").insert([
        {
          id: 1,
          farmer_id: 3,
          users_id: 1,
          zone_id: 1,
          time: "10:00",
          date: "2022-01-01",
          weather: "sunny",
          temp: 23,
        },
        {
          id: 2,
          farmer_id: 3,
          users_id: 5,
          zone_id: 1,
          time: "12:00",
          date: "2022-01-02",
          weather: "cloudy",
          temp: 20,
        },
        {
          id: 3,
          farmer_id: 4,
          users_id: 1,
          zone_id: 1,
          time: "15:00",
          date: "2022-01-03",
          weather: "raining",
          temp: 18,
        },
        {
          id: 4,
          farmer_id: 4,
          users_id: 5,
          zone_id: 1,
          time: "15:00",
          date: "2022-01-03",
          weather: "raining",
          temp: 18,
        },
      ]);
    });
};
