/**
 * 🎮 數學遊戲紙娃娃裝備系統
 * 可愛卡通風格，每件裝備都有價格和能力加成
 */

const EQUIPMENT = {
  // ===== 頭飾 (5件) =====
  headwear: [
    {
      id: 'hw1',
      name: '學生帽',
      desc: '認真學習的象徵！',
      price: 100,
      power: 10,
      rarity: 'common',
      svg: `<g class="headwear hw1">
        <ellipse cx="100" cy="35" rx="45" ry="15" fill="#1E3A5F"/>
        <rect x="55" y="20" width="90" height="20" rx="3" fill="#2C5282"/>
        <rect x="70" y="15" width="60" height="10" rx="2" fill="#2C5282"/>
        <circle cx="100" cy="12" r="6" fill="#FFD700"/>
      </g>`
    },
    {
      id: 'hw2',
      name: '皇冠',
      desc: '數學王者的榮耀！',
      price: 500,
      power: 50,
      rarity: 'rare',
      svg: `<g class="headwear hw2">
        <path d="M60 45 L70 15 L85 35 L100 10 L115 35 L130 15 L140 45 Z" fill="#FFD700" stroke="#FFA500" stroke-width="2"/>
        <circle cx="70" cy="20" r="5" fill="#FF6B6B"/>
        <circle cx="100" cy="15" r="6" fill="#4ECDC4"/>
        <circle cx="130" cy="20" r="5" fill="#FF6B6B"/>
        <rect x="60" y="40" width="80" height="10" rx="2" fill="#FFD700" stroke="#FFA500" stroke-width="2"/>
      </g>`
    },
    {
      id: 'hw3',
      name: '兔耳朵',
      desc: '超可愛的兔兔耳朵～',
      price: 200,
      power: 20,
      rarity: 'common',
      svg: `<g class="headwear hw3">
        <ellipse cx="75" cy="20" rx="12" ry="35" fill="#FFB6C1" transform="rotate(-15 75 20)"/>
        <ellipse cx="75" cy="20" rx="6" ry="25" fill="#FF69B4" transform="rotate(-15 75 20)"/>
        <ellipse cx="125" cy="20" rx="12" ry="35" fill="#FFB6C1" transform="rotate(15 125 20)"/>
        <ellipse cx="125" cy="20" rx="6" ry="25" fill="#FF69B4" transform="rotate(15 125 20)"/>
      </g>`
    },
    {
      id: 'hw4',
      name: '魔法帽',
      desc: '蘊含神秘的數學魔力',
      price: 800,
      power: 80,
      rarity: 'epic',
      svg: `<g class="headwear hw4">
        <path d="M60 50 L100 -20 L140 50 Z" fill="#4A148C"/>
        <ellipse cx="100" cy="50" rx="50" ry="12" fill="#6A1B9A"/>
        <circle cx="100" cy="5" r="8" fill="#FFD700"/>
        <circle cx="80" cy="25" r="4" fill="#E1BEE7"/>
        <circle cx="115" cy="35" r="3" fill="#CE93D8"/>
        <circle cx="90" cy="40" r="2" fill="#F3E5F5"/>
      </g>`
    },
    {
      id: 'hw5',
      name: '貓耳髮箍',
      desc: '喵～超萌的貓耳朵',
      price: 300,
      power: 30,
      rarity: 'uncommon',
      svg: `<g class="headwear hw5">
        <path d="M65 45 L55 15 L80 35 Z" fill="#333" stroke="#222" stroke-width="2"/>
        <path d="M65 40 L60 20 L75 35 Z" fill="#FFB6C1"/>
        <path d="M135 45 L145 15 L120 35 Z" fill="#333" stroke="#222" stroke-width="2"/>
        <path d="M135 40 L140 20 L125 35 Z" fill="#FFB6C1"/>
        <ellipse cx="100" cy="48" rx="40" ry="5" fill="#333"/>
      </g>`
    }
  ],

  // ===== 上衣 (5件) =====
  top: [
    {
      id: 'top1',
      name: '校服',
      desc: '整潔的學生制服',
      price: 100,
      power: 10,
      rarity: 'common',
      svg: `<g class="top top1">
        <path d="M60 100 L55 180 L145 180 L140 100 Q100 110 60 100" fill="#FFFFFF" stroke="#DDD" stroke-width="2"/>
        <path d="M60 100 L75 100 L80 130 L60 130 Z" fill="#1E3A5F"/>
        <path d="M140 100 L125 100 L120 130 L140 130 Z" fill="#1E3A5F"/>
        <rect x="95" y="110" width="10" height="60" fill="#FF6B6B"/>
        <circle cx="100" cy="180" r="5" fill="#1E3A5F"/>
      </g>`
    },
    {
      id: 'top2',
      name: '超級英雄服',
      desc: '充滿正義的力量！',
      price: 400,
      power: 40,
      rarity: 'uncommon',
      svg: `<g class="top top2">
        <path d="M60 100 L55 180 L145 180 L140 100 Q100 110 60 100" fill="#E53935" stroke="#C62828" stroke-width="2"/>
        <path d="M85 120 L100 110 L115 120 L110 145 L100 150 L90 145 Z" fill="#FFD700" stroke="#FFA000" stroke-width="2"/>
        <text x="100" y="138" text-anchor="middle" fill="#C62828" font-size="16" font-weight="bold">M</text>
        <path d="M55 100 L40 140 L60 140 Z" fill="#1565C0"/>
        <path d="M145 100 L160 140 L140 140 Z" fill="#1565C0"/>
      </g>`
    },
    {
      id: 'top3',
      name: '彩虹T恤',
      desc: '七彩繽紛好心情',
      price: 250,
      power: 25,
      rarity: 'common',
      svg: `<g class="top top3">
        <path d="M60 100 L55 180 L145 180 L140 100 Q100 110 60 100" fill="#FFFFFF" stroke="#DDD" stroke-width="2"/>
        <rect x="65" y="115" width="70" height="8" fill="#FF6B6B"/>
        <rect x="65" y="123" width="70" height="8" fill="#FFB347"/>
        <rect x="65" y="131" width="70" height="8" fill="#FFEB3B"/>
        <rect x="65" y="139" width="70" height="8" fill="#4CAF50"/>
        <rect x="65" y="147" width="70" height="8" fill="#2196F3"/>
        <rect x="65" y="155" width="70" height="8" fill="#9C27B0"/>
      </g>`
    },
    {
      id: 'top4',
      name: '魔法師袍',
      desc: '古老的魔法長袍',
      price: 700,
      power: 70,
      rarity: 'rare',
      svg: `<g class="top top4">
        <path d="M50 100 L45 190 L155 190 L150 100 Q100 115 50 100" fill="#311B92" stroke="#1A237E" stroke-width="2"/>
        <path d="M70 120 L90 120 L85 160 L75 160 Z" fill="#7C4DFF" opacity="0.5"/>
        <path d="M130 120 L110 120 L115 160 L125 160 Z" fill="#7C4DFF" opacity="0.5"/>
        <circle cx="100" cy="130" r="15" fill="none" stroke="#FFD700" stroke-width="2"/>
        <path d="M100 120 L103 128 L112 128 L105 134 L108 143 L100 138 L92 143 L95 134 L88 128 L97 128 Z" fill="#FFD700"/>
      </g>`
    },
    {
      id: 'top5',
      name: '太空服',
      desc: '探索宇宙的裝備！',
      price: 1000,
      power: 100,
      rarity: 'epic',
      svg: `<g class="top top5">
        <path d="M55 100 L50 185 L150 185 L145 100 Q100 115 55 100" fill="#E0E0E0" stroke="#BDBDBD" stroke-width="3"/>
        <ellipse cx="100" cy="140" rx="25" ry="30" fill="#263238" stroke="#37474F" stroke-width="2"/>
        <ellipse cx="100" cy="140" rx="20" ry="25" fill="#4FC3F7" opacity="0.7"/>
        <rect x="60" y="160" width="15" height="20" rx="3" fill="#F44336"/>
        <rect x="125" y="160" width="15" height="20" rx="3" fill="#4CAF50"/>
        <circle cx="70" cy="115" r="8" fill="#FFEB3B"/>
        <circle cx="130" cy="115" r="8" fill="#FFEB3B"/>
      </g>`
    }
  ],

  // ===== 褲子 (5件) =====
  bottom: [
    {
      id: 'bot1',
      name: '學生褲',
      desc: '標準的學生長褲',
      price: 80,
      power: 8,
      rarity: 'common',
      svg: `<g class="bottom bot1">
        <path d="M70 175 L65 250 L95 250 L100 180 L105 250 L135 250 L130 175 Z" fill="#1E3A5F" stroke="#152A4A" stroke-width="2"/>
        <line x1="100" y1="180" x2="100" y2="250" stroke="#152A4A" stroke-width="1"/>
      </g>`
    },
    {
      id: 'bot2',
      name: '運動短褲',
      desc: '活力滿滿！',
      price: 120,
      power: 15,
      rarity: 'common',
      svg: `<g class="bottom bot2">
        <path d="M70 175 L65 220 L100 225 L135 220 L130 175 Z" fill="#FF5722" stroke="#E64A19" stroke-width="2"/>
        <line x1="75" y1="180" x2="75" y2="215" stroke="#FFFFFF" stroke-width="3"/>
        <line x1="125" y1="180" x2="125" y2="215" stroke="#FFFFFF" stroke-width="3"/>
      </g>`
    },
    {
      id: 'bot3',
      name: '牛仔褲',
      desc: '經典百搭款',
      price: 200,
      power: 20,
      rarity: 'common',
      svg: `<g class="bottom bot3">
        <path d="M70 175 L63 250 L97 250 L100 180 L103 250 L137 250 L130 175 Z" fill="#1976D2" stroke="#1565C0" stroke-width="2"/>
        <rect x="75" y="185" width="12" height="15" rx="2" fill="#0D47A1" opacity="0.5"/>
        <rect x="113" y="185" width="12" height="15" rx="2" fill="#0D47A1" opacity="0.5"/>
        <circle cx="100" cy="178" r="3" fill="#FFD700"/>
      </g>`
    },
    {
      id: 'bot4',
      name: '公主裙',
      desc: '夢幻蓬蓬裙～',
      price: 350,
      power: 35,
      rarity: 'uncommon',
      svg: `<g class="bottom bot4">
        <ellipse cx="100" cy="220" rx="50" ry="40" fill="#FF80AB"/>
        <ellipse cx="100" cy="220" rx="45" ry="35" fill="#FF4081"/>
        <ellipse cx="100" cy="180" rx="30" ry="10" fill="#F48FB1"/>
        <path d="M70 180 Q60 220 55 250" stroke="#FFB6C1" stroke-width="2" fill="none"/>
        <path d="M130 180 Q140 220 145 250" stroke="#FFB6C1" stroke-width="2" fill="none"/>
        <circle cx="85" cy="200" r="4" fill="#FFFFFF" opacity="0.6"/>
        <circle cx="115" cy="210" r="3" fill="#FFFFFF" opacity="0.6"/>
        <circle cx="95" cy="230" r="5" fill="#FFFFFF" opacity="0.6"/>
      </g>`
    },
    {
      id: 'bot5',
      name: '忍者褲',
      desc: '輕盈如風！',
      price: 450,
      power: 45,
      rarity: 'rare',
      svg: `<g class="bottom bot5">
        <path d="M70 175 L60 250 L100 245 L140 250 L130 175 Z" fill="#212121" stroke="#000" stroke-width="2"/>
        <path d="M65 190 L75 190 L73 210 L67 210 Z" fill="#616161"/>
        <path d="M125 190 L135 190 L133 210 L127 210 Z" fill="#616161"/>
        <path d="M80 220 L90 215 L90 240 L80 245 Z" fill="#424242"/>
        <path d="M120 220 L110 215 L110 240 L120 245 Z" fill="#424242"/>
      </g>`
    }
  ],

  // ===== 鞋子 (5件) =====
  shoes: [
    {
      id: 'shoe1',
      name: '學生鞋',
      desc: '舒適的黑皮鞋',
      price: 60,
      power: 6,
      rarity: 'common',
      svg: `<g class="shoes shoe1">
        <ellipse cx="80" cy="265" rx="18" ry="8" fill="#1A1A1A"/>
        <ellipse cx="120" cy="265" rx="18" ry="8" fill="#1A1A1A"/>
        <rect x="65" y="255" width="30" height="12" rx="5" fill="#2C2C2C"/>
        <rect x="105" y="255" width="30" height="12" rx="5" fill="#2C2C2C"/>
      </g>`
    },
    {
      id: 'shoe2',
      name: '運動鞋',
      desc: '跑得更快！',
      price: 150,
      power: 18,
      rarity: 'common',
      svg: `<g class="shoes shoe2">
        <ellipse cx="80" cy="268" rx="22" ry="10" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
        <ellipse cx="120" cy="268" rx="22" ry="10" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
        <path d="M62 260 Q80 255 98 260" stroke="#FF5722" stroke-width="4" fill="none"/>
        <path d="M102 260 Q120 255 138 260" stroke="#FF5722" stroke-width="4" fill="none"/>
        <circle cx="80" cy="260" r="3" fill="#2196F3"/>
        <circle cx="120" cy="260" r="3" fill="#2196F3"/>
      </g>`
    },
    {
      id: 'shoe3',
      name: '魔法靴',
      desc: '會發光的靴子！',
      price: 400,
      power: 40,
      rarity: 'uncommon',
      svg: `<g class="shoes shoe3">
        <path d="M62 245 L60 270 L100 275 L98 245 Z" fill="#7B1FA2"/>
        <path d="M102 245 L100 270 L140 275 L138 245 Z" fill="#7B1FA2"/>
        <ellipse cx="80" cy="272" rx="22" ry="8" fill="#9C27B0"/>
        <ellipse cx="120" cy="272" rx="22" ry="8" fill="#9C27B0"/>
        <circle cx="75" cy="255" r="4" fill="#FFD700"/>
        <circle cx="125" cy="255" r="4" fill="#FFD700"/>
        <path d="M65 265 L70 260 L75 265 L70 270 Z" fill="#E1BEE7" opacity="0.8"/>
        <path d="M130 265 L135 260 L140 265 L135 270 Z" fill="#E1BEE7" opacity="0.8"/>
      </g>`
    },
    {
      id: 'shoe4',
      name: '溜冰鞋',
      desc: '在數字間滑行～',
      price: 300,
      power: 30,
      rarity: 'uncommon',
      svg: `<g class="shoes shoe4">
        <rect x="60" y="250" width="35" height="18" rx="5" fill="#E91E63"/>
        <rect x="105" y="250" width="35" height="18" rx="5" fill="#E91E63"/>
        <rect x="63" y="270" width="30" height="5" fill="#424242"/>
        <rect x="108" y="270" width="30" height="5" fill="#424242"/>
        <circle cx="68" cy="277" r="4" fill="#BDBDBD"/>
        <circle cx="78" cy="277" r="4" fill="#BDBDBD"/>
        <circle cx="88" cy="277" r="4" fill="#BDBDBD"/>
        <circle cx="113" cy="277" r="4" fill="#BDBDBD"/>
        <circle cx="123" cy="277" r="4" fill="#BDBDBD"/>
        <circle cx="133" cy="277" r="4" fill="#BDBDBD"/>
      </g>`
    },
    {
      id: 'shoe5',
      name: '火箭靴',
      desc: '超越光速！',
      price: 800,
      power: 80,
      rarity: 'rare',
      svg: `<g class="shoes shoe5">
        <path d="M58 245 L55 265 L95 270 L98 250 Z" fill="#607D8B"/>
        <path d="M102 245 L100 265 L145 270 L142 250 Z" fill="#607D8B"/>
        <ellipse cx="75" cy="270" rx="22" ry="10" fill="#455A64"/>
        <ellipse cx="125" cy="270" rx="22" ry="10" fill="#455A64"/>
        <path d="M60 275 L70 285 L65 275 Z" fill="#FF5722"/>
        <path d="M75 275 L85 290 L80 275 Z" fill="#FF9800"/>
        <path d="M90 275 L95 282 L93 275 Z" fill="#FFEB3B"/>
        <path d="M130 275 L140 285 L135 275 Z" fill="#FF5722"/>
        <path d="M115 275 L125 290 L120 275 Z" fill="#FF9800"/>
        <path d="M105 275 L110 282 L108 275 Z" fill="#FFEB3B"/>
      </g>`
    }
  ],

  // ===== 配件 (5件) =====
  accessory: [
    {
      id: 'acc1',
      name: '眼鏡',
      desc: '看起來更聰明！',
      price: 80,
      power: 12,
      rarity: 'common',
      svg: `<g class="accessory acc1">
        <circle cx="85" cy="80" r="12" fill="none" stroke="#333" stroke-width="3"/>
        <circle cx="115" cy="80" r="12" fill="none" stroke="#333" stroke-width="3"/>
        <line x1="97" y1="80" x2="103" y2="80" stroke="#333" stroke-width="3"/>
        <line x1="73" y1="78" x2="65" y2="75" stroke="#333" stroke-width="2"/>
        <line x1="127" y1="78" x2="135" y2="75" stroke="#333" stroke-width="2"/>
      </g>`
    },
    {
      id: 'acc2',
      name: '蝴蝶結',
      desc: '可愛的大蝴蝶結',
      price: 120,
      power: 15,
      rarity: 'common',
      svg: `<g class="accessory acc2">
        <ellipse cx="85" cy="50" rx="18" ry="12" fill="#FF4081"/>
        <ellipse cx="115" cy="50" rx="18" ry="12" fill="#FF4081"/>
        <circle cx="100" cy="50" r="8" fill="#F50057"/>
        <ellipse cx="85" cy="50" rx="12" ry="6" fill="#FF80AB" opacity="0.5"/>
        <ellipse cx="115" cy="50" rx="12" ry="6" fill="#FF80AB" opacity="0.5"/>
      </g>`
    },
    {
      id: 'acc3',
      name: '翅膀',
      desc: '天使的翅膀！',
      price: 600,
      power: 60,
      rarity: 'rare',
      svg: `<g class="accessory acc3">
        <path d="M50 120 Q20 100 30 140 Q25 160 50 150 Q40 170 60 160 Q50 180 75 165 L75 140 Z" fill="#E3F2FD" stroke="#90CAF9" stroke-width="2"/>
        <path d="M150 120 Q180 100 170 140 Q175 160 150 150 Q160 170 140 160 Q150 180 125 165 L125 140 Z" fill="#E3F2FD" stroke="#90CAF9" stroke-width="2"/>
        <path d="M45 125 Q30 115 35 135" stroke="#BBDEFB" stroke-width="2" fill="none"/>
        <path d="M155 125 Q170 115 165 135" stroke="#BBDEFB" stroke-width="2" fill="none"/>
      </g>`
    },
    {
      id: 'acc4',
      name: '披風',
      desc: '英雄的披風',
      price: 450,
      power: 45,
      rarity: 'uncommon',
      svg: `<g class="accessory acc4">
        <path d="M55 100 Q45 150 50 220 Q70 240 100 245 Q130 240 150 220 Q155 150 145 100" fill="#C62828" stroke="#B71C1C" stroke-width="2"/>
        <path d="M60 110 Q55 150 58 200" stroke="#E53935" stroke-width="3" fill="none" opacity="0.5"/>
        <path d="M140 110 Q145 150 142 200" stroke="#E53935" stroke-width="3" fill="none" opacity="0.5"/>
      </g>`
    },
    {
      id: 'acc5',
      name: '魔法杖',
      desc: '星星魔法杖！',
      price: 500,
      power: 55,
      rarity: 'rare',
      svg: `<g class="accessory acc5">
        <line x1="155" y1="100" x2="175" y2="180" stroke="#FFD54F" stroke-width="6" stroke-linecap="round"/>
        <line x1="155" y1="100" x2="175" y2="180" stroke="#FFF176" stroke-width="3" stroke-linecap="round"/>
        <path d="M155 100 L158 85 L165 95 L175 82 L168 95 L180 98 L168 102 L175 115 L165 105 L158 115 L155 100 Z" fill="#FFD700"/>
        <circle cx="165" cy="98" r="5" fill="#FFF9C4"/>
        <circle cx="180" cy="85" r="2" fill="#FFEB3B" opacity="0.8"/>
        <circle cx="145" cy="90" r="2" fill="#FFEB3B" opacity="0.8"/>
        <circle cx="170" cy="75" r="1.5" fill="#FFEB3B" opacity="0.6"/>
      </g>`
    }
  ]
};

// 稀有度顏色
const RARITY_COLORS = {
  common: '#9E9E9E',
  uncommon: '#4CAF50',
  rare: '#2196F3',
  epic: '#9C27B0',
  legendary: '#FF9800'
};

// 稀有度中文名
const RARITY_NAMES = {
  common: '普通',
  uncommon: '優良',
  rare: '稀有',
  epic: '史詩',
  legendary: '傳說'
};

// 取得所有裝備的平面列表
function getAllEquipment() {
  const all = [];
  for (const category of Object.keys(EQUIPMENT)) {
    for (const item of EQUIPMENT[category]) {
      all.push({ ...item, category });
    }
  }
  return all;
}

// 根據 ID 取得裝備
function getEquipmentById(id) {
  for (const category of Object.keys(EQUIPMENT)) {
    const item = EQUIPMENT[category].find(e => e.id === id);
    if (item) return { ...item, category };
  }
  return null;
}

// 計算總能力值
function calculateTotalPower(equippedIds) {
  let total = 0;
  for (const id of equippedIds) {
    const item = getEquipmentById(id);
    if (item) total += item.power;
  }
  return total;
}

// 導出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EQUIPMENT, RARITY_COLORS, RARITY_NAMES, getAllEquipment, getEquipmentById, calculateTotalPower };
}
