/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.up = function (knex) {
    return knex.schema.createTable('basic_info', (table) => {
        table.increments('id').unique();
=======
 exports.up = function(knex) {
    return knex.schema.createTable('basic_info', (table) => {
        table.increments('id').unique;
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
        table.integer("farm_log_id").unsigned().unique();
        table.foreign("farm_log_id").references('farm_log.id');
        table.time("time");
        table.date("date");
        table.string("weather");
        table.integer("temp");
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
    return knex.schema.dropTable('basic_info')
};
