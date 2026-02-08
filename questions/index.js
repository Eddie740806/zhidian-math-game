// 題庫索引 - 載入所有年級題目
const grade1 = require('./grade1.js');
const grade2 = require('./grade2.js');
const grade3 = require('./grade3.js');
const grade4 = require('./grade4.js');
const grade5 = require('./grade5.js');
const grade6 = require('./grade6.js');

module.exports = {
    1: grade1,
    2: grade2,
    3: grade3,
    4: grade4,
    5: grade5,
    6: grade6
};
