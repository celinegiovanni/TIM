"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Display {
    constructor(app) {
        this.app = app;
        this.populateProjects();
    }
    populateProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            const fileHandler = this.app.fileHandler;
            // change to server group dir
            // make this a config 
            let dirList = yield fileHandler.readDir(fileHandler.changeDir("/Volumes/nzaklssf_group"));
            this.populateList("directoryList", dirList);
        });
    }
    populateList(el, children) {
        children = children.map(i => `"${i}"`);
        this.app.doJS(`populateList(directoryList, [${children}]);`);
    }
}
exports.Display = Display;
//# sourceMappingURL=display.js.map