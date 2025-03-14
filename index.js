const { app, BrowserWindow, screen } = require("electron");

app.whenReady().then(() => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize; 

  const win = new BrowserWindow({
    width: 400,
    height: 120,
    frame: false, 
    transparent: true, 
    alwaysOnTop: true, 
    resizable: false, 
    webPreferences: {
      nodeIntegration: false, 
    },
  });

  win.setBounds({
    x: width - 400 - 10, 
    y: height - 120 - 10, 
  });

  win.loadFile("templates/index.html"); 
});
