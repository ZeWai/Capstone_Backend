/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('user_info').del()
        .then(function () {
            // Inserts seed entries
            return knex('user_info').insert([
                {
                    id: 1,
                    users_id: 1,
                    name: "Metroplaza",
                    address: "Level 5 Sky Garden, Metroplaza, 223 Hing Fong Road, Kwai Chung",
                    size: 13000,
                    date_opened: "2018-5-19",
                    icon: null,
                    image: null,
                    soil_planting: 13000
                },
                {
                    id: 2,
                    users_id: 2,
                    name: "Mio Fong",
                    address: "Admin Garden, Admin Plaza, Tuen Mun",
                    size: 0,
                    date_opened: "2020-7-25",
                    icon: null,
                    image: null,
                    soil_planting: 0
                },
                {
                    id: 3,
                    users_id: 3,
                    name: "Happy Farmer",
                    address: "Farmer Pool, Happy Plaza, Tuen Mun",
                    size: 0,
                    date_opened: "2020-7-25",
                    icon: null,
                    image: null,
                    soil_planting: 0
                }
            ]);
        });
};
