const { spawn } = require('child_process');

function startBot() {
  const bot = spawn('./bot.sh', [], {
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
