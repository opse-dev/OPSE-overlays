const {app, BrowserWindow } = require('electron');

require('./src/server');

global.controllerWindow = null;

function createMainWindow() {
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

function createControllerWindow() {
	if (global.controllerWindow == null) {
		const controllerWindow = new BrowserWindow({
			width: 1280,
			height: 720,
			resizable: false,
			icon: `${__dirname}/src/assets/icon.ico`,
			transparent: true, 
			frame: false,
		});
	
		global.controllerWindow = controllerWindow;
		controllerWindow.setMenu(null)
		controllerWindow.loadURL('http://localhost:5000/controller/General-Settings');

		// controllerWindow.toggleDevTools();
	}
}

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});

exports.quit = () => { app.quit(); }

exports.CreateControllerWindow = () => {createControllerWindow()}
exports.closeControllerWindow = () => {
	global.controllerWindow.close();
	global.controllerWindow = null;
}