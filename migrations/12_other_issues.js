exports.up = function (knex) {
  return knex.schema.createTable("other_issues", (table) => {
    table.increments("id")
    table.integer("O_farm_log_id").unsigned()
    table.foreign("O_farm_log_id").references("farm_log.id");
    table.string("s7q1");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("other_issues");
};
