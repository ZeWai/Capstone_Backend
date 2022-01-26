/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("farmer_info", (table) => {
    table.increments("id").unique();
    table.integer("users_id").unsigned().unique();
    table.foreign("users_id").references("users.id");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("farmer_info");
};

//no need. same with users table. remake from mio.
