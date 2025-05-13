const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send('Bot online');
});

function keepAlive() {
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log("Server is Ready!! " + Date.now());
  });
}

module.exports = keepAlive;
