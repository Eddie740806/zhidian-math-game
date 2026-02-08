// ========== Q版角色渲染器 (RO風格) ==========
// 特色：大頭、大眼、小身體、可愛比例

const CHIBI_CONFIG = {
    // 膚色
    skin: [
        { id: 1, name: '白皙', color: '#FFF0E6', shadow: '#FFE4D6' },
        { id: 2, name: '自然', color: '#FFE4C9', shadow: '#FFD4B3' },
        { id: 3, name: '健康', color: '#F5D0A9', shadow: '#E8C090' },
        { id: 4, name: '小麥', color: '#E8C090', shadow: '#D4A574' },
        { id: 5, name: '古銅', color: '#C9A074', shadow: '#B8905C' },
    ],
    
    // 髮型
    hair: [
        { id: 1, name: '短髮' },
        { id: 2, name: '中長髮' },
        { id: 3, name: '長髮' },
        { id: 4, name: '馬尾' },
        { id: 5, name: '雙馬尾' },
        { id: 6, name: '刺蝟頭' },
        { id: 7, name: '捲髮' },
        { id: 8, name: '鮑伯頭' },
    ],
    
    // 髮色
    hairColor: [
        { id: 1, name: '黑色', color: '#1a1a2e', highlight: '#3a3a4e' },
        { id: 2, name: '棕色', color: '#5D4037', highlight: '#795548' },
        { id: 3, name: '金色', color: '#FFD54F', highlight: '#FFEB3B' },
        { id: 4, name: '紅棕', color: '#C0392B', highlight: '#E74C3C' },
        { id: 5, name: '藍色', color: '#3498DB', highlight: '#5DADE2' },
        { id: 6, name: '粉色', color: '#FF69B4', highlight: '#FFB6C1' },
        { id: 7, name: '紫色', color: '#9B59B6', highlight: '#BB8FCE' },
        { id: 8, name: '綠色', color: '#27AE60', highlight: '#58D68D' },
    ],
    
    // 眼睛顏色
    eyeColor: [
        { id: 1, name: '黑色', color: '#1a1a2e', shine: '#4a4a6e' },
        { id: 2, name: '棕色', color: '#5D4037', shine: '#8D6E63' },
        { id: 3, name: '藍色', color: '#2196F3', shine: '#64B5F6' },
        { id: 4, name: '綠色', color: '#4CAF50', shine: '#81C784' },
        { id: 5, name: '紫色', color: '#9C27B0', shine: '#BA68C8' },
        { id: 6, name: '紅色', color: '#E91E63', shine: '#F48FB1' },
    ],
};

// Q版角色 SVG 渲染
function renderChibiAvatar(config) {
    const skin = CHIBI_CONFIG.skin.find(s => s.id === config.skin) || CHIBI_CONFIG.skin[0];
    const hairColorData = CHIBI_CONFIG.hairColor.find(h => h.id === config.hairColor) || CHIBI_CONFIG.hairColor[0];
    const eyeColorData = CHIBI_CONFIG.eyeColor.find(e => e.id === config.eyeColor) || CHIBI_CONFIG.eyeColor[0];
    const hairStyle = config.hair || 1;
    
    // 取得裝備 SVG
    const equipment = config.equipment || {};
    
    return `
    <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <!-- 陰影濾鏡 -->
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.2"/>
            </filter>
            <!-- 光澤效果 -->
            <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:white;stop-opacity:0.4"/>
                <stop offset="100%" style="stop-color:white;stop-opacity:0"/>
            </linearGradient>
        </defs>
        
        <!-- 身體 (小小的Q版身體) -->
        <g filter="url(#shadow)">
            <!-- 脖子 -->
            <ellipse cx="50" cy="85" rx="8" ry="5" fill="${skin.color}"/>
            
            <!-- 身體 -->
            <path d="M 35 88 Q 30 95 32 115 L 38 130 L 62 130 L 68 115 Q 70 95 65 88 Z" 
                  fill="${equipment.top ? '#4A90D9' : skin.color}" 
                  stroke="${equipment.top ? '#357ABD' : skin.shadow}" 
                  stroke-width="1"/>
            
            <!-- 手臂 -->
            <ellipse cx="28" cy="100" rx="6" ry="12" fill="${skin.color}" stroke="${skin.shadow}" stroke-width="0.5"/>
            <ellipse cx="72" cy="100" rx="6" ry="12" fill="${skin.color}" stroke="${skin.shadow}" stroke-width="0.5"/>
            
            <!-- 手 -->
            <circle cx="28" cy="115" r="5" fill="${skin.color}"/>
            <circle cx="72" cy="115" r="5" fill="${skin.color}"/>
            
            <!-- 腿 -->
            <rect x="40" y="128" width="8" height="10" rx="2" fill="${equipment.bottom ? '#5D4E37' : skin.color}"/>
            <rect x="52" y="128" width="8" height="10" rx="2" fill="${equipment.bottom ? '#5D4E37' : skin.color}"/>
            
            <!-- 腳 -->
            <ellipse cx="44" cy="139" rx="6" ry="3" fill="${equipment.shoes ? '#333' : skin.shadow}"/>
            <ellipse cx="56" cy="139" rx="6" ry="3" fill="${equipment.shoes ? '#333' : skin.shadow}"/>
        </g>
        
        <!-- 頭部 (大大的Q版頭) -->
        <g filter="url(#shadow)">
            <!-- 頭 -->
            <ellipse cx="50" cy="45" rx="35" ry="38" fill="${skin.color}"/>
            <ellipse cx="50" cy="48" rx="33" ry="35" fill="url(#shine)" opacity="0.3"/>
            
            <!-- 耳朵 -->
            <ellipse cx="18" cy="50" rx="5" ry="7" fill="${skin.color}" stroke="${skin.shadow}" stroke-width="0.5"/>
            <ellipse cx="82" cy="50" rx="5" ry="7" fill="${skin.color}" stroke="${skin.shadow}" stroke-width="0.5"/>
            
            <!-- 頭髮 (根據髮型) -->
            ${renderHair(hairStyle, hairColorData)}
            
            <!-- 眼睛 (大大的Q版眼睛) -->
            <g class="eyes">
                <!-- 左眼 -->
                <ellipse cx="35" cy="48" rx="10" ry="12" fill="white"/>
                <ellipse cx="36" cy="50" rx="7" ry="9" fill="${eyeColorData.color}"/>
                <ellipse cx="37" cy="48" rx="4" ry="5" fill="${eyeColorData.shine}"/>
                <circle cx="33" cy="45" r="3" fill="white" opacity="0.9"/>
                <circle cx="38" cy="52" r="1.5" fill="white" opacity="0.6"/>
                
                <!-- 右眼 -->
                <ellipse cx="65" cy="48" rx="10" ry="12" fill="white"/>
                <ellipse cx="64" cy="50" rx="7" ry="9" fill="${eyeColorData.color}"/>
                <ellipse cx="63" cy="48" rx="4" ry="5" fill="${eyeColorData.shine}"/>
                <circle cx="67" cy="45" r="3" fill="white" opacity="0.9"/>
                <circle cx="62" cy="52" r="1.5" fill="white" opacity="0.6"/>
            </g>
            
            <!-- 眉毛 -->
            <path d="M 28 35 Q 35 32 42 35" stroke="#4a3728" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <path d="M 58 35 Q 65 32 72 35" stroke="#4a3728" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            
            <!-- 鼻子 (小小的) -->
            <ellipse cx="50" cy="58" rx="2" ry="1" fill="${skin.shadow}" opacity="0.5"/>
            
            <!-- 嘴巴 -->
            ${renderMouth(config.mouth || 1, skin.shadow)}
            
            <!-- 腮紅 -->
            <ellipse cx="25" cy="60" rx="6" ry="4" fill="#FFB6C1" opacity="0.4"/>
            <ellipse cx="75" cy="60" rx="6" ry="4" fill="#FFB6C1" opacity="0.4"/>
        </g>
        
        <!-- 裝備層 -->
        ${renderEquipmentLayer(equipment)}
        
    </svg>
    `;
}

// 渲染頭髮
function renderHair(style, colorData) {
    const color = colorData.color;
    const highlight = colorData.highlight;
    
    const hairStyles = {
        // 短髮
        1: `
            <ellipse cx="50" cy="30" rx="38" ry="25" fill="${color}"/>
            <ellipse cx="50" cy="25" rx="30" ry="15" fill="${highlight}" opacity="0.3"/>
            <path d="M 20 40 Q 15 30 20 20 Q 30 10 50 8 Q 70 10 80 20 Q 85 30 80 40" fill="${color}"/>
        `,
        // 中長髮
        2: `
            <ellipse cx="50" cy="28" rx="40" ry="25" fill="${color}"/>
            <path d="M 15 35 Q 10 50 15 75 L 25 75 Q 20 50 25 40" fill="${color}"/>
            <path d="M 85 35 Q 90 50 85 75 L 75 75 Q 80 50 75 40" fill="${color}"/>
            <ellipse cx="50" cy="22" rx="30" ry="12" fill="${highlight}" opacity="0.3"/>
        `,
        // 長髮
        3: `
            <ellipse cx="50" cy="28" rx="40" ry="25" fill="${color}"/>
            <path d="M 12 35 Q 5 60 10 95 L 22 95 Q 18 60 22 40" fill="${color}"/>
            <path d="M 88 35 Q 95 60 90 95 L 78 95 Q 82 60 78 40" fill="${color}"/>
            <ellipse cx="50" cy="22" rx="30" ry="12" fill="${highlight}" opacity="0.3"/>
        `,
        // 馬尾
        4: `
            <ellipse cx="50" cy="28" rx="38" ry="24" fill="${color}"/>
            <ellipse cx="75" cy="20" rx="8" ry="6" fill="${color}"/>
            <path d="M 75 25 Q 90 40 85 80 Q 82 90 78 80 Q 80 50 70 30" fill="${color}"/>
            <circle cx="75" cy="22" r="4" fill="#FFD700"/>
            <ellipse cx="50" cy="22" rx="28" ry="12" fill="${highlight}" opacity="0.3"/>
        `,
        // 雙馬尾
        5: `
            <ellipse cx="50" cy="28" rx="38" ry="24" fill="${color}"/>
            <ellipse cx="20" cy="25" rx="6" ry="5" fill="${color}"/>
            <ellipse cx="80" cy="25" rx="6" ry="5" fill="${color}"/>
            <path d="M 20 30 Q 10 50 15 85 Q 18 90 22 85 Q 25 50 22 35" fill="${color}"/>
            <path d="M 80 30 Q 90 50 85 85 Q 82 90 78 85 Q 75 50 78 35" fill="${color}"/>
            <circle cx="20" cy="27" r="3" fill="#FF69B4"/>
            <circle cx="80" cy="27" r="3" fill="#FF69B4"/>
            <ellipse cx="50" cy="22" rx="28" ry="12" fill="${highlight}" opacity="0.3"/>
        `,
        // 刺蝟頭
        6: `
            <ellipse cx="50" cy="30" rx="36" ry="22" fill="${color}"/>
            <path d="M 30 15 L 35 5 L 40 18" fill="${color}"/>
            <path d="M 45 12 L 50 0 L 55 12" fill="${color}"/>
            <path d="M 60 15 L 65 5 L 70 18" fill="${color}"/>
            <path d="M 20 25 L 12 18 L 22 28" fill="${color}"/>
            <path d="M 80 25 L 88 18 L 78 28" fill="${color}"/>
            <ellipse cx="50" cy="25" rx="25" ry="10" fill="${highlight}" opacity="0.3"/>
        `,
        // 捲髮
        7: `
            <ellipse cx="50" cy="28" rx="40" ry="26" fill="${color}"/>
            <circle cx="18" cy="45" r="10" fill="${color}"/>
            <circle cx="82" cy="45" r="10" fill="${color}"/>
            <circle cx="15" cy="60" r="8" fill="${color}"/>
            <circle cx="85" cy="60" r="8" fill="${color}"/>
            <circle cx="20" cy="75" r="7" fill="${color}"/>
            <circle cx="80" cy="75" r="7" fill="${color}"/>
            <ellipse cx="50" cy="22" rx="28" ry="12" fill="${highlight}" opacity="0.3"/>
        `,
        // 鮑伯頭
        8: `
            <ellipse cx="50" cy="30" rx="40" ry="25" fill="${color}"/>
            <path d="M 12 40 Q 8 55 15 70 L 30 65 Q 20 50 22 42" fill="${color}"/>
            <path d="M 88 40 Q 92 55 85 70 L 70 65 Q 80 50 78 42" fill="${color}"/>
            <ellipse cx="50" cy="24" rx="32" ry="14" fill="${highlight}" opacity="0.3"/>
        `,
    };
    
    return hairStyles[style] || hairStyles[1];
}

// 渲染嘴巴
function renderMouth(style, shadowColor) {
    const mouths = {
        // 微笑
        1: `<path d="M 42 68 Q 50 74 58 68" stroke="#E57373" stroke-width="2" fill="none" stroke-linecap="round"/>`,
        // 大笑
        2: `<path d="M 40 66 Q 50 78 60 66" stroke="#E57373" stroke-width="2" fill="#FFF" stroke-linecap="round"/>
            <path d="M 42 70 Q 50 74 58 70" fill="#E57373"/>`,
        // 驚訝
        3: `<ellipse cx="50" cy="70" rx="5" ry="7" fill="#E57373"/>`,
        // 貓嘴
        4: `<path d="M 44 68 L 50 72 L 56 68" stroke="#E57373" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    };
    
    return mouths[style] || mouths[1];
}

// 渲染裝備層
function renderEquipmentLayer(equipment) {
    let svg = '';
    
    // 頭飾
    if (equipment.headwear) {
        const headwearSVG = {
            'hw1': `<path d="M 25 15 L 75 15 L 70 5 L 50 0 L 30 5 Z" fill="#4A90D9"/>`, // 學生帽
            'hw2': `<path d="M 30 12 L 50 -5 L 70 12 L 65 12 L 50 0 L 35 12 Z" fill="#FFD700"/>
                    <circle cx="40" cy="8" r="3" fill="#FF6B6B"/>
                    <circle cx="50" cy="3" r="3" fill="#4ECDC4"/>
                    <circle cx="60" cy="8" r="3" fill="#FF6B6B"/>`, // 皇冠
            'hw3': `<ellipse cx="30" cy="5" rx="8" ry="15" fill="#FFB6C1"/>
                    <ellipse cx="70" cy="5" rx="8" ry="15" fill="#FFB6C1"/>
                    <ellipse cx="30" cy="5" rx="5" ry="10" fill="#FFC0CB"/>
                    <ellipse cx="70" cy="5" rx="5" ry="10" fill="#FFC0CB"/>`, // 兔耳朵
            'hw4': `<ellipse cx="50" cy="8" rx="30" ry="8" fill="#9B59B6"/>
                    <ellipse cx="50" cy="5" rx="25" ry="5" fill="#8E44AD"/>
                    <text x="50" y="10" text-anchor="middle" font-size="8" fill="#FFD700">★</text>`, // 魔法帽
            'hw5': `<path d="M 35 15 Q 30 5 35 -5 L 50 -15 L 65 -5 Q 70 5 65 15" fill="#2C3E50"/>
                    <ellipse cx="50" cy="15" rx="20" ry="5" fill="#34495E"/>`, // 魔法師帽
        };
        svg += headwearSVG[equipment.headwear] || '';
    }
    
    // 武器
    if (equipment.weapon) {
        const weaponSVG = {
            'wp1': `<rect x="78" y="95" width="4" height="30" fill="#8B4513"/>
                    <polygon points="80,95 75,85 85,85" fill="#C0C0C0"/>`, // 木劍
            'wp2': `<rect x="78" y="90" width="3" height="35" fill="#8B4513"/>
                    <circle cx="80" cy="88" r="6" fill="#9B59B6"/>
                    <circle cx="80" cy="88" r="3" fill="#E74C3C"/>`, // 魔法杖
            'wp3': `<path d="M 75 90 L 85 95 L 85 120 L 80 125 L 75 120 Z" fill="#8B4513"/>
                    <path d="M 85 95 L 95 85 L 92 82 L 82 92" fill="#C0C0C0"/>`, // 弓
            'wp4': `<rect x="80" y="85" width="6" height="25" fill="#5D4037"/>
                    <rect x="75" y="80" width="16" height="10" rx="2" fill="#757575"/>`, // 錘子
            'wp5': `<rect x="80" y="85" width="3" height="35" fill="#FFD700"/>
                    <polygon points="82,85 72,70 92,70" fill="#E74C3C"/>
                    <polygon points="82,75 77,70 87,70" fill="#FFD700"/>`, // 傳說之劍
        };
        svg += weaponSVG[equipment.weapon] || '';
    }
    
    // 配件
    if (equipment.accessory) {
        const accessorySVG = {
            'ac1': `<rect x="30" y="45" width="12" height="8" rx="1" fill="none" stroke="#333" stroke-width="1.5"/>
                    <rect x="58" y="45" width="12" height="8" rx="1" fill="none" stroke="#333" stroke-width="1.5"/>
                    <path d="M 42 49 L 58 49" stroke="#333" stroke-width="1.5"/>`, // 眼鏡
            'ac2': `<circle cx="50" cy="80" r="4" fill="#FFD700"/>
                    <path d="M 40 78 Q 50 82 60 78" stroke="#FFD700" stroke-width="1" fill="none"/>`, // 項鍊
            'ac3': `<rect x="18" y="108" width="10" height="8" rx="2" fill="#333"/>
                    <rect x="20" y="110" width="6" height="4" fill="#4A90D9"/>`, // 手錶
            'ac4': `<circle cx="28" cy="118" r="4" fill="#FFD700"/>
                    <circle cx="28" cy="118" r="2" fill="#E74C3C"/>`, // 戒指
            'ac5': `<path d="M 15 85 Q 5 70 15 55 Q 25 70 15 85" fill="#87CEEB" opacity="0.7"/>
                    <path d="M 85 85 Q 95 70 85 55 Q 75 70 85 85" fill="#87CEEB" opacity="0.7"/>
                    <path d="M 12 80 Q 2 65 12 50" stroke="#B0E0E6" stroke-width="1" fill="none"/>
                    <path d="M 88 80 Q 98 65 88 50" stroke="#B0E0E6" stroke-width="1" fill="none"/>`, // 翅膀
        };
        svg += accessorySVG[equipment.accessory] || '';
    }
    
    return svg;
}
