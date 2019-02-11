// start electron by npm run electron-start
const { app, BrowserWindow } = require("electron");
const { default: installExtension, REDUX_DEVTOOLS} = require('electron-devtools-installer');

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  // and load the index.html of the app.
  win.loadURL('http://localhost:3000/');

  installExtension(REDUX_DEVTOOLS).then((name) => {
    console.log(`Added Extension:  ${name}`);
})
.catch((err) => {
    console.log('An error occurred: ', err);
});
}
app.on("ready", createWindow);
