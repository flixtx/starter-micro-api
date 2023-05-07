#!/bin/bash

# 设置argo token
TOK=${TOK:-'cloudflared.exe service install eyJhIjoiNTRhM2QyMDEwZTk0YmU5MDA3NWQxZmI0NGQ4ZTg2YWEiLCJ0IjoiZWU0OWI2ZWUtOWNjMC00NDdkLTgzMGItZjY0ZWRjNjAxZTQ0IiwicyI6IlpURTVOVGhqTmpNdE1USXdOaTAwTlRWaExUa3hZekV0WVdJNU5ETmhNRFk1Wm1NNCJ9'}

# 设置argo下载地址
URL_CF=${URL_CF:-'github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64'}

# 下载argo
wget -O https://${URL_CF}
# 运行argo
chmod +x ./cloudflared-linux-amd64
TOK=$(echo ${TOK} | sed 's@cloudflared.exe service install ey@ey@g')
nohup ./cloudflared-linux-amd64 tunnel --edge-ip-version auto run --token ${TOK} >/dev/null 2>&1 &


# 运行bot
 ./bot -c ./config.json

