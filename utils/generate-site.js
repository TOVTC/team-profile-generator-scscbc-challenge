const fs = require("fs");

// write a new HTML file to dist using returned page HTML
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

// copy the custom CSS file to the dist/assets/css directory
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