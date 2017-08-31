
const express = require('express');
const pg = require('pg');
const app = express();
const PORT = process.env.PORT || 4000;


const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));


app.use(express.static('./public'));

app.get('/*', (req, res) => {
  res.sendFile('index.html')
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
