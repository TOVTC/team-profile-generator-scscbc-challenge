const fs = require("fs");

const writeFile = pageHTML => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", pageHTML, err => {
            if (err) {
                reject(err);
                return;
            } else {
                resolve({
                    ok: true,
                    message: "File created!"
                });
            }
        });
    });
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/assets/css/style.css", err => {
            if (err) {
                reject(err);
                return;
            } else {
                resolve({
                    ok: true,
                    message: "File copied!"
                });
            }
        });
    });
}

module.exports = {writeFile, copyFile};