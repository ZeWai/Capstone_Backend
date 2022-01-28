const express = require("express");

class UsersRouter {
  constructor(usersService, auth) {
    (this.usersService = usersService), (this.auth = auth);
  }

  router() {
    let router = express.Router();

    //signup user
    router.post("/signup", this.signup.bind(this));
    //login
    router.post("/login", this.login.bind(this));
    //get user info
    router.get("/users", this.usersAll.bind(this));
    router.get("/users/:name", this.usersSingle.bind(this));

    return router;
  }

  signup(req, res) {
    return this.usersService
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
    return this.usersService
      .login(req.body.username, req.body.password)
      .then((token) => (token ? res.json(token) : res.sendStatus(401)));
  }

  usersAll(req, res) {
    return this.usersService.usersAll().then((data) => res.json(data));
  }

  usersSingle(req, res) {
    return this.usersService
      .usersSigle(req.params.name)
      .then((data) => res.json(data));
  }
}

module.exports = UsersRouter;
