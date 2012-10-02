twitterstream-ws
================

Twitter streaming with socket.io and ntwitter

After reading a lot about node.js and trying some simple apps, I've stumbled upon the great [1]:http://www.catonmat.net/blog/nodejs-modules-ntwitter series.

From there, I've set up to write a twitter stream client, first, with the request module (see[1]), then with the ntwitter module.

To glue the previous step with websockets, I've based on https://github.com/andregoncalves/twitter-nodejs-websocket, and on http://socket.io tutorials to set this up. Also there's nginx_tcp_proxy_module for websocket upgrade request.

Word of advice: This sample code is meant only for learning new stuff, it's not production ready.

demo: www.dizorg.net/twitter-stream-node-socket-io-websockets-html5.html
