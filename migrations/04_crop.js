exports.up = function (knex) {
  return knex.schema.createTable("crop", (table) => {
    table.increments("id").primary();
    table.integer("zone_id").unsigned();
    table.foreign("zone_id").references("zone.id");
    table.string("name");
    table.string("type");
    table.string("yield");
    table.string("contribution");
    table.string("image");
    table.boolean("sowing");
    table.boolean("grooming");
    table.boolean("harvest");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("crop");
};
