import { App } from "./main";

export class Display {
    app: App;
    dirListEl: HTMLElement;

    constructor(app: App){
        this.app = app;
        // this.dirListEl = document.getElementById("directoryList");
        this.populateProjects();
    }

    async populateProjects(){
        const fileHandler = this.app.fileHandler;

        // change to server group dir
        // make this a config
        let dirList = await fileHandler.readDir(
            fileHandler.changeDir("/Volumes/nzaklssf_group")
        );

        let dirListString = "document.getElementById('directoryList').innerHTML += <div>hi</div>";
        // dirList.forEach((fname) => {
        //     dirListString += ("<li>${fname}</li>");
        // })

        // console.log(dirListString);
        // this.app.doJS(dirListString.toString());

        // this.app.doJS("document.getElementById('directoryList').innerHTML += <div>hi</div>");
        // this.test();
    }

    test(){
        this.app.doJS("document.getElementById('directoryList').innerHTML += <div>hi</div>");
    }
}