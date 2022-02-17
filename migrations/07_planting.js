exports.up = function (knex) {
  return knex.schema.createTable("planting", (table) => {
    table.increments("id")
    table.integer("P_farm_log_id").unsigned()
    table.foreign("P_farm_log_id").references("farm_log.id");
    table.boolean("s2q1");
    table.string("s2q1_remarks");
    table.boolean("s2q2");
    table.string("s2q2_fertiliser");
    table.string("s2q2_remarks");
    table.boolean("s2q3");
    table.string("s2q3_remarks");
    table.boolean("s2q4");
    table.string("s2q4_remarks");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("planting");
};
