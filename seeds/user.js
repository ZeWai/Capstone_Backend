/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require("bcrypt");

const password1 = 'password1'
const hashpassword1 = bcrypt.hashSync(password1, 10)
const password2 = 'password2'
const hashpassword2 = bcrypt.hashSync(password2, 10)
const password3 = 'password3'
const hashpassword3 = bcrypt.hashSync(password3, 10)

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "metroplaza",
          email: "metroplaza@metroplaza.com",
          password: hashpassword1,
          postCode: "852",
          tel: "12345678",
          role: "client",
          status: true
        },
        {
          id: 2,
          username: "admin",
          email: "admin@admin.com",
          password: hashpassword2,
          postCode: "853",
          tel: "87654321",
          role: "admin",
          status: true
        },
        {
          id: 3,
          username: "happyfarmer",
          email: "happyfarmer@happyfarmer.com",
          password: hashpassword3,
          postCode: "853",
          tel: "43218765",
          role: "farmer",
          status: true
        },
      ]);
    });
};
