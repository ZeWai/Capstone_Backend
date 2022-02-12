exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('zone_crop').del()
    .then(function () {
      // Inserts seed entries
      return knex('zone_crop').insert([
        {
          crop_id: 1,
          zone_id: 1,
          sowing_date: '2022-01-01',
          irrigation_period: 3,
          grooming_date: '2022-01-20',
          harvest_date: '2022-02-12',
        },
        {
          crop_id: 2,
          zone_id: 1,
          sowing_date: '2022-01-01',
          irrigation_period: 4,
          grooming_date: '2022-01-15',
          harvest_date: '2022-02-15',
        },
        {
          crop_id: 3,
          zone_id: 2,
          sowing_date: '2022-01-02',
          irrigation_period: 2,
          grooming_date: '2022-01-25',
          harvest_date: '2022-02-20',
        },
        {
          crop_id: 4,
          zone_id: 2,
          sowing_date: '2022-01-15',
          irrigation_period: 1,
          grooming_date: '2022-02-10',
          harvest_date: '2022-02-28',
        },
        {
          crop_id: 5,
          zone_id: 1,
          sowing_date: '2022-02-01',
          irrigation_period: 7,
          grooming_date:'2022-02-28',
          harvest_date: '2022-03-15',
        },
        {
          crop_id: 6,
          zone_id: 1,
          sowing_date: '2022-02-05',
          irrigation_period: 6,
          grooming_date: '2022-03-03',
          harvest_date: '2022-03-30',
        },
        {
          crop_id: 7,
          zone_id: 4,
          sowing_date: '2022-02-08',
          irrigation_period: 4,
          grooming_date: '2022-03-10',
          harvest_date: '2022-04-01',
        },
        {
          crop_id: 8,
          zone_id: 3,
          sowing_date: '2022-03-08',
          irrigation_period: 5,
          grooming_date: '2022-03-15',
          harvest_date: '2022-04-08',
        },
        {
          crop_id: 9,
          zone_id: 3,
          sowing_date: '2022-03-08',
          irrigation_period: 3,
          grooming_date: '2022-03-15',
          harvest_date: '2022-04-10',
        },
      ]);
    });
};
