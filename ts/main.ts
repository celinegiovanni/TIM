import {app, BrowserWindow} from "electron";
import {Display} from "./display";
import {FileHandler} from "./file-handler"

export class App {
    window : BrowserWindow;
    display: Display;

    fileHandler: FileHandler;

    constructor() {
        // initialise file handler
        this.fileHandler = new FileHandler();

        // Quit when all windows are closed
        app.on("window-all-closed", () => {
            // for mac
            // if (process.platform !== "darwin") app.quit();
            app.quit();
        });

        // app.on("active", () => {
        //     if (this.window == null) this.createWindow();
        // });

        app.on("ready", ()=> {
            this.createWindow();
        })

    }

    createWindow() : void {
        const homepage = "index.html";

        // create browser window
        this.window = new BrowserWindow({width: 800, height: 600});

        // load index.html
        this.window.loadURL(
            this.fileHandler.getURL(homepage, "file", true)
        );

        // handle close
        this.window.on("closed", () => {
            this.window = null;
        })

        // initialize things
        this.display = new Display(this);
    }

    openFile(fname: string, format: string) : any {
        return this.fileHandler.openFile(fname, format)
    }

}

function main() : void {
    const app = new App();
}

main();