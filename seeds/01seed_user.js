const bcrypt = require("bcrypt");

const password1 = "password1";
const hashpassword1 = bcrypt.hashSync(password1, 10);
const password2 = "password2";
const hashpassword2 = bcrypt.hashSync(password2, 10);
const password3 = "password3";
const hashpassword3 = bcrypt.hashSync(password3, 10);
const password4 = "password4";
const hashpassword4 = bcrypt.hashSync(password4, 10);
const password5 = "password5";
const hashpassword5 = bcrypt.hashSync(password5, 10);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "metroplaza",
          email: "metroplaza@metroplaza.com",
          password: hashpassword1,
          postCode: "852",
          tel: "12345678",
          role: "client",
          status: true,
        },
        {
          username: "admin",
          email: "admin@admin.com",
          password: hashpassword2,
          postCode: "853",
          tel: "87654321",
          role: "admin",
          status: true,
        },
        {
          username: "happyfarmer",
          email: "happyfarmer@happyfarmer.com",
          password: hashpassword3,
          postCode: "853",
          tel: "43218765",
          role: "farmer",
          status: true,
        },
        {
          username: "hardworkfarmer",
          email: "hardworkfarmer@hardworkfarmer.com",
          password: hashpassword4,
          postCode: "852",
          tel: "43214321",
          role: "farmer",
          status: true,
        },
        {
          username: "swire",
          email: "swire@swire.com",
          password: hashpassword5,
          postCode: "852",
          tel: "67896789",
          role: "client",
          status: true,
        },
      ]);
    });
};
