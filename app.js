//
// stream via websockets with ntwitter and socket.io
//
var io = require('socket.io').listen(8888)
  , uri = 'statuses/filter'
  , twitter = require('ntwitter');

io.sockets.on('connection',function(socket){
  socket.on('disconnect',function(){
    io.sockets.emit('user disconnected');
  });
});

var twit = new twitter({
  consumer_key: 'key',
  consumer_secret: 'secret',
  access_token_key: 'token',
  access_token_secret: 'secret'
});

twit.stream(uri, {
  track:'#dizorg,ufc,ufc152'},
  function(stream) {
    stream.on('data', function (data) {
      console.log(data);
      io.sockets.emit('news',data)
    });
});

