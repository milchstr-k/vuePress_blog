export const data = JSON.parse("{\"key\":\"v-2c92bec8\",\"path\":\"/docs/%E5%B7%A5%E5%85%B7/mysql/mysql%E9%94%81.html\",\"title\":\"mysql锁\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"category\":[\"mysql\"],\"tag\":[\"锁\"],\"description\":\"mysql锁 📌 关键词： mysql、锁 数据库种类 数据库锁有排他锁、共享锁、意向锁、自增锁、间隙锁，锁的范围包括行锁、表锁、区间锁。 意向锁、自增锁、间隙锁是mysql内部逻辑锁，排他锁和共享锁是使用过程中用户添加的锁。 排他锁 排他锁也被称为X锁（共享锁是S锁），加锁前需要开启事务，for update语句在事务中有效。如果事务A成功获取锁，其他事务无法对这条记录进行加锁（排他锁、共享锁），可以无锁查询。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/docs/%E5%B7%A5%E5%85%B7/mysql/mysql%E9%94%81.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"milchstraße's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"mysql锁\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"mysql锁 📌 关键词： mysql、锁 数据库种类 数据库锁有排他锁、共享锁、意向锁、自增锁、间隙锁，锁的范围包括行锁、表锁、区间锁。 意向锁、自增锁、间隙锁是mysql内部逻辑锁，排他锁和共享锁是使用过程中用户添加的锁。 排他锁 排他锁也被称为X锁（共享锁是S锁），加锁前需要开启事务，for update语句在事务中有效。如果事务A成功获取锁，其他事务无法对这条记录进行加锁（排他锁、共享锁），可以无锁查询。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Milchstraße\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"锁\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"mysql锁\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Milchstraße\\\",\\\"url\\\":\\\"https://mrhope.site\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"数据库种类\",\"slug\":\"数据库种类\",\"link\":\"#数据库种类\",\"children\":[]},{\"level\":2,\"title\":\"排他锁\",\"slug\":\"排他锁\",\"link\":\"#排他锁\",\"children\":[{\"level\":3,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]}]},{\"level\":2,\"title\":\"共享锁\",\"slug\":\"共享锁\",\"link\":\"#共享锁\",\"children\":[{\"level\":3,\"title\":\"使用\",\"slug\":\"使用-1\",\"link\":\"#使用-1\",\"children\":[]},{\"level\":3,\"title\":\"共享锁升级导致死锁\",\"slug\":\"共享锁升级导致死锁\",\"link\":\"#共享锁升级导致死锁\",\"children\":[]}]},{\"level\":2,\"title\":\"意向锁\",\"slug\":\"意向锁\",\"link\":\"#意向锁\",\"children\":[{\"level\":3,\"title\":\"解决问题\",\"slug\":\"解决问题\",\"link\":\"#解决问题\",\"children\":[]},{\"level\":3,\"title\":\"互斥性\",\"slug\":\"互斥性\",\"link\":\"#互斥性\",\"children\":[]}]},{\"level\":2,\"title\":\"间隙锁\",\"slug\":\"间隙锁\",\"link\":\"#间隙锁\",\"children\":[{\"level\":3,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":3,\"title\":\"解决幻读\",\"slug\":\"解决幻读\",\"link\":\"#解决幻读\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.25,\"words\":976},\"filePathRelative\":\"docs/工具/mysql/mysql锁.md\",\"excerpt\":\"<h1> mysql锁</h1>\\n<blockquote>\\n<p>📌 <strong>关键词：</strong> mysql、锁</p>\\n</blockquote>\\n<h2> 数据库种类</h2>\\n<p>数据库锁有<strong>排他锁、共享锁、意向锁、自增锁、间隙锁</strong>，锁的范围包括<strong>行锁、表锁、区间锁</strong>。</p>\\n<p>意向锁、自增锁、间隙锁是mysql内部逻辑锁，排他锁和共享锁是使用过程中用户添加的锁。</p>\\n<h2> 排他锁</h2>\\n<p>排他锁也被称为X锁（共享锁是S锁），加锁前需要<strong>开启事务</strong>，<strong>for update语句在事务中有效</strong>。如果事务A成功获取锁，其他事务无法对这条记录进行加锁（排他锁、共享锁），可以无锁查询。</p>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
