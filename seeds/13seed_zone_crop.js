exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('zone_crop').del()
    .then(function () {
      // Inserts seed entries
      return knex('zone_crop').insert([
        {
          crop_id: 1,
          zone_id: 1,
          sowing_date: '2022-01-10',
          irrigation_period: 3,
          grooming_date: '2022-01-11',
          harvest_date: '2022-02-10',
        },
        {
          crop_id: 2,
          zone_id: 1,
          sowing_date: '2021-10-10',
          irrigation_period: 4,
          grooming_date: '2021-10-11',
          harvest_date: '2022-02-16',
        },
        {
          crop_id: 3,
          zone_id: 2,
          sowing_date: '2021-09-02',
          irrigation_period: 2,
          grooming_date: '2021-09-10',
          harvest_date: '2022-02-05',
        },
        {
          crop_id: 4,
          zone_id: 2,
          sowing_date: '2022-01-15',
          irrigation_period: 1,
          grooming_date: '2022-01-16',
          harvest_date: '2022-04-01',
        },
        {
          crop_id: 5,
          zone_id: 1,
          sowing_date: '2022-02-28',
          irrigation_period: 7,
          grooming_date:'2022-03-01',
          harvest_date: '2022-05-15',
        },
        {
          crop_id: 6,
          zone_id: 1,
          sowing_date: '2022-02-05',
          irrigation_period: 6,
          grooming_date: '2022-02-06',
          harvest_date: '2022-04-30',
        },
        {
          crop_id: 7,
          zone_id: 4,
          sowing_date: '2022-01-08',
          irrigation_period: 4,
          grooming_date: '2022-01-10',
          harvest_date: '2022-04-01',
        },
        {
          crop_id: 8,
          zone_id: 3,
          sowing_date: '2022-03-08',
          irrigation_period: 5,
          grooming_date: '2022-03-09',
          harvest_date: '2022-06-08',
        },
        {
          crop_id: 9,
          zone_id: 3,
          sowing_date: '2021-11-08',
          irrigation_period: 3,
          grooming_date: '2022-11-09',
          harvest_date: '2022-02-02',
        },
        {
          crop_id: 10,
          zone_id: 3,
          sowing_date: '2021-11-14',
          irrigation_period: 3,
          grooming_date: '2022-11-15',
          harvest_date: '2022-02-10',
        },
        {
          crop_id: 11,
          zone_id: 2,
          sowing_date: '2021-11-17',
          irrigation_period: 2,
          grooming_date: '2022-11-18',
          harvest_date: '2022-02-13',
        },
      ]);
    });
};
