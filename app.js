const {app, BrowserWindow} = require('electron')

var win;

app.on('ready', () => {
    win = new BrowserWindow({width: 306, height: 529});
    win.loadFile("./index.html")
    // win.setMenu(null)
})