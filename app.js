let express = require('express');
let path = require('path');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let port = 8000;


app.use(express.static(path.join(__dirname, "public")));


io.on('connection', function(socket){
  console.log('new connection made');


  socket.emit('message-from-server',{
    greeting: 'You are now being served from your favourite server 100.KM'
  });

  socket.on('message-from-client', function(msg){
    console.log(msg);
  });
});

server.listen(port, function(){
  console.log('Listening on port ' +  port);
});
