exports.up = function (knex) {
  return knex.schema.createTable("grooming", (table) => {
    table.increments("id")
    table.integer("G_farm_log_id").unsigned()
    table.foreign("G_farm_log_id").references("farm_log.id");
    table.boolean("s4q1");
    table.string("s4q1_pest");
    table.string("s4q1_dosage");
    table.string("s4q1_remarks");
    table.boolean("s4q2");
    table.string("s4q2_remarks");
    table.boolean("s4q3");
    table.string("s4q3_remarks");
    table.string("s4q4");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("grooming");
};
