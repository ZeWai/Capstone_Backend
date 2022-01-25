/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('zone', (table) => {
        table.increments('id').unique;
        table.integer("users_id").unsigned().unique();
        table.foreign("users_id").references('usersid');
        table.string("area");
        table.timestamps(false, true);
    })

  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('zone')
};
