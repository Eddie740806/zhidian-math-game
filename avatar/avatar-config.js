// ========== 紙娃娃外觀選項 ==========

const AVATAR_OPTIONS = {
    // 膚色
    skinTone: [
        { id: 'skin1', name: '白皙', color: '#FFE4C4' },
        { id: 'skin2', name: '自然', color: '#F5DEB3' },
        { id: 'skin3', name: '小麥', color: '#DEB887' },
        { id: 'skin4', name: '健康', color: '#D2B48C' },
        { id: 'skin5', name: '古銅', color: '#BC8F8F' },
    ],
    
    // 髮型
    hairStyle: [
        { id: 'hair1', name: '短髮', emoji: '💇' },
        { id: 'hair2', name: '長髮', emoji: '💇‍♀️' },
        { id: 'hair3', name: '馬尾', emoji: '👧' },
        { id: 'hair4', name: '捲髮', emoji: '👨‍🦱' },
        { id: 'hair5', name: '雙馬尾', emoji: '👩' },
        { id: 'hair6', name: '平頭', emoji: '👦' },
        { id: 'hair7', name: '爆炸頭', emoji: '🧑‍🦱' },
        { id: 'hair8', name: '光頭', emoji: '🧑‍🦲' },
    ],
    
    // 髮色
    hairColor: [
        { id: 'hc1', name: '黑色', color: '#1a1a1a' },
        { id: 'hc2', name: '棕色', color: '#8B4513' },
        { id: 'hc3', name: '金色', color: '#FFD700' },
        { id: 'hc4', name: '紅色', color: '#DC143C' },
        { id: 'hc5', name: '藍色', color: '#4169E1' },
        { id: 'hc6', name: '紫色', color: '#9932CC' },
    ],
    
    // 眼睛
    eyes: [
        { id: 'eye1', name: '圓眼', emoji: '👀' },
        { id: 'eye2', name: '笑眼', emoji: '😊' },
        { id: 'eye3', name: '酷眼', emoji: '😎' },
        { id: 'eye4', name: '星星眼', emoji: '🤩' },
    ],
    
    // 嘴巴/表情
    mouth: [
        { id: 'mouth1', name: '微笑', emoji: '😊' },
        { id: 'mouth2', name: '開心', emoji: '😄' },
        { id: 'mouth3', name: '酷酷', emoji: '😏' },
        { id: 'mouth4', name: '驚訝', emoji: '😮' },
    ]
};

// 預設角色（快速選擇）
const PRESET_AVATARS = [
    {
        id: 'preset1',
        name: '陽光男孩',
        config: { skinTone: 'skin2', hairStyle: 'hair1', hairColor: 'hc1', eyes: 'eye1', mouth: 'mouth2' }
    },
    {
        id: 'preset2', 
        name: '可愛女孩',
        config: { skinTone: 'skin1', hairStyle: 'hair3', hairColor: 'hc2', eyes: 'eye2', mouth: 'mouth1' }
    },
    {
        id: 'preset3',
        name: '酷酷少年',
        config: { skinTone: 'skin3', hairStyle: 'hair4', hairColor: 'hc1', eyes: 'eye3', mouth: 'mouth3' }
    },
    {
        id: 'preset4',
        name: '夢幻少女',
        config: { skinTone: 'skin1', hairStyle: 'hair5', hairColor: 'hc5', eyes: 'eye4', mouth: 'mouth1' }
    },
    {
        id: 'preset5',
        name: '運動達人',
        config: { skinTone: 'skin4', hairStyle: 'hair6', hairColor: 'hc1', eyes: 'eye1', mouth: 'mouth2' }
    }
];

// 渲染角色（簡化版，用 emoji 組合）
function renderAvatarEmoji(avatarConfig, equippedItems) {
    // 基礎角色用 emoji 表示
    const hairEmoji = AVATAR_OPTIONS.hairStyle.find(h => h.id === avatarConfig?.hairStyle)?.emoji || '👤';
    
    // 裝備 emoji
    let equipEmojis = '';
    if (equippedItems) {
        if (equippedItems.headwear) {
            const item = EQUIPMENT.headwear.find(i => i.id === equippedItems.headwear);
            if (item) equipEmojis += item.emoji;
        }
        if (equippedItems.weapon) {
            const item = EQUIPMENT.weapon.find(i => i.id === equippedItems.weapon);
            if (item) equipEmojis += item.emoji;
        }
    }
    
    return hairEmoji + (equipEmojis || '');
}
