var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on("connection", function(socket) {
  socket.on("lobby", (message) => {
    //deal with new messages and emit to all clients.
    console.log(message)
    io.sockets.emit("lobby", message)
  })
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});