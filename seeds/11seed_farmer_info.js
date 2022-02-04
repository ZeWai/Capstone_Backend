exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("farmer_info")
        .del()
        .then(async function () {
            // Inserts seed entries
            return knex("farmer_info").insert([
                {
                    farmer_id: 3,
                    client_id: 1,
                },
                {
                    farmer_id: 3,
                    client_id: 5,
                },
                {
                    farmer_id: 4,
                    client_id: 1,
                }
            ]);
        });
};
