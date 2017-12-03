# Url-Shortener made by ÀÌÁ¾±¸

## Quick Start
#### npm install
#### mongod
#### node app.js

## Feature
### Shorten URL
#### ÀÔ·Â¹ŞÀº Original URL°ú Increment NumberÀÎ ID°ªÀ» ¸ù°íDB¿¡ ÀúÀå
#### base62(0~9, a~z, A~Z)·Î Increment Number ID°ªÀ» ÀÎÄÚµùÇÏ¿© »ç¿ëÀÚ¿¡°Ô Á¦°ø
#### »ç¿ëÀÚ°¡ ÀÎÄÚµùµÈ ÁÖ¼Ò¸¦ ¿äÃ»½Ã base62·Î µğÄÚµùÇÏ¿© Original URLÀ» ¸®´ÙÀÌ·ºÆ®
### Cusomize URL
#### ÀÔ·Â¹ŞÀº Original URL, Increment NumberÀÎ ID°ª, ÀÔ·Â¹ŞÀº Custom URLÀ» ¸ù°íDB¿¡ ÀúÀå
#### Shorten ±â´ÉÀ» »ç¿ëÇÑ ÀÌ·ÂÀÌ ÀÖ´Â ¿©ºÎ¿Í »ó°ü¾øÀÌ ÀÛµ¿
#### »ç¿ëÀÚ°¡ Custom ÁÖ¼Ò¸¦ ¿äÃ»½Ã ID°ªÀ¸·Î ¿¬°áµÈ Original URLÀ» ¸®´ÙÀÌ·ºÆ®
### Analysis
#### base62 url ¹× custom url·Î ¸®´ÙÀÌ·ºÆ®½Ã °ü·Ã count °¡ 1¾¿ Áõ°¡
#### base62 url ¹× custom urlÀ» ÀÔ·Â½Ã ¹æ¹®ÇÑ È½¼ö¸¦ Á¦°ø

## Skill & Library
### base62 encoding, decoding
### String ÇÑ±ÛÀÎÁö ÆÇ´Ü (Á¤±Ô½Ä - /[¤¡-¤¾|¤¿-¤Ó|°¡-ÆR]/)
### bluebird - µ¿±â½Ä ÇÔ¼ö
### jquery
### ajax
### express
### ejs