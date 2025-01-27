const config = {
    introMessages: [
        `今天是农历正月初一，祝你春节快乐~`, //第一句话
        `关于节日礼物<br/>我想了很多方案<br/>都被我一一否决了...`, //第二句话
        `最后，我选择了一个不一样的方案：<br/><span class='highlight'>新年大抽奖</span><br/>由你自己来选择幸运礼物` //第三句话
    ],
    emojiList: ['🎂', '🎉', '🎁', '🎈', '🍰', '🧧'], //生日特效的符号
    contactPerson: '魏奇洛', //兑奖人的姓名，比如你自己
    prizes: {
        '一帆风顺': { description: '1.33元现金', icon: '💎' },
        '二龙戏珠': { description: '玩偶一个', icon: '🎠' },
        '三羊开泰': { description: '3.33元现金', icon: '💴' },
        '四喜临门': { description: '增加 1 次抽奖机会', icon: '🔁' },
        '五谷丰登': { description: '糖果一盒', icon: '🍬' },
        '六六大顺': { description: '6.66元现金', icon: '🥇' }
    }
};
