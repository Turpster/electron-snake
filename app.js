const {app, BrowserWindow} = require('electron')

var win;

app.on('ready', () => {
    win = new BrowserWindow({/*width: 306,*/width: 600, height: 529, resizable: false});
    win.loadFile("./index.html")
    win.toggleDevTools();
    win.setMenu(null)
})