/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('zone').del()
        .then(function () {
            // Inserts seed entries
            return knex('zone').insert([
                {
                    id: 1,
                    users_id: 1,
                    area: '[Zone A,Zone B,Zone C,Zone D]',
                },
                {
                    id: 2,
                    users_id: 2,
                    area: 'NA',
                },
                {
                    id: 3,
                    users_id: 3,
                    area: 'NA',
                }
            ]);
        });
};