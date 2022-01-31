/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("farmer_info", (table) => {
    table.integer("farmer_id").unsigned();
    table.foreign("farmer_id").references("users.id");
    table.integer("client_id").unsigned();
    table.foreign("client_id").references("users.id");
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
