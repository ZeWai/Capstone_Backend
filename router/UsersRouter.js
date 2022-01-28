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
    router.get("/users/:userId", this.usersSigle.bind(this));

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
        req.body.status,
        req.body.name,
        req.body.address,
        req.body.icon,
        req.body.image,
        req.body.assigned,
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

<<<<<<< HEAD:router/router.js
  usersSigle(req, res) {
    return this.users
      .usersSigle(req.params.userId)
=======
  usersSingle(req, res) {
    return this.usersService
      .usersSigle(req.params.name)
>>>>>>> fd4b30e148774a2aafee8d716dc422b83b43d182:router/UsersRouter.js
      .then((data) => res.json(data));
  }
}

module.exports = UsersRouter;
