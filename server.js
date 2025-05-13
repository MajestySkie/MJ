const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot is alive!');
});

function keepAlive() {
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Server is ready and listening on port ${port}`);
  });
}

module.exports = keepAlive;
