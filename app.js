let express = require('express');
let path = require('path');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let port = 8000;


app.use(express.static(path.join(__dirname, "public")));


io.on('connection', function(socket){
  console.log('new connection made');
})



server.listen(port, function(){
  console.log('Listening on port ' +  port);
});
