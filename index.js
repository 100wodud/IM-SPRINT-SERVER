const express = require("express");
const cors = require('cors');
require("./models");
const session = require('express-session');
const cookieParser = require('cookie-parser');

// TODO : express-session, cors 등 필요한 middleware를 추가하세요.
const mainController = require("./controllers");
const app = express();
const port = 13302;

app.use(
  session({
    secret: '@codestates',
    resave: false,
    saveUninitialized: true
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://3.34.199.73:13302','http://practice-shortly-express-deploy.s3-website.ap-northeast-2.amazonaws.com/', 'http://172.31.43.48:13302'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);


app.get("/user", mainController.userController);
app.post("/signin", mainController.signInController);
app.post("/signup", mainController.signUpController);
app.post("/signout", mainController.signOutController);

// NOTICE 테스트를 위한 코드 입니다. 건들지 않으셔도 좋습니다.
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`server listening on ${port}`);
  });
}

module.exports = app;
