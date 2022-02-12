exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('crop').del()
    .then(function () {
      // Inserts seed entries
      return knex('crop').insert([
        {
          zone_id: 1,
          name: "Chili",
          type: "Fruit",
          yield: "13kg",
          contribution: "event",
          sowing: true,
          grooming: false,
          harvest: false,
        },
        {
          zone_id: 1,
          name: "Rosemary",
          type: "Herb",
          yield: "18kg",
          contribution: "event",
          sowing: true,
          grooming: false,
          harvest: false,
        },
        {
          zone_id: 2,
          name: "Chrysanthemum",
          type: "Flower",
          yield: "16kg",
          contribution: "event",
          sowing: true,
          grooming: true,
          harvest: false,
        },
        {
          zone_id: 2,
          name: "Carrot",
          type: "Root/Stem",
          yield: "10kg",
          contribution: "event",
          sowing: true,
          grooming: true,
          harvest: false,
        },
        {
          zone_id: 1,
          name: "Spinach",
          type: "Leafy Green",
          yield: "19kg",
          contribution: "event",
          sowing: true,
          grooming: false,
          harvest: false,
        },
        {
          zone_id: 1,
          name: "Cherry Tomato",
          type: "Fruit",
          yield: "20kg",
          contribution: "event",
          sowing: true,
          grooming: true,
          harvest: true,
        },
        {
          zone_id: 1,
          name: "Potato",
          type: "Root/Stem",
          yield: "9kg",
          contribution: "event",
          sowing: true,
          grooming: false,
          harvest: false,
        },
        {
          zone_id: 3,
          name: "Fig",
          type: "Fruit",
          yield: "10kg",
          contribution: "event",
          sowing: false,
          grooming: false,
          harvest: false,
        },
        {
          zone_id: 3,
          name: "Indian Lettuce",
          type: "Leafy Green",
          yield: "10kg",
          contribution: "event",
          sowing: false,
          grooming: true,
          harvest: true,
        },
      ]);
    });
};
