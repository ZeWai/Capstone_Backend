/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.up = function (knex) {
    return knex.schema.createTable('irrigation', (table) => {
        table.increments('id').unique();
=======
exports.up = function(knex) {
    return knex.schema.createTable('irrigation', (table) => {
        table.increments('id').unique;
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
        table.integer("farm_log_id").unsigned().unique();
        table.foreign("farm_log_id").references('farm_log.id');
        table.string("s3q1");
        table.string("s3q1_remarks");
        table.string("s3q2");
        table.date("s3q3_date_start");
        table.date("s3q3_date_end");
        table.time("s3q3_time_start");
        table.time("s3q3_time_end");
        table.integer("s3q3_frequency");
        table.integer("s3q4");
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
    return knex.schema.dropTable('irrigation')
};
