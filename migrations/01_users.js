exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("username");
    table.string("email");
    table.string("password");
    table.string("postCode");
    table.string("tel");
    table.string("role");
    table.boolean("status");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
