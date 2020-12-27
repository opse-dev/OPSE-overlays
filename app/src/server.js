const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const ip = require('public-ip');
const pug = require('pug');
const sass = require('sass');

app.get('/', async (req, res) => {
    res.send(pug.renderFile('./src/main/page.pug', {
        ip: await ip.v4(),
        style: sass.renderSync({file: `./src/main/style.scss`}).css.toString(),
    }))
});

io.on('connection', function(socket) {
	console.log(`  -> ${socket.id} connected`);
	
	socket.on('disconnect', () => {
		console.log(`  <- ${socket.id} disconnected`);
	});
});

http.listen(5000, console.log("server started"));