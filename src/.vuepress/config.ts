import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "milchstraße's Blog",
  description: "vuepress-theme-hope 的博客演示",

  port: 7788,

  theme,


  // Enable it with pwa
  // shouldPrefetch: false,
});
