# Url-Shortener made by 이종구

## Quick Start
#### npm install
#### mongod
#### node app.js

## Feature
### Shorten URL
#### 입력받은 Original URL과 Increment Number인 ID값을 몽고DB에 저장
#### base62(0~9, a~z, A~Z)로 Increment Number ID값을 인코딩하여 사용자에게 제공
#### 사용자가 인코딩된 주소를 요청시 base62로 디코딩하여 Original URL을 리다이렉트
### Cusomize URL
#### 입력받은 Original URL, Increment Number인 ID값, 입력받은 Custom URL을 몽고DB에 저장
#### Shorten 기능을 사용한 이력이 있는 여부와 상관없이 작동
#### 사용자가 Custom 주소를 요청시 ID값으로 연결된 Original URL을 리다이렉트
### Analysis
#### base62 url 및 custom url로 리다이렉트시 관련 count 가 1씩 증가
#### base62 url 및 custom url을 입력시 방문한 횟수를 제공

## Skill & Library
### base62 encoding, decoding
### String 한글인지 판단 (정규식 - /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)
### bluebird - 동기식 함수
### jquery
### ajax
### express
### ejs
### mongodb - mongoose