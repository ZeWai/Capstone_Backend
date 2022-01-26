/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.up = function (knex) {
    return knex.schema.createTable('farm_log', (table) => {
        table.increments('id').unique();
=======
 exports.up = function(knex) {
    return knex.schema.createTable('farm_log', (table) => {
        table.increments('id').unique;
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
        table.integer("users_id").unsigned().unique();
        table.foreign("users_id").references('users.id');
        table.integer("farmer_id").unsigned().unique();
        table.foreign("farmer_id").references('farmer.id');
        table.integer("zone_id").unsigned().unique();
        table.foreign("zone_id").references('zone.id');
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
    return knex.schema.dropTable('farm_log')
};
