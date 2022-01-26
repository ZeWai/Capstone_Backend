/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('irrigation', (table) => {
        table.increments('id').unique();
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
exports.down = function (knex) {
    return knex.schema.dropTable('irrigation')
};
