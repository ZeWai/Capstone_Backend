exports.up = function (knex) {
    return knex.schema.createTable("crop_store", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("type");
      table.integer("Irr_Period");
      table.string("est_harvest");
      table.string("image")
    });
  };
  
  exports.down = function (knex) {/*  */
    return knex.schema.dropTable("crop_store");
  };
  