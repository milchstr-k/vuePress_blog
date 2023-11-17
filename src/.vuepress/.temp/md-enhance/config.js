import { defineClientConfig } from "@vuepress/client";
import ChartJS from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/book/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "D:/book/node_modules/reveal.js/dist/reveal.css";
import Presentation from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Playground from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/book/node_modules/katex/dist/katex.min.css";
import "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";
import { injectVuePlaygroundConfig } from "D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("D:/book/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
  },
  setup: () => {

  }
});
