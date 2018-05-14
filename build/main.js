"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const display_1 = require("./display");
const file_handler_1 = require("./file-handler");
class App {
    constructor() {
        // initialise file handler
        this.fileHandler = new file_handler_1.FileHandler();
        // Quit when all windows are closed
        electron_1.app.on("window-all-closed", () => {
            // for mac
            // if (process.platform !== "darwin") app.quit();
            electron_1.app.quit();
        });
        // app.on("active", () => {
        //     if (this.window == null) this.createWindow();
        // });
        electron_1.app.on("ready", () => {
            this.createWindow();
        });
    }
    createWindow() {
        const homepage = "index.html";
        // create browser window
        this.window = new electron_1.BrowserWindow({ width: 800, height: 600 });
        // load index.html
        this.window.loadURL(this.fileHandler.getURL(homepage, "file", true));
        // handle close
        this.window.on("closed", () => {
            this.window = null;
        });
        // show dev tools
        this.window.webContents.openDevTools();
        // initialize things
        this.display = new display_1.Display(this);
        // this.doJS("document.getElementById('directoryList').innerHTML += '<div>hi</div>'");
        // this.doJS("test();")
    }
    openFile(fname, format) {
        return this.fileHandler.openFile(fname, format);
    }
    doJS(action) {
        // if (this.window.webContents.isLoading()) {
        //     console.log("timeout");
        //     setTimeout(() => {
        //         this.doJS(action);
        //     }, 1000);
        // }
        console.log(action);
        this.window.webContents.executeJavaScript(action);
    }
}
exports.App = App;
function main() {
    const app = new App();
}
main();
//# sourceMappingURL=main.js.map