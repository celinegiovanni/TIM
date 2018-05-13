"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Display = /** @class */ (function () {
    function Display(app) {
        this.app = app;
        this.populateProjects();
    }
    Display.prototype.populateProjects = function () {
        this.app.openFile("json/jobs.json", "json");
    };
    return Display;
}());
exports.Display = Display;
//# sourceMappingURL=display.js.map