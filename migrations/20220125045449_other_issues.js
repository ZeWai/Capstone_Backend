/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.up = function (knex) {
    return knex.schema.createTable('other_issues', (table) => {
        table.increments('id').unique();
=======
exports.up = function(knex) {
    return knex.schema.createTable('other_issues', (table) => {
        table.increments('id').unique;
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
        table.integer("farm_log_id").unsigned().unique();
        table.foreign("farm_log_id").references('farm_log.id');
        table.string("s7q1");
        table.binary("s7q2_image");
        table.binary("s7q3_image");
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
    return knex.schema.dropTable('other_issues')
};
