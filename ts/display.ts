import { App } from "./main";

export class Display {
    app: App;
    dirListEl: HTMLElement;

    constructor(app: App){
        this.app = app;
        this.populateProjects();
    }

    async populateProjects(){
        const fileHandler = this.app.fileHandler;

        // change to server group dir
        // make this a config 
        let dirList = await fileHandler.readDir(
            fileHandler.changeDir("/Volumes/nzaklssf_group")
        );

        this.populateList("directoryList", dirList);
    }

    populateList(el: string, children: string[]) {
        children = children.map(i => `"${i}"`);
        this.app.doJS(`populateList(directoryList, [${children}]);`)
    }
}