// 웹 서버를 만드는 기본 설계도입니다.

// 필요한 라이브러리들을 가져옵니다.
const express = require("express");
const session = require("express-session");
const qs = require("qs");
const axios = require("axios");

// 가져온 라이브러리로 실제 서버를 만들고, 포트를 정합니다.
const app = express();
const port = 4000;

app.use(express.static(__dirname));
app.use(express.json());

app.use(
    session({
        secret: "",
        resave: false,
        saveUninitialized: true,
        cookie: {secure: false},
    })
);