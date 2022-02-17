exports.up = function (knex) {
  return knex.schema.createTable("zone_crop", (table) => {
    table.increments("id").primary();
    table.integer("crop_id").unsigned();
    table.foreign("crop_id").references("crop.id");
    table.integer("zone_id").unsigned();
    table.foreign("zone_id").references("zone.id");
    table.integer("irrigation_period"); //YYYY-MM-DD
    table.string("sowing_date"); //YYYY-MM-DD
    table.string("grooming_date"); //YYYY-MM-DD
    table.string("harvest_date"); //YYYY-MM-DD
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("zone_crop");
};
