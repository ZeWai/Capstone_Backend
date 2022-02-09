exports.up = function (knex) {
  return knex.schema.createTable("irrigation", (table) => {
    table.increments("id").primary();
    table.integer("farm_log_id").unsigned().unique();
    table.foreign("farm_log_id").references("farm_log.id");
    table.boolean("s3q1");
    table.string("s3q1_remarks");
    table.boolean("s3q2");
    table.date("s3q2_date_start");
    table.date("s3q2_date_end");
    table.time("s3q2_time_start");
    table.time("s3q2_time_end");
    table.integer("s3q2_frequency");
    table.decimal("s3q3");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("irrigation");
};
