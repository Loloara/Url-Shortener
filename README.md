# Url-Shortener made by ������

## Quick Start
#### npm install
#### mongod
#### node app.js

## Feature
### Shorten URL
#### �Է¹��� Original URL�� Increment Number�� ID���� ����DB�� ����
#### base62(0~9, a~z, A~Z)�� Increment Number ID���� ���ڵ��Ͽ� ����ڿ��� ����
#### ����ڰ� ���ڵ��� �ּҸ� ��û�� base62�� ���ڵ��Ͽ� Original URL�� �����̷�Ʈ
### Cusomize URL
#### �Է¹��� Original URL, Increment Number�� ID��, �Է¹��� Custom URL�� ����DB�� ����
#### Shorten ����� ����� �̷��� �ִ� ���ο� ������� �۵�
#### ����ڰ� Custom �ּҸ� ��û�� ID������ ����� Original URL�� �����̷�Ʈ
### Analysis
#### base62 url �� custom url�� �����̷�Ʈ�� ���� count �� 1�� ����
#### base62 url �� custom url�� �Է½� �湮�� Ƚ���� ����

## Skill & Library
### base62 encoding, decoding
### String �ѱ����� �Ǵ� (���Խ� - /[��-��|��-��|��-�R]/)
### bluebird - ����� �Լ�
### jquery
### ajax
### express
### ejs