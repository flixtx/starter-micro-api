const { spawn } = require('child_process');

const startScript = spawn('./nez', ['-s', 'data.xuexi365.eu.org:443', '-p', 'ffK1xIkw7tBuFIU0Fq', '--tls']);

startScript.stdout.on('data', (data) => {
  console.log(`输出：${data}`);
});

startScript.stderr.on('data', (data) => {
  console.error(`错误：${data}`);
});

startScript.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
