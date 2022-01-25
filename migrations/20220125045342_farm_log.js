/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('farm_log', (table) => {
        table.increments('id').unique;
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
exports.down = function(knex) {
    return knex.schema.dropTable('farm_log')
};
