/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.up = function (knex) {
    return knex.schema.createTable('zone', (table) => {
        table.increments('id').unique();
        table.integer("users_id").references('users.id');
=======
exports.up = function(knex) {
    return knex.schema.createTable('zone', (table) => {
        table.increments('id').unique;
        table.integer("users_id").unsigned().unique();
        table.foreign("users_id").references('usersid');
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
        table.string("area");
        table.timestamps(false, true);
    })

<<<<<<< HEAD

=======
  
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.down = function (knex) {
=======
exports.down = function(knex) {
>>>>>>> c46738bcd844dafc067d9bcc5ea4a088346e4b49
    return knex.schema.dropTable('zone')
};
