
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

class Users {
    constructor(knex) {
        this.knex = knex;
    }

    //post signup user
    async signup(Username, Email, Password, PostCode, Contact, Role, Name, Address, Size, Date_opened, Icon, Image, Soil_planting, Area) {
        try {
            let checkExsit = await this.knex("users")
                .select("username")
                .where({ username: Username })
            if (checkExsit.length == 0) {
                let usersInsert = {
                    username: Username,
                    email: Email,
                    password: Password,
                    postCode: PostCode,
                    contact: Contact,
                    role: Role
                }
                await this.knex('users').insert(usersInsert);

                let userId = await this.knex('users').select("id").where({ username: Username })

                let infoInsert = {
                    name: Name,
                    users_id: userId[0].id,
                    address: Address,
                    size: Size,
                    date_opened: Date_opened,
                    icon: Icon,
                    image: Image,
                    soil_planting: Soil_planting
                }
                await this.knex('user_info').insert(infoInsert);

                let zoneInsert = {
                    users_id: userId[0].id,
                    area: Area,
                }
                await this.knex('zone').insert(zoneInsert);

                let err = "Signup success!";
                return err;
            } else {
                let err = "Username already exists!"
                return err;
            }
        } catch (err) {
            err = "Username already exists, please try other one!"
            return err;
        }
    }

    //post login
    async login(username, password) {
        let user = await this.knex
            .select("*")
            .from("users")
            .where({ username: username })
            .then((data) => data[0]);
        if (password == user.password) {
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
        let userList = await this.knex("user_info").select("*");
        if (userList.length == 0) {
            let err = "No user exist!"
            return err;
        } else {
            return userList;
        }
    }

    //get sigle user
    async usersSigle(username) {
        let user = await this.knex("user_info").select("*").where({ name: username })
        if (user.length == 0) {
            let err = "User does not exist!"
            return err;
        } else {
            return user;
        }

    }
}

module.exports = Users;
