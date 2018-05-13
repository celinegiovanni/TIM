import { App } from "./main";

export class Display {
    app: App;

    constructor(app: App){
        this.app = app;
        this.populateProjects();
    }

    populateProjects(){
        this.app.openFile("json/jobs.json", "json");
    }
}