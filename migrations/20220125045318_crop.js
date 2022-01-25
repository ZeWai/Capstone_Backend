/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('crop', (table) => {
        table.increments('id').unique;
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
exports.down = function(knex) {
    return knex.schema.dropTable('crop')
};
