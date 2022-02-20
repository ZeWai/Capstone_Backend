exports.up = function (knex) {
  return knex.schema.createTable("irrigation", (table) => {
    table.increments("id")
    table.integer("I_farm_log_id").unsigned()
    table.foreign("I_farm_log_id").references("farm_log.id");
    table.boolean("s3q1");
    table.string("s3q1_remarks");
    table.boolean("s3q2");
    //table.string("s3q2_date_start");
    //table.string("s3q2_date_end");
    //table.time("s3q2_time_start");
    //table.time("s3q2_time_end");
    table.string("s3q2_frequency");
    table.string("s3q3");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("irrigation");
};
