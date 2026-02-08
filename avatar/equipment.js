// ========== 裝備資料庫 ==========
const EQUIPMENT = {
    // 頭飾
    headwear: [
        { id: 'hw1', name: '學生帽', price: 100, power: 10, emoji: '🎓' },
        { id: 'hw2', name: '皇冠', price: 300, power: 25, emoji: '👑' },
        { id: 'hw3', name: '兔耳朵', price: 200, power: 15, emoji: '🐰' },
        { id: 'hw4', name: '太陽帽', price: 150, power: 12, emoji: '🧢' },
        { id: 'hw5', name: '魔法帽', price: 500, power: 50, emoji: '🎩' },
    ],
    
    // 上衣
    top: [
        { id: 'tp1', name: '學生服', price: 150, power: 20, emoji: '👔' },
        { id: 'tp2', name: '超人披風', price: 400, power: 40, emoji: '🦸' },
        { id: 'tp3', name: '運動衣', price: 200, power: 25, emoji: '🎽' },
        { id: 'tp4', name: '盔甲', price: 600, power: 60, emoji: '🛡️' },
        { id: 'tp5', name: '魔法袍', price: 800, power: 80, emoji: '🧙' },
    ],
    
    // 褲子
    bottom: [
        { id: 'bt1', name: '學生褲', price: 120, power: 15, emoji: '👖' },
        { id: 'bt2', name: '運動褲', price: 180, power: 20, emoji: '🩳' },
        { id: 'bt3', name: '牛仔褲', price: 250, power: 30, emoji: '👖' },
        { id: 'bt4', name: '盔甲腿', price: 450, power: 45, emoji: '🦿' },
        { id: 'bt5', name: '魔法裙', price: 550, power: 55, emoji: '👗' },
    ],
    
    // 鞋子
    shoes: [
        { id: 'sh1', name: '布鞋', price: 80, power: 10, emoji: '👟' },
        { id: 'sh2', name: '運動鞋', price: 150, power: 18, emoji: '👟' },
        { id: 'sh3', name: '皮鞋', price: 200, power: 22, emoji: '👞' },
        { id: 'sh4', name: '戰靴', price: 350, power: 35, emoji: '🥾' },
        { id: 'sh5', name: '飛行鞋', price: 500, power: 50, emoji: '👠' },
    ],
    
    // 武器
    weapon: [
        { id: 'wp1', name: '木劍', price: 200, power: 30, emoji: '🗡️' },
        { id: 'wp2', name: '魔法杖', price: 400, power: 50, emoji: '🪄' },
        { id: 'wp3', name: '弓箭', price: 350, power: 45, emoji: '🏹' },
        { id: 'wp4', name: '雷神之錘', price: 700, power: 80, emoji: '🔨' },
        { id: 'wp5', name: '傳說之劍', price: 1000, power: 100, emoji: '⚔️' },
    ],
    
    // 配件
    accessory: [
        { id: 'ac1', name: '眼鏡', price: 50, power: 5, emoji: '👓' },
        { id: 'ac2', name: '項鍊', price: 120, power: 12, emoji: '📿' },
        { id: 'ac3', name: '手錶', price: 180, power: 18, emoji: '⌚' },
        { id: 'ac4', name: '魔法戒指', price: 300, power: 25, emoji: '💍' },
        { id: 'ac5', name: '翅膀', price: 600, power: 40, emoji: '🪽' },
    ]
};

// 裝備部位中文名稱
const SLOT_NAMES = {
    headwear: '頭飾',
    top: '上衣',
    bottom: '褲子',
    shoes: '鞋子',
    weapon: '武器',
    accessory: '配件'
};

// 計算總戰鬥力
function calculateCombatPower(equippedItems) {
    let totalPower = 10; // 基礎戰鬥力
    
    for (const slot in equippedItems) {
        const itemId = equippedItems[slot];
        if (itemId && EQUIPMENT[slot]) {
            const item = EQUIPMENT[slot].find(i => i.id === itemId);
            if (item) {
                totalPower += item.power;
            }
        }
    }
    
    return totalPower;
}

// 取得裝備資訊
function getEquipmentById(slot, itemId) {
    if (EQUIPMENT[slot]) {
        return EQUIPMENT[slot].find(i => i.id === itemId);
    }
    return null;
}
