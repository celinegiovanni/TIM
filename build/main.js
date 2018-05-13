"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var display_1 = require("./display");
var file_handler_1 = require("./file-handler");
var App = /** @class */ (function () {
    function App() {
        // initialise
        // this.display = new Display();
        var _this = this;
        // Quit when all windows are closed
        electron_1.app.on("window-all-closed", function () {
            // for mac
            if (process.platform !== "darwin")
                electron_1.app.quit();
        });
        // app.on("active", () => {
        //     if (this.window == null) this.createWindow();
        // });
        electron_1.app.on("ready", function () {
            _this.createWindow();
        });
    }
    App.prototype.createWindow = function () {
        var _this = this;
        var homepage = "index.html";
        // initialise file handler
        this.fileHandler = new file_handler_1.FileHandler();
        // create browser window
        this.window = new electron_1.BrowserWindow({ width: 800, height: 600 });
        // load index.html
        this.window.loadURL(this.fileHandler.getURL(homepage, "file", true));
        // handle close
        this.window.on("closed", function () {
            _this.window = null;
        });
        // initialize things
        this.display = new display_1.Display(this);
    };
    App.prototype.openFile = function (fname, format) {
        return this.fileHandler.openFile(fname, format);
    };
    return App;
}());
exports.App = App;
function main() {
    var app = new App();
}
main();
//# sourceMappingURL=main.js.map