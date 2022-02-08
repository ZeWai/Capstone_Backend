exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("zone")
    .del()
    .then(function () {
      return knex("zone").insert([{
        users_id: 1,
        area: "A",
        size:100
      }, {
          users_id: 1,
          area: "B",
          size: 150
        },
        {
          users_id: 1,
          area: "C",
          size: 300
        },
        {
          users_id: 1,
          area: "D",
          size: 550
        },
        {
          users_id: 5,
          area: "A",
          size: 450
        },
        {
          users_id: 5,
          area: "B",
          size: 50
        },
        {
          users_id: 5,
          area: "C",
          size: 200
        }
      ]);
    });
};
