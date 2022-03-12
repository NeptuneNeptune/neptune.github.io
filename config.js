// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",
        "心爱的女朋友",
        "今天是你的生日",
        "祝你生日快乐！！！",
        "希望你每一天都能像今天这样",
        "美丽而快乐",
        "我们的相遇",
        "实在是一种心动的奇迹",
        "今天是我们一起过的第一个生日",
        "希望今后的每一天",
        "都会有彼此的陪伴",
        "希望这只手",
        "还有这只手",
        "拉在一起",
        "一直走下去",
        "一起分享生活中的喜悦",
        "一起面对生活中的挑战",
        "一起诉说彼此的心声",
        "有你的陪伴",
        "三生有幸",
        "我爱你！",
        "————爱你的安先生"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的女朋友": "./imgs/you.jpg",
        "今天是你的生日": "./imgs/birthday.jpg",
        "祝你生日快乐！！！": "./imgs/bd1.jpg",
        "美丽而快乐": "./imgs/happy.jpg",
        "希望这只手": "./imgs/my_hand.jpg",
        "还有这只手": "./imgs/your_hand.jpg",
        "三生有幸": "./imgs/lucky.jpg",
        "我爱你！": "./imgs/i_love_you.jpg",
        "————爱你的安先生": "./imgs/me.jpg"
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "不知所措？点这里!",
        play: "来点音乐？",
        bannar_coming: "加点氛围？",
        balloons_flying: "好像少点东西？",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "亲爱的，生日快乐！",
        story: "A MESSAGE FOR YOU",
    }
};
