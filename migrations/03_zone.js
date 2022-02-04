exports.up = function (knex) {
  return knex.schema.createTable("zone", (table) => {
    table.increments("id").unique();
    table.integer("users_id").references("users.id");
    table.string("area");
    table.string("size");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("zone");
};
