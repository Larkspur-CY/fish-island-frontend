// Title and level utility functions

interface Title {
  id: number;
  name: string;
  description: string;
}

/**
 * Gets the emoji representation for a user level
 * @param level User level
 * @returns Emoji corresponding to the level
 */
export const getLevelEmoji = (level: number): string => {
  switch (level) {
    case 12:
      return '🔱'; // 渔祖师
    case 11:
      return '✨'; // 渔天尊
    case 10:
      return '🌟'; // 渔圣人
    case 9:
      return '🌈'; // 渔仙君
    case 8:
      return '🏮'; // 渔尊者
    case 7:
      return '👑'; // 渔真人
    case 6:
      return '💫';
    case 5:
      return '🏖';
    case 4:
      return '🎣';
    case 3:
      return '⭐';
    case 2:
      return '🐣';
    case 1:
      return '💦';
    default:
      return '💦'; // 默认显示
  }
};

/**
 * Generates a short unique identifier for a user
 * @param userId User ID string
 * @returns Formatted short ID
 */
export const generateUniqueShortId = (userId: string): string => {
  // 如果是数字ID，转换为16进制并取前4位
  if (/^\d+$/.test(userId)) {
    const hex = parseInt(userId).toString(16).toUpperCase();
    return `#${hex.padStart(4, '0').slice(0, 4)}`;
  }
  // 如果是字符串ID，取前4个字符，不足则补0
  return `#${userId.slice(0, 4).padEnd(4, '0').toUpperCase()}`;
};

/**
 * Gets the title tag component properties based on user's admin status, level and title ID
 * @param isAdmin Whether the user is an admin
 * @param level User level
 * @param titleId Optional title ID
 * @returns Object containing tag text, emoji and CSS class
 */
export const getTitleTagProperties = (isAdmin: boolean, level: number, titleId?: number): { tagText: string, tagEmoji: string, tagClass: string } => {
  // 如果有特定的称号ID且不是0（0表示使用等级称号）
  if (titleId !== undefined && titleId != 0) {
    // 从 titles.json 中获取对应的称号
    const titles: Title[] = require('@/config/titles.json').titles;
    const title = titles.find((t: Title) => String(t.id) === String(titleId));

    if (title) {
      let tagEmoji = '';
      let tagClass = '';

      // 根据不同的称号ID设置不同的样式
      switch (String(titleId)) {
        case '-1': // 管理员
          tagEmoji = '🚀';
          tagClass = 'titleTagAdmin';
          break;
        case '1': // 天使投资人
          tagEmoji = '😇';
          tagClass = 'titleTagInvestor';
          break;
        case '2': // 首席渔官
          tagEmoji = '🏆';
          tagClass = 'titleTagChief';
          break;
        case '3': // 白金渔官
          tagEmoji = '💎';
          tagClass = 'titleTagPlatinum';
          break;
        case '4': // 梦幻渔官
          tagEmoji = '🌟';
          tagClass = 'titleTagGold';
          break;
        case '5': // 渔共建者
          tagEmoji = '🛠️';
          tagClass = 'titleTagBuilder';
          break;
        case '6': // 渔行刑官
          tagEmoji = '⚔️';
          tagClass = 'titleTagExecutioner';
          break;
        case '7': // 电玩少女
          tagEmoji = '🌸';
          tagClass = 'titleTagGamer';
          break;
        case '8': // 渔点子王
          tagEmoji = '💡';
          tagClass = 'titleTagIdeaKing';
          break;
        case '9': // 渔大法师
          tagEmoji = '💀';
          tagClass = 'titleTagWizard';
          break;
        case '10': // 入机王
          tagEmoji = '🌟';
          tagClass = 'titleTagGamer2';
          break;
        case '11': // 汉堡大王
          tagEmoji = '🍔';
          tagClass = 'titleTagBurgerKing';
          break;
        case '12': // 渔铲屎官
          tagEmoji = '🦊';
          tagClass = 'titleTagFox';
          break;
        default:
          tagEmoji = '🎯';
          tagClass = 'levelTagBeginner';
      }

      return {
        tagText: title.name,
        tagEmoji,
        tagClass
      };
    }
  }

  // 如果没有特定称号或称号ID为0，则使用原有的等级称号逻辑
  let tagText = '';
  let tagEmoji = '';
  let tagClass = '';

  switch (level) {
    case 12:
      tagText = '渔皇帝';
      tagEmoji = '🔱';
      tagClass = 'levelTagGrandMaster';
      break;
    case 11:
      tagText = '渔天尊';
      tagEmoji = '✨';
      tagClass = 'levelTagCelestial';
      break;
    case 10:
      tagText = '渔圣人';
      tagEmoji = '🌟';
      tagClass = 'levelTagSaint';
      break;
    case 9:
      tagText = '渔仙君';
      tagEmoji = '🌈';
      tagClass = 'levelTagImmortal';
      break;
    case 8:
      tagText = '渔尊者';
      tagEmoji = '🏮';
      tagClass = 'levelTagElder';
      break;
    case 7:
      tagText = '渔真人';
      tagEmoji = '👑';
      tagClass = 'levelTagMaster';
      break;
    case 6:
      tagText = '躺平宗师';
      tagEmoji = '💫';
      tagClass = 'levelTagExpert';
      break;
    case 5:
      tagText = '摆烂大师';
      tagEmoji = '🏖️';
      tagClass = 'levelTagPro';
      break;
    case 4:
      tagText = '渔专家 ';
      tagEmoji = '🎣';
      tagClass = 'levelTagAdvanced';
      break;
    case 3:
      tagText = '水群达人';
      tagEmoji = '⭐';
      tagClass = 'levelTagBeginner';
      break;
    case 2:
      tagText = '渔学徒';
      tagEmoji = '🐣';
      tagClass = 'levelTagNewbie';
      break;
    default:
      tagText = '划水新秀';
      tagEmoji = '💦';
      tagClass = 'levelTagNewbie';
  }

  return {
    tagText,
    tagEmoji,
    tagClass
  };
};
