/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user_info")
    .del()
    .then(function () {
      let assigned = ["Metroplaza"];
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
          assigned: "NA",
        },
        {
          id: 2,
          users_id: 2,
          name: "Mio Fong",
          address: "Admin Garden, Admin Plaza, Tuen Mun",
          icon: null,
          image: null,
          assigned: "NA",
        },
        {
          id: 3,
          users_id: 3,
          name: "Happy Farmer",
          address: "Farmer Pool, Happy Plaza, Tuen Mun",
          icon: null,
          image: null,
          assigned: assigned,
        },
        {
          id: 4,
          users_id: 4,
          name: "HardWork Farmer",
          address: "HardWork Pool, Sad Plaza, Tin Hau",
          icon: null,
          image: null,
          assigned: assigned,
        },
        {
          id: 5,
          users_id: 5,
          name: "Swire",
          address: "Swire, Swire Bay, CWB",
          icon: null,
          image: null,
          assigned: "NA",
        },
      ]);
    });
};
