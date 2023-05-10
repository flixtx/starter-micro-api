const { spawn } = require('child_process');
const http = require('http');

function startBot() {
  const bot = spawn('./bot', [], {
    stdio: 'ignore',
    detached: true,
  });
  bot.unref();

  bot.on('exit', () => {
    console.log('Bot exited, restarting...');
    startBot();
  });
}

startBot();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
