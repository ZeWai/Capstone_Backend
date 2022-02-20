exports.up = function (knex) {
  return knex.schema.createTable("crop_store", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("type");
    table.integer("irrigation_period");
    table.string("est_harvest");
    table.string("image")
  });
};

exports.down = function (knex) {/*  */
  return knex.schema.dropTable("crop_store");
};
