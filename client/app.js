const { app, BrowserWindow, ipcMain } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 250,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.removeMenu();
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

ipcMain.on("start-share",function(event,arg){

    //Take Continous Screenshots

    //Broadcast to all other users
})

ipcMain.on("stop-share",function(event,arg){

    //Stop broadcasting and screenshot capturing
})