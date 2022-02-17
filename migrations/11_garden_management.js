exports.up = function (knex) {
  return knex.schema.createTable("garden_management", (table) => {
    table.increments("id")
    table.integer("GA_farm_log_id").unsigned()
    table.foreign("GA_farm_log_id").references("farm_log.id");
    table.boolean("s6q1");
    table.string("s6q1_remarks");
    table.integer("s6q2");
    table.boolean("s6q3");
    table.string("s6q3_fertiliser");
    table.string("s6q3_quantity");
    table.string("s6q3_remarks");
    table.boolean("s6q4");
    table.string("s6q4_remarks");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("garden_management");
};
