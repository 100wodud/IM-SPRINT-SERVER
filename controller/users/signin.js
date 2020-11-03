const { users } = require('../../models');
module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    // console.log(‘users: ’ + users + ‘^^^’);
    users
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
        res.status(404).send('unvalid user');
      })
  }
};