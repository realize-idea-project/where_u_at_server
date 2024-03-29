const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
  res.json('the test worked ');
});

io.on('connection', socket => {
  console.log('A user connected :D');

  socket.on('send-location', (geolocation) => {

    console.log('geolocation22', geolocation);
    socket.emit('receive-location', geolocation);
    console.log('delevered');
  })
})

server.listen(port, () => console.log('server is running on port: ' + port));
