exports.up = function (knex) {
  return knex.schema.createTable("farm_log", (table) => {
    table.increments("id");
    table.integer("farmer_id").unsigned();
    table.foreign("farmer_id").references("users.id");
    table.integer("users_id").unsigned();
    table.foreign("users_id").references("users.id");
    table.integer("zone_id").unsigned();
    table.foreign("zone_id").references("zone.id");
    table.time("time");
    table.date("date");
    table.string("weather");
    table.integer("temp");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("farm_log");
};
