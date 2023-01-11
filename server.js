"use strict";

var fs = require('fs');
var path = require('path');


const main = (dirPath) => {
    fs.readdir(dirPath, function(err, files) {
        if (err) {
            console.log('Error', err);
        } else {
            files.forEach((file) => {
                fs.readFile(path.join(dirPath, file), (err, data) => {
                    if (err) throw err;
                    const jsonData = JSON.parse(data);
                    const transferData = {
                        code: 0,
                        data: {
                            articleList: jsonData.articleList
                        }
                    }
                    fs.writeFile(path.join(dirPath, file), JSON.stringify(transferData, null, 2), (err) => {
                        if (err) throw err;
                        console.log("Data written to file");
                    });
                });
            })
        }
    });

}

main('./data_source/');