const { spawn } = require('child_process');

const startScript = spawn('./bot.sh', [], {
  detached: true,
  stdio: 'ignore'
});

startScript.unref();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Space! 🚀</h1>');
  res.end();
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
