/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user_info", (table) => {
    table.increments("id").unique();
    table.integer("users_id").references("users.id");
    table.string("name");
    table.string("address");
    table.binary("icon");
    table.binary("image");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user_info");
};