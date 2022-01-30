/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("grooming", (table) => {
    table.increments("id").unique();
    table.integer("farm_log_id").unsigned().unique();
    table.foreign("farm_log_id").references("farm_log.id");
    table.boolean("s4q1");
    table.string("s4q1_substanceType");
    table.string("s4q1_cropType");
    table.string("s4q1_dosage");
    table.string("s4q1_remarks");
    table.boolean("s4q2");
    table.string("s4q2_cropType");
    table.string("s4q2_remarks");
    table.boolean("s4q3");
    table.string("s4q3_cropType");
    table.string("s4q3_remarks");
    table.string("s4q4");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("grooming");
};
