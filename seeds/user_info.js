/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user_info")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user_info").insert([
        {
          id: 1,
          users_id: 1,
          name: "Metroplaza",
          address:
            "Level 5 Sky Garden, Metroplaza, 223 Hing Fong Road, Kwai Chung",
          icon: null,
          image: null,
        },
        {
          id: 2,
          users_id: 2,
          name: "Mio Fong",
          address: "Admin Garden, Admin Plaza, Tuen Mun",
          icon: null,
          image: null,
        },
        {
          id: 3,
          users_id: 3,
          name: "Happy Farmer",
          address: "Farmer Pool, Happy Plaza, Tuen Mun",
          icon: null,
          image: null,
        },
      ]);
    });
};
