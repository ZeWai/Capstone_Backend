const express = require("express");
const fs = require('fs');
const multer = require('multer');
//fetch upload
const upload = multer({ dest: 'uploads/' });
//create random uuid
const uuid = require('uuid').v4;

class UsersRouter {
  constructor(usersService, auth) {
    (this.usersService = usersService), (this.auth = auth);
  }

  router() {
    let router = express.Router();

    //signup user
    router.post("/signup",
      //extract required uploaded file
      upload.fields([
        { name: 'icon', maxCount: 1 },
        { name: 'image', maxCount: 1 },
      ]),
      this.signup.bind(this));
    router.post("/signupFarmer",
      //extract required uploaded file
      upload.fields([
        { name: 'icon', maxCount: 1 }
      ]),
      this.signupFarmer.bind(this));
    //login
    router.post("/login", this.login.bind(this));
    //get user info
    router.get("/users", this.auth.authenticate(), this.usersAll.bind(this));
    router.get("/users/:userId", this.auth.authenticate(), this.userInfo.bind(this));
    router.get("/clientList", this.auth.authenticate(), this.clientList.bind(this));

    return router;
  }
  signup(req, res) {
    for (let i in req.files) {
      //get image format form file name substring after "."
      let getImageFormat = req.files[i][0].originalname.substring(req.files[i][0].originalname.indexOf('.'));
      //create new uuid merge with image format
      let newFileName = `${uuid()}${getImageFormat}`;
      //add root path with new file name. eg : uploads\{newFileName}
      let imagePath = req.files[i][0].path;
      //add imageFormat into new name. eg. uploads\{newFileName}.jpg
      let addImageFormat = req.files[i][0].destination + newFileName;
      //file rename from uploads\{newFileName} to uploads\{newFileName}.jpg
      fs.renameSync(imagePath, addImageFormat);
      req.body[i] = `${addImageFormat}`;
    }
    //string to array
    const areaList = req.body.area.split(",");
    const sizeList = req.body.size.split(",");
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
        areaList,
        sizeList
      )
      .then((data) => res.json(data));
  }

  signupFarmer(req, res) {
    for (let i in req.files) {
      //get image format form file name substring after "."
      let getImageFormat = req.files[i][0].originalname.substring(req.files[i][0].originalname.indexOf('.'));
      //create new uuid merge with image format
      let newFileName = `${uuid()}${getImageFormat}`;
      //add root path with new file name. eg : uploads\{newFileName}
      let imagePath = req.files[i][0].path;
      //add imageFormat into new name. eg. uploads\{newFileName}.jpg
      let addImageFormat = req.files[i][0].destination + newFileName;
      //file rename from uploads\{newFileName} to uploads\{newFileName}.jpg
      fs.renameSync(imagePath, addImageFormat);
      req.body[i] = `${addImageFormat}`;
    }
    //string to array
    const accessList = req.body.access.split(",");
    return this.usersService
      .signupFarmer(
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
        accessList,
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

  userInfo(req, res) {
    return this.usersService
      .userInfo(req.params.userId)
      .then((data) => res.json(data));
  }

  clientList(req, res) {
    return this.usersService.clientList().then((data) => res.json(data));
  }

}

module.exports = UsersRouter;
