exports.up = function (knex) {
  return knex.schema.createTable("zone_crop", (table) => {
    table.increments("id").primary();
    table.integer("crop_id").unsigned();
    table.foreign("crop_id").references("crop.id");
    table.integer("zone_id").unsigned();
    table.foreign("zone_id").references("zone.id");
    table.string("sowing_date"); //YYYY-MM-DD
    table.string("irrigation_date"); //YYYY-MM-DD
    table.string("grooming_date"); //YYYY-MM-DD
    table.string("harvest_date"); //YYYY-MM-DD
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("zone_crop");
};
