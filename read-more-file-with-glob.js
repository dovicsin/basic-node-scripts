const glob = require('glob');
const fs = require('fs');

const textFiles = glob.sync('./texts/*.txt');
const filesContent = textFiles.map(file => fs.readFileSync(file, 'utf8'));

console.log(filesContent);
