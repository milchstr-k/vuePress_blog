import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: '🌈 Java系列',
        icon: "pen-to-square",
        prefix: "java/",
        children: [
          { text: "Java 教程 📚", icon: "pen-to-square", link: "1" },
        ],
      },
      {
        text: '⚡ Python系列',
        icon: "pen-to-square",
        prefix: "python/",
        children: [
          { text: "Python 教程 📚", icon: "pen-to-square", link: "1" },
        ],
      }
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: '⛱️ 博客',
    link: 'www.baidu.com',
    target: '_blank',
    rel: ''
  }
]);
