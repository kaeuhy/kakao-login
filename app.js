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

// 변수 지정
const client_id = "0918856d58725160c41708e592be8475";
const client_secret = "this is client secret key";
const domain = "http://localhost:4000";
const redirect_uri = `${domain}/redirect`;
const token_uri = "https://kauth.kakao.com/oauth/token"; // 액세스 토큰 요청을 보낼 카카오 인증 서버 주소
const api_host = "https://kapi.kakao.com";

// API 요청 함수 정의
async function call(method, uri, param, header) {
    let rtn;
    try {
        // 지정된 method, uri, param, header 값을 사용해 카카오 API 서버로 HTTP 요청 전송
        rtn = await axios({
            method: method,   // POST 또는 GET 등 HTTP 메서드
            url: uri,         // 요청할 API 주소
            headers: header,  // 요청 헤더
            data: param,      // 전송할 요청 데이터
        });
    } catch (err) {
        // 오류 발생 시, 응답 객체에서 오류 응답 내용 저장
        rtn = err.response;
    }
    // 요청 성공 또는 실패에 상관없이 응답 데이터 반환
    return rtn.data;
}














