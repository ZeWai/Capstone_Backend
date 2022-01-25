/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('planting', (table) => {
        table.increments('id').unique;
        table.integer("farm_log_id").unsigned().unique();
        table.foreign("farm_log_id").references('farm_log.id');
        table.string("s2q1");
        table.string("s2q1_remarks");
        table.string("s2q2");
        table.string("s2q2_fertiliser");
        table.string("s2q2_method");
        table.string("s2q3");
        table.string("s2q3_quantity");
        table.string("s2q3_remarks");
        table.string("s2q4");
        table.string("s2q4_fertiliser");
        table.string("s2q4_usage");
        table.string("s2q4_remarks");
        table.string("s2q5");
        table.timestamps(false, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('planting')
};
