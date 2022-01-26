/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
<<<<<<< HEAD
        table.increments('id').unique();
        table.string('username').unique();
        table.string("email")
        table.string('password');
        table.integer("postCode");
        table.integer("contact");
=======
        table.increments('id').unique;
        table.string('username').unique;
        table.string("email")
        table.string('password');
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
        table.string("role");
        table.timestamps(false, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
