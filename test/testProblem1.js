const problem1 = require('../problem1');
const path = require('path');

const  dirPath = path.join(__dirname, '../', 'randomJsonDirectory');
//const dirPath = path.join(__dirname, '/JSON_DATA_DIRECTORY');

problem1(dirPath);

