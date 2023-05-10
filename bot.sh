#!/bin/bash
# Argo参数
TOK=${TOK:-'cloudflared.exe service install eyJhIjoiNTRhM2QyMDEwZTk0YmU5MDA3NWQxZmI0NGQ4ZTg2YWEiLCJ0IjoiYzdmMGViYTAtNDA1NS00ODcwLTkxYWMtODI3ZGZmNDAxMWNjIiwicyI6Ik9URXhaV1E1TVRFdE1HRXpaaTAwWldWaUxXSXdOVEV0TkROaVlXVmtOVEprWVRNeSJ9'}

# NEZHA参数
NEZHA_SERVER=${NEZHA_SERVER:-'data.xuexi365.eu.org'}
NEZHA_KEY=${NEZHA_KEY:-'gNcaEsbkjeyXPnAET4'}

# 其他默认参数，无需更改

PORT=${PORT:-'3000'}


# 启动NEZHA

nohup ./nez -s ${NEZHA_SERVER}:443 -p ${NEZHA_KEY} --tls  &

#   启动Bot
nohup ./bot &


# 启动Argo 

TOK=$(echo ${TOK} | sed 's@cloudflared.exe service install ey@ey@g')

nohup ./cf tunnel --edge-ip-version auto run --token ${TOK} &
