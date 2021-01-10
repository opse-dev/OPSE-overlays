const express = require('express');
const app = express();
const http = require('http').createServer(app);

require('./sockets').init(require('socket.io')(http));
app.use(require('./routes'));

http.listen(5000, console.log("server started"));