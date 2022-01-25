/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          username: 'metroplaza',
          email: "metroplaza@metroplaza.com",
          password: "123321",
          role: "client"
        },
        {
          id: 2,
          username: 'newtownplaza',
          email: "newtownplaza@metroplaza.com",
          password: "123321",
          role: "client"
        }
      
      ]);
    });
};
