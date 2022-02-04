exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").unique();
    table.string("username");
    table.string("email");
    table.string("password");
    table.integer("postCode");
    table.integer("tel");
    table.string("role");
    table.boolean("status");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
