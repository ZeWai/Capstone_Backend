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
          yield: "13",
          contribution: "Event",
          image:"uploads/Card_Chili.jpeg",
          sowing: false,
          grooming: true,
          harvest: false,
        },
        {
          zone_id: 1,
          name: "Rosemary",
          type: "Herb",
          yield: "18",
          contribution: "Event",
          image:"uploads/Card_Rosemary.jpeg",
          sowing: false,
          grooming: true,
          harvest: false,
        },
        {
          zone_id: 2,
          name: "Chrysanthemum",
          type: "Flower",
          yield: "16",
          contribution: "Event",
          image:"uploads/Card_Chrysanthemum.png",
          sowing: false,
          grooming: true,
          harvest: false,
        },
        {
          zone_id: 2,
          name: "Carrot",
          type: "Root/Stem",
          yield: "10",
          contribution: "Event",
          image:"uploads/Card_Carrot.jpeg",
          sowing: false,
          grooming: true,
          harvest: false,
        },
        {
          zone_id: 1,
          name: "Spinach",
          type: "Leafy Green",
          yield: "19",
          contribution: "Event",
          image:"uploads/Card_Spinach.jpeg",
          sowing: false,
          grooming: false,
          harvest: false,
        },
        {
          zone_id: 1,
          name: "Cherry Tomato",
          type: "Fruit",
          yield: "20",
          contribution: "event",
          image:"uploads/Card_CherryTomato.jpeg",
          sowing: false,
          grooming: true,
          harvest: false,
        },
        {
          zone_id: 1,
          name: "Potato",
          type: "Root/Stem",
          yield: "9",
          contribution: "Event",
          image:"uploads/Card_Potato.jpeg",
          sowing: false,
          grooming: true,
          harvest: false,
        },
        {
          zone_id: 3,
          name: "Fig",
          type: "Fruit",
          yield: "10",
          contribution: "Donation",
          image:"uploads/Card_Fig.jpeg",
          sowing: false,
          grooming: false,
          harvest: false,
        },
        {
          zone_id: 3,
          name: "Indian Lettuce",
          type: "Leafy Green",
          yield: "10",
          contribution: "Event",
          image:"uploads/Card_IndianLettuce.jpeg",
          sowing: false,
          grooming: true,
          harvest: true,
        },
      ]);
    });
};
