const fs = require('fs');
const path = require('path');

// 讀取所有題庫
const grades = {};
for (let i = 1; i <= 6; i++) {
    const filePath = path.join(__dirname, 'questions', `grade${i}.js`);
    const content = fs.readFileSync(filePath, 'utf8');
    // 提取 module.exports 的內容
    const match = content.match(/module\.exports\s*=\s*(\{[\s\S]*\});?\s*$/);
    if (match) {
        grades[i] = match[1];
    }
}

// 讀取 HTML 模板
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// 建立新的 questionBank
const questionBankCode = `const questionBank = {
    1: ${grades[1]},
    2: ${grades[2]},
    3: ${grades[3]},
    4: ${grades[4]},
    5: ${grades[5]},
    6: ${grades[6]}
};`;

// 替換原有的 questionBank（找到 // ========== 題庫 ========== 到下一個 // ========== 之間的內容）
const startMarker = '// ========== 題庫 ==========';
const endMarker = '// ========== 遊戲狀態 ==========';

const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
    html = html.substring(0, startIdx) + 
           '// ========== 題庫 ==========\n        ' + 
           questionBankCode + '\n\n        ' +
           html.substring(endIdx);
}

// 寫入新檔案
const outputPath = path.join(__dirname, 'index-full.html');
fs.writeFileSync(outputPath, html);

console.log('建置完成！');
console.log('輸出檔案:', outputPath);
console.log('檔案大小:', (fs.statSync(outputPath).size / 1024).toFixed(1), 'KB');
