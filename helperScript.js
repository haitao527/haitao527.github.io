"use strict";

const fs = require('fs');
const path = require('path');

const tech_design_data = require('./data_source/tech_design.json');
const tech_fe_data = require('./data_source/tech_fe.json');
const tech_fullStack_data = require('./data_source/tech_fullStack.json');
const tech_new_data = require('./data_source/tech_new.json');

const rewriteJSONstructure = (dirPath) => {
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

const sortTechArticle = () => {
    const allData = [...tech_design_data.data.articleList, ...tech_fe_data.data.articleList, ...tech_fullStack_data.data.articleList, ...tech_new_data.data.articleList]
    const allSortedData = allData.sort((pre, next) => {
        const [pre_year, pre_month, pre_day] = pre.date.split('-');
        const [next_year, next_month, next_day] = next.date.split('-');
        const preTimeStamp = new Date(pre_year, pre_month, pre_day).getTime();
        const nextTimeStamp = new Date(next_year, next_month, next_day).getTime();

        return preTimeStamp - nextTimeStamp
    });
    fs.writeFile('./data_source/tech_all.json', JSON.stringify({
        code: 0,
        data: { articleList: allSortedData }
    }, null, 2), (err) => {
        if (err) throw err;
        console.log("wirte tech article success");
    })
}

sortTechArticle();