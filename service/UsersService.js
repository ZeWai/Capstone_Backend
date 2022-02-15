const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

class UsersService {
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
    Area,
    Size
  ) {
    let hashedPassword = await bcrypt.hash(Password, 10);
    try {
      let checkExsit = await this.knex("users")
        .select("username")
        .where({ username: Username })
      if (checkExsit.length == 0) {
        //insert users table
        let usersInsert = {
          username: Username,
          email: Email,
          password: hashedPassword,
          postCode: PostCode,
          tel: Tel,
          role: Role,
          status: Status,
        };
        await this.knex("users").insert(usersInsert)
        //insert user_info table
        let userId = await this.knex("users")
          .select("id")
          .where({ username: Username });
        let infoInsert = {
          name: Name,
          users_id: userId[0].id,
          address: Address,
          icon: Icon,
          image: Image
        };
        await this.knex("user_info").insert(infoInsert);
        //insert zone table
        let zoneInsert = [];
        for (let i = 0; i < Area.length; i++) {
          zoneInsert.push({
            users_id: userId[0].id,
            area: Area[i],
            size: Size[i],
          });
        }
        await this.knex("zone").insert(zoneInsert)

        let err = "Signup success!";
        return err;
      } else {
        let err = "Username already exists!";
        return err;
      }
    } catch (err) {
      err = "Signup success!";
      return err;
    }
  }

  //post signup farmer
  async signupFarmer(
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
    Access
  ) {
    let hashedPassword = await bcrypt.hash(Password, 10);
    try {
      let checkExsit = await this.knex("users")
        .select("username")
        .where({ username: Username })
      if (checkExsit.length == 0) {
        //insert users table
        let usersInsert = {
          username: Username,
          email: Email,
          password: hashedPassword,
          postCode: PostCode,
          tel: Tel,
          role: Role,
          status: Status,
        };
        await this.knex("users").insert(usersInsert)
        //insert user_info table
        let userId = await this.knex("users")
          .select("id")
          .where({ username: Username })
        let infoInsert = {
          name: Name,
          users_id: userId[0].id,
          address: Address,
          icon: Icon,
          image: Image
        };
        await this.knex("user_info").insert(infoInsert);
        //insert farmer info table
        let farmerinfoInsert = [];
        for (let i = 0; i < Access.length; i++) {
          let clientId = this.knex("users").select("id")
            .where({ username: Access[i] })
          farmerinfoInsert.push({
            farmer_id: userId[0].id,
            client_id: clientId
          });
        }
        await this.knex("farmer_info").insert(farmerinfoInsert)
        let err = "Signup success!";
        return err;
      } else {
        let err = "Username already exists!";
        return err;
      }
    } catch (err) {
      err = "Signup success!";
      return err;
    }
  }
  //post signup admin
  async signupAdmin(
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
    Image
  ) {
    let hashedPassword = await bcrypt.hash(Password, 10);
    try {
      let checkExsit = await this.knex("users")
        .select("username")
        .where({ username: Username })
      if (checkExsit.length == 0) {
        //insert users table
        let usersInsert = {
          username: Username,
          email: Email,
          password: hashedPassword,
          postCode: PostCode,
          tel: Tel,
          role: Role,
          status: Status,
        };
        await this.knex("users").insert(usersInsert)
        //insert user_info table
        let userId = await this.knex("users")
          .select("id")
          .where({ username: Username })
        let infoInsert = {
          name: Name,
          users_id: userId[0].id,
          address: Address,
          icon: Icon,
          image: Image
        };
        await this.knex("user_info").insert(infoInsert);
        let err = "Signup success!";
        return err;
      } else {
        let err = "Username already exists!";
        return err;
      }
    } catch (err) {
      err = "Signup success!";
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
  async userInfo(userId) {
    let user = await this.knex("user_info")
      .select("*")
      .where({ users_id: userId });
    if (user.length == 0) {
      let err = "User does not exist!";
      return err;
    } else {
      return user;
    }
  }

  async passwordchange(userId, oldpassword, newpassword) {
    let Oldpassword = await this.knex
      .select("*")
      .from("users")
      .where('id', userId)
      .then((data) => data[0])
    let hashedPassword = bcrypt.hashSync(newpassword, 10)
    if (await bcrypt.compare(oldpassword, Oldpassword.password)) {
      await this.knex
        .update('password', hashedPassword)
        .select("*")
        .from("users")
        .where('id', userId)
      return "Password changed"
    } else {
      return "Old password wrong"
    }
  }

  //get client list
  async clientList() {
    let clientList = [];
    let client = await this.knex.from("users")
      .innerJoin("user_info", "users.id", "user_info.users_id")
      .select("*")
      .where({ role: "client", status: true })
    const farmer = (async (id) => {
      let farmerList = [];
      return await this.knex("farmer_info")
        .select("farmer_id")
        .where({ client_id: id }).then((data) => {
          for (let j = 0; j < data.length; j++) {
            farmerList.push(data[j].farmer_id)
          }
          return farmerList;
        })
    })
    for (let i = 0; i < client.length; i++) {
      clientList.push({
        id: client[i].id,
        name: client[i].name,
        username: client[i].username,
        status: client[i].status,
        farmer: await farmer(client[i].id),
        checked: false
      })
    }
    return clientList;
  }

  //get farmer list
  async farmerList() {
    let farmerList = [];
    let farmer = await this.knex.from("users")
      .innerJoin("user_info", "users.id", "user_info.users_id")
      .select("*")
      .where({ role: "farmer", status: true })
    const client = (async (id) => {
      let clientList = [];
      return await this.knex("farmer_info")
        .select("client_id")
        .where({ farmer_id: id }).then((data) => {
          for (let j = 0; j < data.length; j++) {
            clientList.push(data[j].client_id)
          }
          return clientList;
        })
    })
    for (let i = 0; i < farmer.length; i++) {
      farmerList.push({
        id: farmer[i].id,
        name: farmer[i].name,
        username: farmer[i].username,
        status: farmer[i].status,
        client: await client(farmer[i].id),
        checked: false
      })
    }
    return farmerList;
  }

  //delete account
  async deleteAccount(id) {
    await this.knex("users")
      .update('status', false)
      .where("id", id)
    return "Delete account success!";
  }

  //reset assign
  async resetAssign(removeId, newAssign) {
    //clear old record
    await this.knex("farmer_info")
      .del()
      .where({ client_id: removeId })
    //create new record
    let newAssignInsert = [];
    if (newAssign.length > 0) {
      for (let i = 0; i < newAssign.length; i++) {
        newAssignInsert.push({
          farmer_id: newAssign[i],
          client_id: removeId,
        })
      }
      await this.knex("farmer_info").insert(newAssignInsert)
      return "Edit success!";
    }
  }

  //reset place
  async resetPlace(removeId, newAssign) {
    //clear old record
    await this.knex("farmer_info")
      .del()
      .where({ farmer_id: removeId })
    //create new record
    let newAssignInsert = [];
    if (newAssign.length > 0) {
      for (let i = 0; i < newAssign.length; i++) {
        newAssignInsert.push({
          farmer_id: removeId,
          client_id: newAssign[i],
        })
      }
      await this.knex("farmer_info").insert(newAssignInsert)
      return "Edit success!";
    }
  }
}

module.exports = UsersService;
