const session = require("express-session");
const { user } = require("../models");
module.exports = {
  signInController: (req, res) => {
    // TODO : 로그인 및 인증 부여 로직 작성
    user
      .findOne({
        where: {
          email: req.body.email
        },
      }).then(result => {
        if (result.dataValues.password === req.body.password) {
          req.session.userid = result.dataValues.id
          res.status(200).send({
            id: result.dataValues.id
          })
        }
      }).catch(err => {
        res.status(404).send('invalid user');
      })
  },
  signUpController: (req, res) => {
    // TODO : 회원가입 로직 및 유저 생성 로직 작성
    if(!req.body.email || !req.body.username || !req.body.password || !req.body.mobile){
      res.status(422).send('insufficient parameters supplied');
    }
    user.findOrCreate({
      where: {
        email: req.body.email
      },
      defaults: {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        mobile: req.body.mobile
      }
    }).then(result => {
      // console.log(result);
      if (result[1]) {
        res.status(201).send(result[0].dataValues)
      } else {
        res.status(409).send('email exists');
      }
    })
  },
  signOutController: (req, res) => {
    // TODO: 로그아웃 로직 작성
    req.session.destroy();
    res.status(205).send("Logged out successfully");
  },
  userController: (req, res) => {
    // TODO : 유저 회원정보 요청 로직 작성
    user
        .findOne({
        where: {
          id: req.session.userid
        }
      }).then(result => {
        res.status(200).send(result.dataValues)
      }).catch(err => {
        res.status(401).send('need user session');
      })
  }
};
