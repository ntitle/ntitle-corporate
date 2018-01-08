const fs = require('fs');
const path = require('path');
var rimraf = require('rimraf');

const buildPath = path.join(process.cwd(), 'dist');

module.exports = () => {
    if (!fs.existsSync(buildPath)) return;

    return new Promise((res, rej) => {
        rimraf(buildPath, err => {
            if (err) throw err;

            res();
        });
    })


};