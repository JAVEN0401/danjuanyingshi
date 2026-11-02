/* ============================================
   站点数据文件 —— 想新增/修改资源，只需编辑这里
   一条资源格式：
   {
     title: "剧名",
     cat: "分类id（见下方 categories，如 tv=电视剧）",
     status: "更新至22集" 或 "完结" 或 "",
     links: [
       { type: "百度网盘", url: "https://pan.baidu.com/...", code: "2323" },
       { type: "夸克网盘", url: "https://pan.quark.cn/...", code: "" }
     ]
   }
   ============================================ */

const SITE = {
  title: "每日梗~~店.视.剧",
  notice: "新的基本都有！找不到的可以加+V：danjuanyingshi 私信免费代找，后续会更新资源库",

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
    {
      title: "嫁金钗", cat: "tv", status: "更新至22集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/s/1OH8sU5dIsIjiO5WoFpqvFQ?pwd=2323", code: "2323" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/ca29d33580c8", code: "" }
      ]
    },
    {
      title: "小城良方", cat: "tv", status: "更新至20集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/s/1_2UgEi2hICupaIW2GjEpOQ?pwd=2323", code: "2323" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/616770bdf4b2", code: "" }
      ]
    },
    {
      title: "玉簪秋", cat: "tv", status: "更新至32集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/s/11IXPZe0Fvyx5bKPfdVVqJA?pwd=2323", code: "2323" }
      ]
    },
    {
      title: "尚公主", cat: "tv", status: "更新至16集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/s/1awcl9m0NMHiHyX8gSlUY4Sw?pwd=2323", code: "2323" }
      ]
    },
    {
      title: "伟大的长征", cat: "tv", status: "更新至33集",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/s/132-s6676C6v6aI9eswjMNQ?pwd=2323", code: "2323" }
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
        { type: "百度网盘", url: "https://pan.baidu.com/s/1S-WABT3XDIV5wORMrSLISQ?pwd=2323", code: "2323" },
        { type: "夸克网盘", url: "https://pan.quark.cn/s/591bf705e226", code: "" }
      ]
    },
    {
      title: "把黑夜点燃", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/s/1EY9dPhIQjmvqHYAZTC0vQg?pwd=2323", code: "2323" }
      ]
    },
    {
      title: "燕燕于飞", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/s/10KMOATheAWBCnXl8NhwfSQ?pwd=2323", code: "2323" }
      ]
    },
    {
      title: "晋剧之王", cat: "tv", status: "完结",
      links: [
        { type: "百度网盘", url: "https://pan.baidu.com/s/1dhmK7y7ZFEjNpdZ5zjCdw?pwd=2323", code: "2323" }
      ]
    }
  ]
};
