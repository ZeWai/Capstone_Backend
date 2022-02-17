exports.up = function (knex) {
  return knex.schema.createTable("user_info", (table) => {
    table.increments("id").primary();
    table.integer("users_id").unsigned();
    table.foreign("users_id").references("users.id");
    table.string("name");
    table.string("address");
    table.string("icon");
    table.string("image");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user_info");
};
