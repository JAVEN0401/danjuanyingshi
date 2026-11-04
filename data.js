/* ============================================
   站点数据文件 —— 想新增/修改资源，只需编辑这里
   一条资源格式：
   {
     title: "剧名",
     cat: "分类id（见下方 categories，如 tv=电视剧）",
     status: "更新至22集" 或 "完结" 或 "",
     links: [
       { type: "百度网盘", url: "https://pan.baidu.com/...", code: "0612" },
       { type: "夸克网盘", url: "https://pan.quark.cn/...", code: "" }
     ]
   }
   说明：百度网盘全部为永久分享，提取码统一 0612；
        夸克网盘为公开分享，无需提取码，点开即可。
   ============================================ */

const SITE = {
  title: "每日梗~~店.视.剧",
  notice: "新的基本都有！找不到的可以加+V：danjuanyingshi 私信免费代找，后续会更新资源库（百度网盘提取码统一 0612，夸克无需提取码）",

  categories: [
    { id: "movie",   name: "电影",   emoji: "🎬" },
    { id: "tv",      name: "电视剧", emoji: "📺" },
    { id: "short",   name: "短剧",   emoji: "📱" },
    { id: "krjp",    name: "日韩剧", emoji: "🌈" },
    { id: "anime",   name: "动漫",   emoji: "🌸" },
    { id: "variety", name: "综艺",   emoji: "🎤" },
    { id: "west",    name: "欧美剧", emoji: "🌍" }
  ],

  entries: [
/* ---- 原有剧目（百度链接已升级为永久分享，提取码 0612） ---- */
    {
      title: "嫁金钗", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=J8HQw358u02ILUk2fHA42g", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/4e3f467b0e33", code: "" }
      ]
    },
    {
      title: "小城良方", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=0UYsf7s-h81Etxt59WwmlQ", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/fc52d5a5870b", code: "" }
      ]
    },
    {
      title: "玉簪秋", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=8tD6YW2EWSDcqOP8OlNmtw", code: "0612" }
      ]
    },
    {
      title: "尚公主", cat: "tv", status: "更新至23集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=JFokrWARYkWLMiwBt8-F-Q", code: "0612" }
      ]
    },
    {
      title: "伟大的长征", cat: "tv", status: "更新至43集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=CnfZipxhk3zRUXABgGBf1w", code: "0612" }
      ]
    },
    {
      title: "解梦", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/s/1qScTwg51k544u5fLXbu3Jw?pwd=2323", code: "2323" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/119758b4220b", code: "" }
      ]
    },
    {
      title: "美人余", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=F3yvChix4qzvO-UZxBH1ng", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/3fb17db58802", code: "" }
      ]
    },
    {
      title: "把黑夜点燃", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=7PJnwmP1J8Y2QOhWHArtDQ", code: "0612" }
      ]
    },
    {
      title: "燕燕于飞", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/s/10KMOATheAWBCnXl8NhwfSQ?pwd=2323", code: "2323" }
      ]
    },
    {
      title: "喜剧之王", cat: "tv", status: "更新中",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=GOE5JF9qWHfylGRxkOzI2g", code: "0612" }
      ]
    },
    /* ---- 新增剧目（网盘电视剧文件夹，永久分享） ---- */
    {
      title: "囧徒之预演告别", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=Et1aeXetVNkCJHTXZjg3fw", code: "0612" }
      ]
    },
    {
      title: "早春晴朗", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=1kfocrnB0fvPF50TGHVJcQ", code: "0612" }
      ]
    },
    {
      title: "深渊无间", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=p_yq_65zt6op70f9RcqvEA", code: "0612" }
      ]
    },
    {
      title: "生逢其时", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=YiXQyfoRZm-dTx52-tLadw", code: "0612" }
      ]
    },
    {
      title: "冬城猎凶", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=o8KRd-nTnEXHsL6OgnkaKw", code: "0612" }
      ]
    },
    {
      title: "一瓯春", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=IRs1dtFaJOOGNMAWcuKMug", code: "0612" }
      ]
    },
    {
      title: "交锋", cat: "tv", status: "更新中",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=y5hl_XjtAkCvsbfVcWR5Xw", code: "0612" }
      ]
    },
    {
      title: "云雀叫天录", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=GgSWYUHYzK3wb-vbJQDtJQ", code: "0612" }
      ]
    },
    {
      title: "法医秦明之龙番往事", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=B7XxSP0coC_hagkYJ_SN3g", code: "0612" }
      ]
    },
    {
      title: "我不是大师", cat: "tv", status: "更新中",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=YA_whi-0lUmV-nIqAMVcLw", code: "0612" }
      ]
    },
    {
      title: "无可替代", cat: "tv", status: "更新中",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=XV47p-adSp5sf2OX4YwTBQ", code: "0612" }
      ]
    },
    {
      title: "余红旧事", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=0VnZER8W53njwzfq4VzyHg", code: "0612" }
      ]
    },
    {
      title: "兰香如故", cat: "tv", status: "更新中",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=LExkD7TsxmXhCEFLoveQGg", code: "0612" }
      ]
    },
    {
      title: "此处通往繁星", cat: "tv", status: "更新中",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=zm9ALYPqPB10Kp5_upmmVw", code: "0612" }
      ]
    },
    {
      title: "魅影神捕", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=I61BFLdVeu2VylMgcHfQQg", code: "0612" }
      ]
    },
    {
      title: "蒸蒸日上", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=n1aQO7z1e9CjqWqllIyvMw", code: "0612" }
      ]
    },
    {
      title: "醉梦", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=E7mXNvT8Yrm3QiaQSR6z9Q", code: "0612" }
      ]
    },
    /* ---- 电影（百度网盘永久分享，提取码统一 0612；部分含夸克网盘） ---- */
    {
      title: "杯雪·一战成名", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=AwDR9DweaK0QEMWEA3komA", code: "0612" }
      ]
    },
    {
      title: "空枪", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=edesEG6t4Ai_83m5KFyQFw", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/009c19f509bf", code: "" }
      ]
    },
    {
      title: "希望", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=w8iGOr57E6FyUA-me9cV3Q", code: "0612" }
      ]
    },
    {
      title: "魔方小姐", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=sVTvLIaV9lYXIBF6riViZA", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/b9f9b3184ead", code: "" }
      ]
    },
    {
      title: "功夫女足", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=Faf5OjyOvHWsm_fa2swEAw", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/4aa385e2d717", code: "" }
      ]
    },
    {
      title: "数到三", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=qj1gMc_E4fxFUAH7MVc1Sw", code: "0612" }
      ]
    },
    {
      title: "年会不能停2", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=uZQa7O-xm82pQwXaHVpErQ", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/761d1f8e3390", code: "" }
      ]
    },
    {
      title: "出入平安", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=qyIG6M4fkYrdVDTUkcWo5w", code: "0612" }
      ]
    },
    {
      title: "给阿嬷的情书", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=zFMlN-TeY8jgfoNAjGWP5g", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/fe654a819819", code: "" }
      ]
    },
    {
      title: "特立独行", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=x12FvnMWCh7-39pkvMujbw", code: "0612" }
      ]
    },
    {
      title: "抓特务", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=Q56-EN1X2gcc4vk3qXCmHg", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/aea36ec43617", code: "" }
      ]
    },
    {
      title: "夜王", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=PYy2uuEMTkzrG3hniVpZng", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/a43a4a65a9e7", code: "" }
      ]
    },
    {
      title: "挽救计划", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=_c2yxSgItwij6R53GDZ5XQ", code: "0612" }
      ]
    },
    {
      title: "玩具总动员5", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=NpNDmopzQQ5jqmljieFJCQ", code: "0612" }
      ]
    },
    {
      title: "小黄人与大怪兽", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=UlgPQW3SjXy5OOmhU2CGmQ", code: "0612" }
      ]
    },
    {
      title: "欢迎再次登录", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=Jb9MKdlX2F_pAGYqRDgVIQ", code: "0612" }
      ]
    },
    {
      title: "莫得闲", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=8X0RRdvKbax08p421MrPkQ", code: "0612" }
      ]
    },
    {
      title: "消失的人", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=ojjArUXxXAPzLFl5EAe5Fw", code: "0612" }
      ]
    },
    {
      title: "超级少女", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=oeaCRl0c9VNIXtR7eqXPyA", code: "0612" }
      ]
    },
    {
      title: "利未记", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=2z8PHQ8JqT6I-lzLAfhT0w", code: "0612" }
      ]
    },
    {
      title: "今晚正好", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=wGOVqVRpfKiC2PcIZoW2eQ", code: "0612" }
      ]
    },
    {
      title: "寒战1994", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=0nJj8lsXMbmxDt9QPILqtA", code: "0612" }
      ]
    },
    {
      title: "群体", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=adiboJ8cWEtJeZDZVgVxXQ", code: "0612" }
      ]
    },
    {
      title: "宇宙巨人希曼崛起", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=1nfZqsf2YLnnPt9JJ4Op4Q", code: "0612" }
      ]
    },
    {
      title: "揭秘日", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=T0ffDkXDo4_tyrkR5F6Y8A", code: "0612" }
      ]
    },
    {
      title: "星球大战曼达洛人与古古", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=Q8Z8qV2dtTLjfDD-CJInfA", code: "0612" }
      ]
    },
    {
      title: "门牙", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=m9AzzFjZipi7JeS5tYjoGg", code: "0612" }
      ]
    },
    {
      title: "后室", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=IW-4aGiHo9VJB_Ha4CmrHg", code: "0612" }
      ]
    },
    {
      title: "火遮眼", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=aC0KiT_hVOaRS-f0-tst_w", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/f1e4b4c43932", code: "" }
      ]
    },
    {
      title: "森中有林", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=iKlDDg9FNjV3e2XUIb01bw", code: "0612" }
      ]
    },
    {
      title: "万米危机", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=l6ZeK_pH2t6ucBwP6I3-kA", code: "0612" }
      ]
    },
    {
      title: "绵羊侦探团", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=6tuw-QRsYVs8ZtdKx3TfKA", code: "0612" }
      ]
    },
    {
      title: "我的妈耶", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=zChOudpZePVhuJRU-Qhjxg", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/d82d3820857f", code: "" }
      ]
    },
    {
      title: "镖人风起大漠", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=KdARH91bbyudbzBGKWMM0g", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/e0ca3f2dfb89", code: "" }
      ]
    },
    {
      title: "熊出没年年有熊", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=2eMYYvA_f8C8Ct_TEXRuzQ", code: "0612" }
      ]
    },
    {
      title: "插翅难飞", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=8S04QpEfyX6iODcHZIosrQ", code: "0612" }
      ]
    },
    {
      title: "惊蛰无声", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=QqXHnITrcrM8yVR6J4fuJQ", code: "0612" }
      ]
    },
    {
      title: "长夜将尽", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=nfGf6HTpY6igyugEHwuUlA", code: "0612" }
      ]
    },
    {
      title: "伪钞重案", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=DFnhAmEyYbe0hWmzjth7Fw", code: "0612" }
      ]
    },
    {
      title: "与王生活的男人", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=nN9zq9WdLT9wHCCTKZQSPA", code: "0612" }
      ]
    },
    {
      title: "蜂蜜的针", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=ENE6dXy8MUNY3D78ccxJyw", code: "0612" }
      ]
    },
    {
      title: "爱情抓马", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=TOs5-y3fDiLd0VRi7Cterg", code: "0612" }
      ]
    },
    {
      title: "准备好了没2", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=7Eqqj07lPCb_61Wbv0DSrQ", code: "0612" }
      ]
    },
    {
      title: "东北往事极恶不赦", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=VE5sTV3qEsY9n46kX-ZoBQ", code: "0612" }
      ]
    },
    {
      title: "星河入梦", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=n4fbzoS2sX6KzrbSsK8jIw", code: "0612" }
      ]
    },
    {
      title: "飞驰人生3", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=5OyUr1NvAGB4Z8WJcj5ZyQ", code: "0612" }
      ]
    },
    {
      title: "熊猫计划之部落奇遇记", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=wuBmacISGSMaQzzKPSRFfA", code: "0612" }
      ]
    },
    {
      title: "寻龙诀觅踪", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=F0839sqf_9ng5JLbxxzkog", code: "0612" }
      ]
    },
    {
      title: "追恶", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=QisqneqRcFaPhUFpHMbT8g", code: "0612" }
      ]
    },
    {
      title: "盖世神功", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=F0839sqf_9ng5JLbxxzkog", code: "0612" }
      ]
    },
    {
      title: "阿凡达火与烬", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=blg2G4iSLoO5ByhW7STH7Q", code: "0612" }
      ]
    },
    {
      title: "马腾你别走", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=YzOYAOKq4Lowm5hmZqXslA", code: "0612" }
      ]
    },
    {
      title: "扫恶2026", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=uGc-0ey-nCI2FlSAK3lGWQ", code: "0612" }
      ]
    },
    {
      title: "飞行家", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=TIRGXuWNmv-JVYwvEwJPEw", code: "0612" }
      ]
    },
    {
      title: "用武之地", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=P_gHOcxmMCT0UHPVflX4bg", code: "0612" }
      ]
    },
    {
      title: "我的朋友安德烈", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=kXNQ9SgXUNuksxNySH2_AA", code: "0612" }
      ]
    },
    {
      title: "不过是上班", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=1fwBX_9Ku67Oy6MRnuDmbQ", code: "0612" }
      ]
    },
    {
      title: "东京出租车", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=q9VeF7JcREReDhQuKADKdg", code: "0612" }
      ]
    },
    {
      title: "狂野时代", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=0DRsJqEer9sYHy_jsNZbvQ", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/31868b13bca5", code: "" }
      ]
    },
    {
      title: "匿杀", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=eGguYB6u19AfxSJ0sLAYUA", code: "0612" }
      ]
    },
    {
      title: "得闲谨制", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=rtfpM0GOAMNhQLztTm4ZLA", code: "0612" }
      ]
    },
    {
      title: "过家家", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=VLcrw0TgF4cmXJDoViwVGg", code: "0612" }
      ]
    },
    {
      title: "你行你上", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=1aeeEGEjukBKrHftcdUq9Q", code: "0612" }
      ]
    },
    {
      title: "东北警察故事3", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=zVLA_PDzfdybepFIWNY6rw", code: "0612" }
      ]
    },
    {
      title: "爆水管", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=rKDb9QsDAXhlB-MODS5Wow", code: "0612" }
      ]
    },
    {
      title: "寻秦记", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=iK4GZTvCLR1LdvWZ8t3QLg", code: "0612" }
      ]
    },
    {
      title: "菜肉馄饨", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=U3qlNUzBWt4eYNlNqM2GfQ", code: "0612" }
      ]
    },
    {
      title: "点到为止", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=HvBNTUlIRe5e6XDIQMADNA", code: "0612" }
      ]
    },
    {
      title: "蛛仙", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=dvmlwBt6LCmR9ZRkMBV_Vg", code: "0612" }
      ]
    },
    {
      title: "内幕", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=VcRuIPPOrt1KsOdy1OxMAw", code: "0612" }
      ]
    },
    {
      title: "三滴血", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=AqUwRwOupP2lEgL26Rt0zA", code: "0612" }
      ]
    },
    {
      title: "Y计划", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=9AcN9D0dUahpxXB1y0jucw", code: "0612" }
      ]
    },
    {
      title: "东北恋哥3", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=J1SjN9G0jAkabX4LaRHzeg", code: "0612" }
      ]
    },
    {
      title: "家弑服务", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=-qOdaQI_lJHXUK_ek_pJ7w", code: "0612" }
      ]
    },
    {
      title: "极限审判", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=_K5i4TZ9Znd28xsXE9v8tw", code: "0612" }
      ]
    },
    {
      title: "惊变28年2", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=-bnxORkZjIa4BOceUciMAg", code: "0612" }
      ]
    },
    {
      title: "庇护之地", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=is7kvjUQ6YRIsGkkImTh0w", code: "0612" }
      ]
    },
    {
      title: "密探", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=w4hv9CGKU53CE1a5-lBWOQ", code: "0612" }
      ]
    },
    {
      title: "旁观者", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=5m7eOlF--qMbXMtmwmy7vg", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/bc1ee8d063cd", code: "" }
      ]
    },
    {
      title: "极限城市", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=_ZQ6acAJpTKB4GXjW2C2bw", code: "0612" }
      ]
    },
    {
      title: "三国的星空", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=q3SR_h-V0L5T_2f-ZXXG9g", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/de4866edc7ea", code: "" }
      ]
    },
    {
      title: "大蛇5怪兽都市", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=YS5Qbm3nVlFs1P2HYfdV-Q", code: "0612" }
      ]
    },
    {
      title: "新狂蟒之灾", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=uq_F8O6gwLzjx4d1n7R4fw", code: "0612" }
      ]
    },
    {
      title: "情圣3", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=aDuS8jMIq8uIJ_nircV-Og", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/31e48d1f6658", code: "" }
      ]
    },
    {
      title: "海绵宝宝深海大冒险", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=zRYfy9bJT7dRFe37qFZyiQ", code: "0612" }
      ]
    },
    {
      title: "风林火山", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=v1TwLd-WnkdhzgZ7dZpY9A", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/1d2068659e35", code: "" }
      ]
    },
    {
      title: "震耳欲聋", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=yEF7J5pdARzq8re9OHtC6Q", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/8bfa0a5737b2", code: "" }
      ]
    },
    {
      title: "浪浪人生", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=NNibnZimGTWIzDzNAFAgjQ", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/0afa895f7f90", code: "" }
      ]
    },
    {
      title: "疯狂动物城2", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=2ef1Wi0H83Ib0s3oqL3O2g", code: "0612" }
      ]
    },
    {
      title: "鬼灭之刃无限城篇", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=t_lbU5Tqwh8tfewF5yAGDg", code: "0612" }
      ]
    },
    {
      title: "即兴谋杀", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=QlcYCXRiq2wLoQhKiy6DiQ", code: "0612" }
      ]
    },
    {
      title: "志愿军浴血和平", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=pE3ZFaX3EitmOSijvh8U_Q", code: "0612" }
      ]
    },
    {
      title: "铁血战士杀戮之地", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=WwBhiJd3aeHm-rgtcLGVlA", code: "0612" }
      ]
    },
    {
      title: "喜羊羊与灰太狼异国破晓", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=q4p1wJi2CDjWs7x6kupblw", code: "0612" }
      ]
    },
    {
      title: "731", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=zbBW_iob-TZaRgmvUUswUg", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/4e20d21f3f47", code: "" }
      ]
    },
    {
      title: "惊天魔盗团3", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=VZ7ZWFvOZHMqkoKqpO29SQ", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/e2ab0c4b519b", code: "" }
      ]
    },
    {
      title: "巨洪", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=ah8ITlTSrvssD6LG2ZTquQ", code: "0612" }
      ]
    },
    {
      title: "狄仁杰之彼岸奇花", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=-8bBP8JWcxl1oJ1fXNMO2g", code: "0612" }
      ]
    },
    {
      title: "刺杀小说家2", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=3i7hPb9M60W-TgONriLIxA", code: "0612" }
      ]
    },
    {
      title: "猎杀游戏", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=beU4ulA5HjgFIOC_4hdgwA", code: "0612" }
      ]
    },
    {
      title: "下一个台风", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=nTNjpHwYWZaHuBaTrgqXJw", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/018ea9a7df44", code: "" }
      ]
    },
    {
      title: "奇遇", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=4O8mp0FfHOIZcZL9Ds85fQ", code: "0612" }
      ]
    },
    {
      title: "拯救地球", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=_sb9mUgfGVhrcLV5cHqi9A", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/bfe96c22c71b", code: "" }
      ]
    },
    {
      title: "日掛中天", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=Ff7z7516PmZJdsDRqicz-Q", code: "0612" }
      ]
    },
    {
      title: "左撇子女孩", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=3YGwKHSJkubJS1LJ3tjzcQ", code: "0612" }
      ]
    },
    {
      title: "利刃出鞘3", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=4svdJktZAqdxpt8Xwa6gRw", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/c5d05194b849", code: "" }
      ]
    },
    {
      title: "运钞大劫案", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=gEGTfkhMvG-ytBQP8cJrkQ", code: "0612" }
      ]
    },
    {
      title: "清算", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=C2UQc8kLP2vxyoGxMEnfmw", code: "0612" }
      ]
    },
    {
      title: "情感价值", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=o8eG--OpCESGPdQg8VOwhQ", code: "0612" }
      ]
    },
    {
      title: "驱魔龙族马小玲", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=3-ceYnyVEkmI6-k58ehMRw", code: "0612" }
      ]
    },
    {
      title: "阳光俱乐部", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=QkFvbyGZUEoVgKMyZ8ddcA", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/b739596fa057", code: "" }
      ]
    },
    {
      title: "人偶之家", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=7cLDMDXh_ogqLZGdFiPnjw", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/898ddbeb3fa9", code: "" }
      ]
    },
    {
      title: "浪浪山小妖怪", cat: "movie", status: "",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=QjKsv-4B0pm1kruU1mTD1w", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/3fcb7c81192e", code: "" }
      ]
    },

  ]
};