exports.up = function (knex) {
  return knex.schema.createTable("harvest", (table) => {
    table.increments("id").unique();
    table.integer("farm_log_id").unsigned().unique();
    table.foreign("farm_log_id").references("farm_log.id");
    table.string("s5q1");
    table.decimal("s5q2");
    table.string("s5q3");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("harvest");
};
