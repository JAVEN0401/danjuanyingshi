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
   ============================================ */

const SITE = {
  title: "每日梗~~店.视.剧",
  notice: "新的基本都有！找不到的可以加+V：danjuanyingshi 私信免费代找，后续会更新资源库（所有资源提取码统一 0612）",

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
      title: "嫁金钗", cat: "tv", status: "更新至22集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=J8HQw358u02ILUk2fHA42g", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/ca29d33580c8", code: "" }
      ]
    },
    {
      title: "小城良方", cat: "tv", status: "更新至20集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=0UYsf7s-h81Etxt59WwmlQ", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/616770bdf4b2", code: "" }
      ]
    },
    {
      title: "玉簪秋", cat: "tv", status: "更新至32集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=8tD6YW2EWSDcqOP8OlNmtw", code: "0612" }
      ]
    },
    {
      title: "尚公主", cat: "tv", status: "更新至16集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=JFokrWARYkWLMiwBt8-F-Q", code: "0612" }
      ]
    },
    {
      title: "伟大的长征", cat: "tv", status: "更新至33集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=CnfZipxhk3zRUXABgGBf1w", code: "0612" }
      ]
    },
    {
      title: "解梦", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/s/1qScTwg51k544u5fLXbu3Jw?pwd=2323", code: "2323" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/6e976c713dbd", code: "" }
      ]
    },
    {
      title: "美人余", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/netdisk/share?surl=F3yvChix4qzvO-UZxBH1ng", code: "0612" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/591bf705e226", code: "" }
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
    }
  ]
};
