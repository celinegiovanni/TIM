import * as fs from "fs";
import * as path from "path"
import * as url from "url";
const SMB2 = require('smb2');


interface StringMap<T> {
    [x: string]: T;
}

export class FileHandler {
    root: string;
    cache: StringMap<any> = {};

    constructor() {
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

    getPath(fname: string) : string {
        console.log(path.join(this.root, fname));
        return path.join(this.root, fname);
    }

    getURL(fname: string, protocol: string, slashes: boolean) {
        return url.format({
            pathname: path.join(this.root, fname),
            protocol: "file",
            slashes: true
        })
    }

    openFile(fname: string, format: string) : any {
        switch(format) {
            case "json" : {
                return this.openJSON(fname);
            }
            
            default : {
                return null;
            }
        }
    }

    openJSON(fname: string) : any {
        const p = this.getPath(fname);
        
        if (!fs.existsSync(p)) {
            console.error("file %s does not exist", p);
            return null;
        }

        let rawData = fs.readFileSync(p, 'utf8');
        let data = this.cache[fname] = JSON.parse(rawData);
        return data;
    }

    changeDir(pathString: string) : string {
        process.chdir(pathString);
        return process.cwd();
    }

    readDir(pathString: string) : Promise<string[]> {
        return new Promise((resolve, reject) => {
            fs.readdir(pathString, (err, items) => {
                if (err) {
                    console.error(err);
                    reject([]);
                }

                resolve(items);
            })
        })
    }
}

