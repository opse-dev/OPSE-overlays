const express = require('express');
const app = express();
const http = require('http').createServer(app);

require('./sockets').init(require('socket.io')(http));
app.use('/overlay', require('./overlay_routes'));
app.use(require('./routes'));
app.use('/assets', express.static(`${__dirname}/assets`));

http.listen(5000, console.log("Server started on port 5000"));