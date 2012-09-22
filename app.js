//
// stream via websockets with ntwitter and socket.io
//
var io = require('socket.io').listen(8888);
var uri = 'statuses/filter';
var twitter = require('ntwitter');

io.sockets.on('connection',function(socket){
  socket.on('disconnect',function(){
    io.sockets.emit('user disconnected');
  });
});

var twit = new twitter({
  consumer_key: 'LS9t2mvBxKDnQ0xRqLugeQ',
  consumer_secret: '9CTySTlLnuu14ybs03kHJMVKSf8fedLXW8Yw2XSq0',
  access_token_key: '147371500-bDMwQMxXktV13E85y6Or9uagTzq4GHbxXsMiEbu3',
  access_token_secret: '3Bk9iliOFD0bOYiCjiigeVMUN5cxYABrmoPEZqgOOo'
});

twit.stream(uri, {
  track:'#dizorg,submarino,lojas americanas,nas americanas,na americanas,canal shoptime,shoptime,b2w'},
  //locations:['-15.778, -47.923 '] },
  function(stream) {
    stream.on('data', function (data) {
      console.log(data);
      io.sockets.emit('news',data)
    });
});

