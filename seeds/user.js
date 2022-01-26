/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require("bcrypt");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(async function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                    id: 1,
                    username: 'metroplaza',
                    email: "metroplaza@metroplaza.com",
                    password: "password1",
                    postCode: "852",
                    contact: "12345678",
                    role: "client"
                },
                {
                    id: 2,
                    username: 'admin',
                    email: "admin@admin.com",
                    password: "password2",
                    postCode: "853",
                    contact: "87654321",
                    role: "admin"
                },
                {
                    id: 3,
                    username: 'happyfarmer',
                    email: "happyfarmer@happyfarmer.com",
                    password: "password3",
                    postCode: "853",
                    contact: "43218765",
                    role: "farmer"
                }
            ]);
        });
};