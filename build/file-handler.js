"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var url = require("url");
var FileHandler = /** @class */ (function () {
    function FileHandler() {
        this.cache = {};
        this.root = path.join(__dirname, "../");
    }
    FileHandler.prototype.getPath = function (fname) {
        console.log(path.join(this.root, fname));
        return path.join(this.root, fname);
    };
    FileHandler.prototype.getURL = function (fname, protocol, slashes) {
        return url.format({
            pathname: path.join(this.root, fname),
            protocol: "file",
            slashes: true
        });
    };
    FileHandler.prototype.openFile = function (fname, format) {
        switch (format) {
            case "json": {
                return this.openJSON(fname);
            }
            default: {
                return null;
            }
        }
    };
    FileHandler.prototype.openJSON = function (fname) {
        var p = this.getPath(fname);
        if (!fs.existsSync(p)) {
            console.error("file %s does not exist", p);
            return null;
        }
        var rawData = fs.readFileSync(p, 'utf8');
        var data = this.cache[fname] = JSON.parse(rawData);
        return data;
    };
    return FileHandler;
}());
exports.FileHandler = FileHandler;
//# sourceMappingURL=file-handler.js.map