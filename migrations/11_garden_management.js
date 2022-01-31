/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("garden_management", (table) => {
    table.increments("id").unique();
    table.integer("farm_log_id").unsigned().unique();
    table.foreign("farm_log_id").references("farm_log.id");
    table.boolean("s6q1");
    table.string("s6q1_remarks");
    table.integer("s6q2");
    table.boolean("s6q3");
    table.string("s6q3_fertiliser");
    table.integer("s6q3_quantity");
    table.string("s6q3_remarks");
    table.boolean("s6q4");
    table.string("s6q4_remarks");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("garden_management");
};
