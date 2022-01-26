/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.up = function (knex) {
    return knex.schema.createTable('farmer', (table) => {
        table.increments('id').unique();
        table.integer("users_id").unsigned().unique();
        table.foreign("users_id").references('users.id');
        table.string("name");
        table.integer("postCode");
        table.integer("contact");
=======
 exports.up = function(knex) {
    return knex.schema.createTable('farmer', (table) => {
        table.increments('id').unique;
        table.integer("users_id").unsigned().unique();
        table.foreign("users_id").references('users.id');
        table.string("name");
        table.integer("contact")
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
        table.timestamps(false, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.down = function (knex) {
    return knex.schema.dropTable('farmer')
};

//no need. same with users table. remake from mio.
=======
exports.down = function(knex) {
    return knex.schema.dropTable('farmer')
};
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
