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
        table.int("temp");
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




/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.up = function (knex) {
    return knex.schema.createTable('farmer_info', (table) => {
        table.increments('id').unique();
=======
 exports.up = function(knex) {
    return knex.schema.createTable('farmer_info', (table) => {
        table.increments('id').unique;
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
        table.integer("user_id").unsigned().unique();
        table.foreign("user_id").references('user.id');
        table.string("name");
        table.integer("contact")
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
    return knex.schema.dropTable('farmer_info')
};

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
        table.integer("user_id").unsigned().unique();
        table.foreign("user_id").references('user.id');
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
