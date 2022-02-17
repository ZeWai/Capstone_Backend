exports.up = function (knex) {
  return knex.schema.createTable("harvest", (table) => {
    table.increments("id")
    table.integer("H_farm_log_id").unsigned()
    table.foreign("H_farm_log_id").references("farm_log.id");
    table.string("s5q1");
    table.decimal("s5q2");
    table.string("s5q3");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("harvest");
};
