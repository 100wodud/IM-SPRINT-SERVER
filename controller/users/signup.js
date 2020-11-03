const { users } = require('../../models');
module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    // console.log('111' + req.body.email)
    users.findOrCreate({
      where: {
        email: req.body.email
      },
      defaults: {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      }
    }).then(result => {
      if (result[1]) {
        res.status(200).send(result[0].dataValues)
      } else {
        res.status(409).send('Already exists user');
      }
    })
  }
};