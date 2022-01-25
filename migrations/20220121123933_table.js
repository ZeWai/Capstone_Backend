exports.up = function (knex) {
    return knex.schema.createTable('admin', (table) => {
        table.increments('userId').unique();
        table.string('username').unique();
        table.string('email');
        table.string('password');
        table.string('admin').defaultTo("clicent");
        table.integer('areaCode').defaultTo("852");
        table.integer('contactNo').unique();
        table.string('logo');
        table.string('access');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('admin')
};