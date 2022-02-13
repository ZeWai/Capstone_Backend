exports.up = function (knex) {
  return knex.schema.createTable("farmer_info", (table) => {
    table.integer("farmer_id").references("users.id");
    table.integer("client_id").references("users.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("farmer_info");
};

