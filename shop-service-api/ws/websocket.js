const ws = require('nodejs-websocket');

const createServer = () => {
  const server = ws.createServer((conn) => {
    console.log('New connection');

    conn.on('connect', code => {
      console.log('Connection established', code);
    });

    conn.on('text', (str) => {
      console.log('Received ' + str);
      conn.sendText(str.toUpperCase() + '!!!');
    });

    conn.on('close', (code, reason) => {
      console.log('Connection closed', code, reason);
    });

    conn.on('error', (code, reason) => {
      console.log('Connection error', code, reason);
    });
  });

  return server;
}

module.exports = createServer();
