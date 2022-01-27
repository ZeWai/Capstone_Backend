const express = require("express");

class Router {
<<<<<<< HEAD
    constructor(users, auth) {
        this.users = users,
            this.auth = auth;
    }

    router() {
        let router = express.Router();

        //signup user
        router.post('/signup', this.signup.bind(this))
        //login
        router.post("/login", this.login.bind(this))
        //get user info
        router.get('/users', this.usersAll.bind(this))
        router.get('/user/single', this.usersSigle.bind(this))

        return router;
    }


    signup(req, res) {
        return this.users
            .signup(
                req.body.username,
                req.body.email,
                req.body.password,
                req.body.postCode,
                req.body.tel,
                req.body.role,
                req.body.name,
                req.body.address,
                req.body.icon,
                req.body.image,
                req.body.area,
                req.body.size
            )
            .then((data) => res.json(data))
    }

    login(req, res) {
        return this.users
            .login(req.body.username, req.body.password)
            .then((token) => (token ? res.json(token) : res.sendStatus(401)));
    }

    usersAll(req, res) {
        return this.users.usersAll().then((data) => res.json(data))
    }

    usersSigle(req, res) {
        console.log("at users")
        return this.users.usersSigle(1).then((data) => res.json(data))
    }
=======
  constructor(users, auth) {
    (this.users = users), (this.auth = auth);
  }

  router() {
    let router = express.Router();

    //signup user
    router.post("/signup", this.signup.bind(this));
    //login
    router.post("/login", this.login.bind(this));
    //get user info
    router.get("/users", this.usersAll.bind(this));
    router.get("/users/:name", this.usersSigle.bind(this));

    return router;
  }

  signup(req, res) {
    return this.users
      .signup(
        req.body.username,
        req.body.email,
        req.body.password,
        req.body.postCode,
        req.body.tel,
        req.body.role,
        req.body.name,
        req.body.address,
        req.body.icon,
        req.body.image,
        req.body.area,
        req.body.size
      )
      .then((data) => res.json(data));
  }

  login(req, res) {
    return this.users
      .login(req.body.username, req.body.password)
      .then((token) => (token ? res.json(token) : res.sendStatus(401)));
  }

  usersAll(req, res) {
    return this.users.usersAll().then((data) => res.json(data));
  }

  usersSigle(req, res) {
    return this.users
      .usersSigle(req.params.name)
      .then((data) => res.json(data));
  }
>>>>>>> refs/remotes/origin/master
}

module.exports = Router;
