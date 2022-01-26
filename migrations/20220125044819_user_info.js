/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.up = function (knex) {
    return knex.schema.createTable('user_info', (table) => {
        table.increments('id').unique();
        table.integer("users_id").references('users.id');
=======
exports.up = function(knex) {
    return knex.schema.createTable('user_info', (table) => {
        table.increments('id').unique;
        table.integer("users_id").unsigned().unique();
        table.foreign("users_id").references('users.id');
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
        table.string("name");
        table.string("address");
        table.string("size");
        table.date("date_opened");
        table.binary("icon");
        table.binary("image");
        table.string("soil_planting");
        table.timestamps(false, true);
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.down = function (knex) {
=======
exports.down = function(knex) {
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
    return knex.schema.dropTable('user_info')
};
