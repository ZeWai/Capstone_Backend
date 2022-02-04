exports.up = function (knex) {
    return knex.schema.createTable('basic_info', (table) => {
        table.increments('id').unique();
        table.integer("farm_log_id").unsigned().unique();
        table.foreign("farm_log_id").references('farm_log.id');
        table.time("time");
        table.date("date");
        table.string("weather");
        table.int("temp");
        table.timestamps(false, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('basic_info')
};

exports.up = function (knex) {
    return knex.schema.createTable('farmer_info', (table) => {
        table.increments('id').unique();
        table.integer("user_id").unsigned().unique();
        table.foreign("user_id").references('user.id');
        table.string("name");
        table.integer("contact")
        table.timestamps(false, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('farmer_info')
};

exports.up = function (knex) {
    return knex.schema.createTable('farm_log', (table) => {
        table.increments('id').unique();
        table.integer("user_id").unsigned().unique();
        table.foreign("user_id").references('user.id');
        table.integer("farmer_id").unsigned().unique();
        table.foreign("farmer_id").references('farmer.id');
        table.integer("zone_id").unsigned().unique();
        table.foreign("zone_id").references('zone.id');
        table.timestamps(false, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('farm_log')
};
