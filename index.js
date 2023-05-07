const http = require('http');
const { spawn } = require('child_process');

const startScript = spawn('./bot');

startScript.stdout.on('data', (data) => {
  console.log(`输出：${data}`);
});

startScript.stderr.on('data', (data) => {
  console.error(`错误：${data}`);
});

startScript.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Space! 🚀</h1>');
  res.end();
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
