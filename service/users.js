
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

class Users {
    constructor(knex) {
        this.knex = knex;
    }

    //post signup user
    async signup(username, email, password, admin, areaCode, contactNo, logo, access) {
        let hashedPassword = await bcrypt.hash(password, 10);
        password = hashedPassword;
        let signupForm = {
            username: username,
            email: email,
            password: password,
            admin: admin,
            areaCode: areaCode,
            contactNo: contactNo,
            logo: logo,
            access: access
        }
        try {
            await this.knex("admin")
                .insert({
                    username: signupForm.username,
                    email: signupForm.email,
                    password: signupForm.password,
                    admin: signupForm.admin,
                    areaCode: signupForm.areaCode,
                    contactNo: signupForm.contactNo,
                    logo: signupForm.logo,
                    access: signupForm.access
                })
            let err = "Signup success!"
            return err;
        } catch (err) {
            err = "Username already exists, please try other one!"
            return err;
        }
    }

    //post login
    async login(username, password) {
        let user = await this.knex
            .select("*")
            .from("admin")
            .where({ username: username })
            .then((data) => data[0]);
        if (await bcrypt.compare(password, user.password)) {
            let payload = {
                id: user.id,
            };
            let token = jwt.sign(payload, config.jwtSecret);
            return token;
        } else {
            let err = "Incorrect username or password, Please try again!"
            return err;
        }
    }

    //get all user
    async usersAll() {
        let userList = await this.knex("admin").select("*");
        if (userList.length == 0) {
            let err = "No user exist!"
            return err;
        } else {
            return userList;
        }
    }

    //get sigle user
    async usersSigle(username) {
        let user = await this.knex("admin").select("*").where({ username: username })
        if (user.length == 0) {
            let err = "User does not exist!"
            return err;
        } else {
            return user;
        }

    }
}

module.exports = Users;
