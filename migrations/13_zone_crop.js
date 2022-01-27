/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("zone_crop", (table) => {
    table.increments("id").unique();
    table.integer("crop_id").unsigned().unique();
    table.foreign("crop_id").references("crop.id");
    table.integer("zone_id").unsigned().unique();
    table.foreign("zone_id").references("zone.id");
    table.integer("sowing_date");
    table.integer("irrigation_date");
    table.integer("grooming_date");
    table.integer("harvest_date");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("zone_crop");
};
