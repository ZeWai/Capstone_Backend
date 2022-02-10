exports.up = function (knex) {
  return knex.schema.createTable("crop", (table) => {
    table.increments();
    table.integer("zone_id").unsigned();
    table.foreign("zone_id").references("zone.id");
    table.string("name");
    table.string("type");
    table.string("yield");
    table.string("contribution");
    table.binary("image");
    table.boolean("sowing");
    table.boolean("irrigation");
    table.boolean("grooming");
    table.boolean("harvest");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("crop");
};
