/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("other_issues", (table) => {
    table.increments("id").unique();
    table.integer("farm_log_id").unsigned().unique();
    table.foreign("farm_log_id").references("farm_log.id");
    table.string("s7q1");
    table.binary("s7q2_album");
    table.binary("s7q3_image");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("other_issues");
};
