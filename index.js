const { spawn } = require('child_process');
const fs = require('fs');

const out = fs.openSync('./out.log', 'a');
const err = fs.openSync('./out.log', 'a');

const startScript = spawn('/bot.sh', [], {
  detached: true,
  stdio: [ 'ignore', out, err ]
});

startScript.unref();

const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('应用已启动，监听端口 3000');
});
