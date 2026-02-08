const fs = require('fs');
const path = require('path');

// 讀取原始 HTML
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// 讀取每個年級的題庫檔案
function readGradeFile(grade) {
    const filePath = path.join(__dirname, 'questions', `grade${grade}.js`);
    let content = fs.readFileSync(filePath, 'utf8');
    // 移除 module.exports = 
    content = content.replace(/^module\.exports\s*=\s*/, '');
    // 移除結尾的分號
    content = content.replace(/;\s*$/, '');
    return content.trim();
}

// 建立完整的 questionBank
let questionBank = 'const questionBank = {\n';
for (let i = 1; i <= 6; i++) {
    const gradeData = readGradeFile(i);
    questionBank += `            ${i}: ${gradeData}`;
    if (i < 6) questionBank += ',';
    questionBank += '\n';
}
questionBank += '        };';

// 找到並替換題庫部分
const startMarker = '// ========== 題庫 ==========';
const endMarker = '// ========== 遊戲狀態 ==========';

const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
    const before = html.substring(0, startIdx + startMarker.length);
    const after = html.substring(endIdx);
    html = before + '\n        ' + questionBank + '\n\n        ' + after;
}

// 寫入
const outputPath = path.join(__dirname, 'index-full.html');
fs.writeFileSync(outputPath, html);

// 統計
const tagCount = (html.match(/tag:/g) || []).length;
const fileSize = (fs.statSync(outputPath).size / 1024).toFixed(1);

console.log('✅ 建置完成！');
console.log('📁 輸出檔案:', outputPath);
console.log('📊 題目數量:', tagCount);
console.log('💾 檔案大小:', fileSize, 'KB');
