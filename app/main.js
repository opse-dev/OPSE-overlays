const {app, BrowserWindow, Menu, Tray, nativeImage } = require('electron');

require('./src/server');

function createWindow () {
	const mainWindow = new BrowserWindow({
		width: 600,
		height: 400,
		resizable: false,
		icon: `${__dirname}/src/assets/icon.ico`,
		transparent: true, 
		frame: false,
	});

	global.mainWindow = mainWindow;
	mainWindow.setMenu(null)
	mainWindow.loadURL('http://localhost:5000');
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function () {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

exports.quit = () => { app.quit(); }