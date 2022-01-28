const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

class Users {
    constructor(knex) {
        this.knex = knex;
    }


    //post signup user
    async signup(
        Username,
        Email,
        Password,
        PostCode,
        Tel,
        Role,
        Status,
        Name,
        Address,
        Icon,
        Image,
        Assigned,
        Area,
        Size
    ) {
        let hashedPassword = await bcrypt.hash(Password, 10);
        try {
            let checkExsit = await this.knex("users")
                .select("username")
                .where({ username: Username });
            if (checkExsit.length == 0) {
                let usersInsert = {
                    username: Username,
                    email: Email,
                    password: hashedPassword,
                    postCode: PostCode,
                    tel: Tel,
                    role: Role,
                    status: Status
                };
                await this.knex("users").insert(usersInsert);

                let userId = await this.knex("users")
                    .select("id")
                    .where({ username: Username });

                let infoInsert = {
                    name: Name,
                    users_id: userId[0].id,
                    address: Address,
                    icon: Icon,
                    image: Image,
                    assigned: Assigned
                };
                await this.knex("user_info").insert(infoInsert);

                Area = JSON.parse(Area)
                Size = JSON.parse(Size)
                for (let i = 0; i < Area.length; i++) {
                    await this.knex("zone").insert({
                        users_id: userId[0].id,
                        area: Area[i],
                        size: Size[i]
                    });
                }

                let err = "Signup success!";
                return err;
            } else {
                let err = "Username already exists!";
                return err;
            }
        } catch (err) {
            err = "Username already exists, please try other one!";
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
        if (user === undefined) {
            let err = "Incorrect username or password, Please try again!";
            return err;
        }
        if (await bcrypt.compare(password, user.password)) {
            let payload = {
                id: user.id,
                role: user.role,
            };
            let token = jwt.sign(payload, config.jwtSecret);
            return token;
        } else {
            let err = "Incorrect username or password, Please try again!";
            return err;
        }
    }

    //get all user
    async usersAll() {
        let userList = await this.knex("user_info").select("*");
        if (userList.length == 0) {
            let err = "No user exist!";
            return err;
        } else {
            return userList;
        }
    }

    //get single user
    async usersSigle(id) {
        console.log("at service")
        let user = await this.knex("user_info")
            .select("*")
            .where({ users_id: id });
            console.log(user)
        if (user.length == 0) {
            let err = "User does not exist!";
            return err;
        } else {
            return user;
        }
    }
}

module.exports = Users;
