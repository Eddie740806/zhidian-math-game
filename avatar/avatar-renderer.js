/**
 * 🎨 數學遊戲紙娃娃渲染器
 * 將設定檔轉換為 SVG 圖像
 */

// 膚色配置
const SKIN_COLORS = {
  1: { main: '#FFE4C4', shadow: '#E8C9A8' },
  2: { main: '#F5D5B8', shadow: '#D9B89A' },
  3: { main: '#DEB887', shadow: '#C49A6C' },
  4: { main: '#C68642', shadow: '#A66B2F' },
  5: { main: '#8D5524', shadow: '#6B3D1A' }
};

// 髮色配置
const HAIR_COLORS = {
  1: { main: '#2C1810', highlight: '#4A2C20' },  // 黑色
  2: { main: '#4A3728', highlight: '#6B5344' },  // 深棕
  3: { main: '#8B4513', highlight: '#A0522D' },  // 棕色
  4: { main: '#DAA520', highlight: '#FFD700' },  // 金色
  5: { main: '#CD853F', highlight: '#DEB887' },  // 淺棕
  6: { main: '#FF6B6B', highlight: '#FF8E8E' }   // 粉紅
};

// 髮型 SVG 生成器
const HAIRSTYLES = {
  1: (color) => `<!-- 短髮 -->
    <ellipse cx="100" cy="45" rx="48" ry="35" fill="${color.main}"/>
    <ellipse cx="100" cy="50" rx="42" ry="25" fill="${color.highlight}" opacity="0.3"/>
    <path d="M55 55 Q60 30 100 25 Q140 30 145 55" fill="${color.main}"/>`,
  
  2: (color) => `<!-- 中長髮 -->
    <ellipse cx="100" cy="45" rx="50" ry="38" fill="${color.main}"/>
    <path d="M52 55 Q55 25 100 20 Q145 25 148 55" fill="${color.main}"/>
    <path d="M55 60 Q50 90 55 120" stroke="${color.main}" stroke-width="15" fill="none" stroke-linecap="round"/>
    <path d="M145 60 Q150 90 145 120" stroke="${color.main}" stroke-width="15" fill="none" stroke-linecap="round"/>
    <ellipse cx="75" cy="40" rx="15" ry="8" fill="${color.highlight}" opacity="0.4"/>`,
  
  3: (color) => `<!-- 長髮 -->
    <ellipse cx="100" cy="45" rx="52" ry="40" fill="${color.main}"/>
    <path d="M50 55 Q52 25 100 18 Q148 25 150 55" fill="${color.main}"/>
    <path d="M52 60 Q45 120 50 180" stroke="${color.main}" stroke-width="18" fill="none" stroke-linecap="round"/>
    <path d="M148 60 Q155 120 150 180" stroke="${color.main}" stroke-width="18" fill="none" stroke-linecap="round"/>
    <path d="M60 65 Q55 120 58 170" stroke="${color.highlight}" stroke-width="5" fill="none" opacity="0.4"/>
    <path d="M140 65 Q145 120 142 170" stroke="${color.highlight}" stroke-width="5" fill="none" opacity="0.4"/>`,
  
  4: (color) => `<!-- 馬尾 -->
    <ellipse cx="100" cy="45" rx="48" ry="35" fill="${color.main}"/>
    <path d="M55 55 Q60 28 100 22 Q140 28 145 55" fill="${color.main}"/>
    <ellipse cx="130" cy="35" rx="8" ry="6" fill="#FF6B6B"/>
    <path d="M135 35 Q155 45 150 100 Q148 130 155 160" stroke="${color.main}" stroke-width="14" fill="none" stroke-linecap="round"/>
    <path d="M138 40 Q152 50 148 95" stroke="${color.highlight}" stroke-width="4" fill="none" opacity="0.5"/>`,
  
  5: (color) => `<!-- 雙馬尾 -->
    <ellipse cx="100" cy="45" rx="48" ry="35" fill="${color.main}"/>
    <path d="M55 55 Q60 28 100 22 Q140 28 145 55" fill="${color.main}"/>
    <ellipse cx="65" cy="50" rx="6" ry="5" fill="#FF6B6B"/>
    <ellipse cx="135" cy="50" rx="6" ry="5" fill="#FF6B6B"/>
    <path d="M60 55 Q40 80 45 140 Q48 160 40 180" stroke="${color.main}" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M140 55 Q160 80 155 140 Q152 160 160 180" stroke="${color.main}" stroke-width="12" fill="none" stroke-linecap="round"/>`,
  
  6: (color) => `<!-- 刺蝟頭 -->
    <ellipse cx="100" cy="50" rx="45" ry="32" fill="${color.main}"/>
    <path d="M60 45 L55 20 L70 40 L65 15 L80 38 L85 10 L95 40 L100 8 L105 40 L115 10 L120 38 L135 15 L130 40 L145 20 L140 45" fill="${color.main}"/>
    <ellipse cx="100" cy="52" rx="35" ry="20" fill="${color.highlight}" opacity="0.3"/>`,
  
  7: (color) => `<!-- 捲髮 -->
    <ellipse cx="100" cy="48" rx="52" ry="40" fill="${color.main}"/>
    <circle cx="58" cy="55" r="12" fill="${color.main}"/>
    <circle cx="142" cy="55" r="12" fill="${color.main}"/>
    <circle cx="52" cy="75" r="10" fill="${color.main}"/>
    <circle cx="148" cy="75" r="10" fill="${color.main}"/>
    <circle cx="55" cy="95" r="11" fill="${color.main}"/>
    <circle cx="145" cy="95" r="11" fill="${color.main}"/>
    <circle cx="70" cy="30" r="8" fill="${color.main}"/>
    <circle cx="100" cy="25" r="9" fill="${color.main}"/>
    <circle cx="130" cy="30" r="8" fill="${color.main}"/>
    <ellipse cx="100" cy="45" rx="40" ry="25" fill="${color.highlight}" opacity="0.3"/>`,
  
  8: (color) => `<!-- 鮑伯頭 -->
    <path d="M50 50 Q48 30 100 22 Q152 30 150 50 L152 95 Q150 105 140 105 L60 105 Q50 105 48 95 Z" fill="${color.main}"/>
    <path d="M55 50 Q55 35 100 28 Q145 35 145 50" fill="${color.highlight}" opacity="0.3"/>
    <path d="M50 60 L48 90 Q50 100 58 100" stroke="${color.main}" stroke-width="3" fill="none"/>
    <path d="M150 60 L152 90 Q150 100 142 100" stroke="${color.main}" stroke-width="3" fill="none"/>`
};

// 眼睛 SVG
const EYES = {
  1: (skin) => `<!-- 圓眼 -->
    <ellipse cx="82" cy="78" rx="10" ry="11" fill="white"/>
    <ellipse cx="118" cy="78" rx="10" ry="11" fill="white"/>
    <circle cx="84" cy="79" r="6" fill="#2C1810"/>
    <circle cx="120" cy="79" r="6" fill="#2C1810"/>
    <circle cx="86" cy="77" r="2" fill="white"/>
    <circle cx="122" cy="77" r="2" fill="white"/>`,
  
  2: (skin) => `<!-- 橢圓眼 -->
    <ellipse cx="82" cy="78" rx="12" ry="8" fill="white"/>
    <ellipse cx="118" cy="78" rx="12" ry="8" fill="white"/>
    <ellipse cx="84" cy="78" rx="5" ry="6" fill="#4A3728"/>
    <ellipse cx="120" cy="78" rx="5" ry="6" fill="#4A3728"/>
    <ellipse cx="86" cy="76" rx="2" ry="2" fill="white"/>
    <ellipse cx="122" cy="76" rx="2" ry="2" fill="white"/>`,
  
  3: (skin) => `<!-- 開心眼 -->
    <path d="M72 78 Q82 68 92 78" stroke="#2C1810" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M108 78 Q118 68 128 78" stroke="#2C1810" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  
  4: (skin) => `<!-- 星星眼 -->
    <ellipse cx="82" cy="78" rx="12" ry="11" fill="white"/>
    <ellipse cx="118" cy="78" rx="12" ry="11" fill="white"/>
    <path d="M82 70 L84 76 L90 76 L85 80 L87 86 L82 82 L77 86 L79 80 L74 76 L80 76 Z" fill="#FFD700"/>
    <path d="M118 70 L120 76 L126 76 L121 80 L123 86 L118 82 L113 86 L115 80 L110 76 L116 76 Z" fill="#FFD700"/>`
};

// 嘴巴 SVG
const MOUTHS = {
  1: () => `<!-- 微笑 -->
    <path d="M90 98 Q100 108 110 98" stroke="#D32F2F" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  
  2: () => `<!-- 大笑 -->
    <path d="M85 95 Q100 115 115 95" fill="#D32F2F"/>
    <path d="M88 95 Q100 102 112 95" fill="white"/>`,
  
  3: () => `<!-- 驚訝 O嘴 -->
    <ellipse cx="100" cy="100" rx="8" ry="10" fill="#D32F2F"/>
    <ellipse cx="100" cy="99" rx="5" ry="6" fill="#7B1F1F"/>`,
  
  4: () => `<!-- 貓嘴 :3 -->
    <path d="M88 98 Q95 95 100 100 Q105 95 112 98" stroke="#D32F2F" stroke-width="3" fill="none" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="100" y2="105" stroke="#D32F2F" stroke-width="2"/>`
};

// 基礎身體 SVG
function renderBody(skin) {
  const colors = SKIN_COLORS[skin] || SKIN_COLORS[1];
  return `
    <!-- 身體 -->
    <ellipse cx="100" cy="160" rx="40" ry="50" fill="${colors.main}"/>
    
    <!-- 脖子 -->
    <rect x="88" y="95" width="24" height="20" fill="${colors.main}"/>
    
    <!-- 頭 -->
    <ellipse cx="100" cy="70" rx="42" ry="38" fill="${colors.main}"/>
    <ellipse cx="100" cy="75" rx="38" ry="30" fill="${colors.shadow}" opacity="0.15"/>
    
    <!-- 耳朵 -->
    <ellipse cx="58" cy="72" rx="8" ry="10" fill="${colors.main}"/>
    <ellipse cx="58" cy="72" rx="4" ry="6" fill="${colors.shadow}" opacity="0.3"/>
    <ellipse cx="142" cy="72" rx="8" ry="10" fill="${colors.main}"/>
    <ellipse cx="142" cy="72" rx="4" ry="6" fill="${colors.shadow}" opacity="0.3"/>
    
    <!-- 腮紅 -->
    <ellipse cx="68" cy="88" rx="8" ry="5" fill="#FFB6C1" opacity="0.6"/>
    <ellipse cx="132" cy="88" rx="8" ry="5" fill="#FFB6C1" opacity="0.6"/>
    
    <!-- 手臂 -->
    <ellipse cx="55" cy="150" rx="12" ry="25" fill="${colors.main}" transform="rotate(-15 55 150)"/>
    <ellipse cx="145" cy="150" rx="12" ry="25" fill="${colors.main}" transform="rotate(15 145 150)"/>
    
    <!-- 手 -->
    <circle cx="48" cy="172" r="10" fill="${colors.main}"/>
    <circle cx="152" cy="172" r="10" fill="${colors.main}"/>
    
    <!-- 腿 -->
    <ellipse cx="80" cy="220" rx="15" ry="35" fill="${colors.main}"/>
    <ellipse cx="120" cy="220" rx="15" ry="35" fill="${colors.main}"/>
  `;
}

// 默認服裝（沒穿裝備時）
function renderDefaultClothes() {
  return `
    <!-- 默認T恤 -->
    <path d="M62 105 L58 175 L142 175 L138 105 Q100 115 62 105" fill="#64B5F6" stroke="#42A5F5" stroke-width="2"/>
    <path d="M55 108 L45 135 L58 140 L62 115 Z" fill="#64B5F6" stroke="#42A5F5" stroke-width="2"/>
    <path d="M145 108 L155 135 L142 140 L138 115 Z" fill="#64B5F6" stroke="#42A5F5" stroke-width="2"/>
    
    <!-- 默認短褲 -->
    <path d="M68 170 L65 220 L98 222 L100 175 L102 222 L135 220 L132 170 Z" fill="#424242" stroke="#333" stroke-width="2"/>
  `;
}

/**
 * 渲染紙娃娃
 * @param {Object} config - 設定
 * @param {number} config.skin - 膚色 (1-5)
 * @param {number} config.hair - 髮型 (1-8)
 * @param {number} config.hairColor - 髮色 (1-6)
 * @param {number} config.eyes - 眼睛 (1-4)
 * @param {number} config.mouth - 嘴巴 (1-4)
 * @param {Object} config.equipment - 裝備 { headwear, top, bottom, shoes, accessory }
 * @param {Object} options - 選項
 * @param {number} options.width - 寬度
 * @param {number} options.height - 高度
 * @param {boolean} options.animated - 是否加動畫
 * @returns {string} SVG 字串
 */
function renderAvatar(config = {}, options = {}) {
  const {
    skin = 1,
    hair = 1,
    hairColor = 1,
    eyes = 1,
    mouth = 1,
    equipment = {}
  } = config;
  
  const {
    width = 200,
    height = 280,
    animated = false
  } = options;
  
  const hairColors = HAIR_COLORS[hairColor] || HAIR_COLORS[1];
  const skinColors = SKIN_COLORS[skin] || SKIN_COLORS[1];
  
  // 獲取裝備 SVG（需要引入 equipment.js）
  let equipmentSvg = {
    headwear: '',
    top: '',
    bottom: '',
    shoes: '',
    accessory: ''
  };
  
  // 如果有 EQUIPMENT 全局變量（瀏覽器環境）
  if (typeof EQUIPMENT !== 'undefined') {
    for (const [category, id] of Object.entries(equipment)) {
      if (id && EQUIPMENT[category]) {
        const item = EQUIPMENT[category].find(e => e.id === id);
        if (item) {
          equipmentSvg[category] = item.svg;
        }
      }
    }
  }
  
  // 檢查是否有衣服，沒有就穿默認
  const hasClothes = equipment.top || equipment.bottom;
  
  // 動畫樣式
  const animationStyle = animated ? `
    <style>
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      .avatar-body { animation: float 2s ease-in-out infinite; }
    </style>
  ` : '';
  
  // 組裝 SVG
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 280" width="${width}" height="${height}">
  ${animationStyle}
  <g class="avatar-body">
    <!-- 配件：翅膀/披風（在身體後面）-->
    ${equipmentSvg.accessory && (equipment.accessory === 'acc3' || equipment.accessory === 'acc4') ? equipmentSvg.accessory : ''}
    
    <!-- 後層頭髮 -->
    ${HAIRSTYLES[hair] ? HAIRSTYLES[hair](hairColors) : HAIRSTYLES[1](hairColors)}
    
    <!-- 身體 -->
    ${renderBody(skin)}
    
    <!-- 服裝 -->
    ${hasClothes ? '' : renderDefaultClothes()}
    ${equipmentSvg.bottom}
    ${equipmentSvg.top}
    ${equipmentSvg.shoes}
    
    <!-- 前層頭髮（瀏海）-->
    <path d="M58 55 Q65 45 100 42 Q135 45 142 55 L140 65 Q100 55 60 65 Z" fill="${hairColors.main}"/>
    
    <!-- 眼睛 -->
    ${EYES[eyes] ? EYES[eyes](skinColors) : EYES[1](skinColors)}
    
    <!-- 嘴巴 -->
    ${MOUTHS[mouth] ? MOUTHS[mouth]() : MOUTHS[1]()}
    
    <!-- 眉毛 -->
    <path d="M72 65 Q82 62 92 65" stroke="${hairColors.main}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M108 65 Q118 62 128 65" stroke="${hairColors.main}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    
    <!-- 頭飾 -->
    ${equipmentSvg.headwear}
    
    <!-- 配件：眼鏡/蝴蝶結/魔法杖（在最前面）-->
    ${equipmentSvg.accessory && (equipment.accessory !== 'acc3' && equipment.accessory !== 'acc4') ? equipmentSvg.accessory : ''}
  </g>
</svg>`.trim();
  
  return svg;
}

/**
 * 渲染到 DOM 元素
 * @param {HTMLElement} container - 容器元素
 * @param {Object} config - 紙娃娃設定
 * @param {Object} options - 渲染選項
 */
function renderAvatarToElement(container, config, options = {}) {
  if (!container) return;
  container.innerHTML = renderAvatar(config, options);
}

/**
 * 生成隨機紙娃娃配置
 * @returns {Object} 隨機配置
 */
function randomAvatarConfig() {
  return {
    skin: Math.floor(Math.random() * 5) + 1,
    hair: Math.floor(Math.random() * 8) + 1,
    hairColor: Math.floor(Math.random() * 6) + 1,
    eyes: Math.floor(Math.random() * 4) + 1,
    mouth: Math.floor(Math.random() * 4) + 1,
    equipment: {}
  };
}

/**
 * 獲取可用選項
 * @returns {Object} 所有可用選項
 */
function getAvatarOptions() {
  return {
    skin: { min: 1, max: 5, names: ['淺膚色', '自然膚色', '小麥色', '健康膚色', '深膚色'] },
    hair: { min: 1, max: 8, names: ['短髮', '中長髮', '長髮', '馬尾', '雙馬尾', '刺蝟頭', '捲髮', '鮑伯頭'] },
    hairColor: { min: 1, max: 6, names: ['黑色', '深棕', '棕色', '金色', '淺棕', '粉紅'] },
    eyes: { min: 1, max: 4, names: ['圓眼', '橢圓眼', '開心眼', '星星眼'] },
    mouth: { min: 1, max: 4, names: ['微笑', '大笑', '驚訝', '貓嘴'] }
  };
}

// 導出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    renderAvatar, 
    renderAvatarToElement, 
    randomAvatarConfig, 
    getAvatarOptions,
    SKIN_COLORS,
    HAIR_COLORS
  };
}
