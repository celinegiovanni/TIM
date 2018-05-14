"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const url = require("url");
const SMB2 = require('smb2');
class FileHandler {
    constructor() {
        this.cache = {};
        this.root = path.join(__dirname, "../");
        // const server = "cifs://nzaklpfsssf0001.global.publicisgroupe.net/nzaklssf_group"
        // fs.readdir(server, function(err, items) {
        //     console.log(err);
        //     console.log(items);
        // })
        // let smb2 = new SMB2({
        //     share: "nzaklpfsssf0001.global.publicisgroupe.net",
        //     domain: "",
        //     username: "CELGIOVA",
        //     password: "Welcome123!"
        // })
        // smb2.readdir('Volumes', function(err, files){
        //     if(err) throw err;
        //     console.log(files);
        // });
        // this.fileReader = new FileReader();
    }
    getPath(fname) {
        console.log(path.join(this.root, fname));
        return path.join(this.root, fname);
    }
    getURL(fname, protocol, slashes) {
        return url.format({
            pathname: path.join(this.root, fname),
            protocol: "file",
            slashes: true
        });
    }
    openFile(fname, format) {
        switch (format) {
            case "json": {
                return this.openJSON(fname);
            }
            default: {
                return null;
            }
        }
    }
    openJSON(fname) {
        const p = this.getPath(fname);
        if (!fs.existsSync(p)) {
            console.error("file %s does not exist", p);
            return null;
        }
        let rawData = fs.readFileSync(p, 'utf8');
        let data = this.cache[fname] = JSON.parse(rawData);
        return data;
    }
    changeDir(pathString) {
        process.chdir(pathString);
        return process.cwd();
    }
    readDir(pathString) {
        return new Promise((resolve, reject) => {
            fs.readdir(pathString, (err, items) => {
                if (err) {
                    console.error(err);
                    reject([]);
                }
                resolve(items);
            });
        });
    }
}
exports.FileHandler = FileHandler;
//# sourceMappingURL=file-handler.js.map