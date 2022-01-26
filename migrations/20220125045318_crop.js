/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.up = function (knex) {
    return knex.schema.createTable('crop', (table) => {
        table.increments('id').unique();
=======
exports.up = function(knex) {
    return knex.schema.createTable('crop', (table) => {
        table.increments('id').unique;
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
        table.integer("zone_id").unsigned().unique();
        table.foreign("zone_id").references('zone.id');
        table.string("name");
        table.string("status");
        table.string("type");
        table.date("sow_date");
        table.date("expected_h_date");
        table.binary("image");
        table.string("yield");
        table.date("harvest_date");
        table.string("contribution");
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
    return knex.schema.dropTable('crop')
};
