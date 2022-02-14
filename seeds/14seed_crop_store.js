exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("crop_store")
      .del()
      .then(async function () {
          // Inserts seed entries
          return knex("crop_store").insert([
              {
                  name: "Carrot",
                  type: "Root/Stem",
                  Irr_Period: 1,
                  est_harvest:"2022-01-01",
                  image:"uploads/Card_Carrot.jpeg",
              },
              {
                name: "Cherry Tomato",
                type: "Fruit",
                Irr_Period: 2,
                est_harvest:"2022-04-01",
                image: "uploads/Card_CherryTomato.jpeg",
              },
              {
                name: "Chili",
                type: "Fruit",
                Irr_Period: 1,
                est_harvest:"2022-05-01",
                image:"uploads/Card_Chili.jpeg",
              },
              {
                name: "Chrysanthemum",
                type: "Flower",
                Irr_Period: 3,
                est_harvest:"2022-06-01",
                image:"uploads/Card_Chrysanthemum.png",
              },
              {
                name: "Fig",
                type: "Fruit",
                Irr_Period: 1,
                est_harvest:"2022-05-01",
                image:"uploads/Card_Fig.jpeg",
              },
              {
                name: "Indian Lettuce",
                type: "Leafy Green",
                Irr_Period: 2,
                est_harvest:"2022-05-01",
                image:"uploads/Card_IndianLettuce.jpeg",
              },
              {
                name: "Potato",
                type: "Root/Stem",
                Irr_Period: 3,
                est_harvest:"2022-05-01",
                image:"uploads/Card_Potato.jpeg",
              },
              {
                name: "Spinach",
                type: "Leadfy Green",
                Irr_Period: 2,
                est_harvest:"2022-05-01",
                image:"uploads/Card_Spinach.jpeg",
              },
              {
                name: "Rosemary",
                type: "Herb",
                Irr_Period: 3,
                est_harvest:"2022-05-01",
                image:"uploads/Card_Rosemary.jpeg",
              },
          ]);
      });
};