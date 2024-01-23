---
icon: pen-to-square
date: 2023-11-17 16:59
category:
  - 部署
tag:
  - vuepress
---

登陆 ​ ​Github​​
打开 github 网站，登陆自己的 github 账号（没有账号的快去注册并面壁思过作为一个优秀的程序员为啥连一个github账号都没有）

接着我们新建两个仓库，

新建仓库一： USERNAME.github.io （不用克隆到本地）
注意！
​​​USERNAME​​ 必须是你 Github 的账号名称，不是你的名字拼音，也不是你的非主流网名，不要瞎起，要保证和Github账号名一模一样！

例如我的 Github 账号名称是 ​​helloworldtang​​



 

 

 

那么新建仓库，Repository name 就填写为：helloworldtang​​.github.io​​



 

 

 

这个仓库建好后，不用克隆到本地，内容更新修改都在下面的仓库中进行。

新建仓库二：随便起一个名字，比如：vuepressBlog （克隆到本地）
这个项目是用来开发博客的，以后只需要改这个项目就够了。

使用工具包的，将 ​ ​vuepress-devkit​​ 中的内容拷贝到 vuepressBlog 文件夹中
自己从头搭建的，将 vuepressBlogDemo 文件夹的内容拷贝到仓库二，并在根目录下创建 deploy.sh 文件，内容如下：
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:USERNAME/USERNAME.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -
```


修改仓库二中的 deploy.sh 发布脚本
把文件中的 USERNAME 改成 Github 账号名，例如我的账号名是 zhangyunchencc，那么就可以改为：

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:zhangyunchencc/zhangyunchencc.github.io.git master
1.
2.
这样仓库二和仓库一就建立了关联。

简单说二者的关系是：仓库一负责显示网站内容，我们不需要改动它；日常开发和新增内容，都在仓库二中，并通过 npm run deploy 命令，将代码发布到仓库一。

在 package.json 文件夹中添加发布命令（使用工具包的请忽略）
"scripts": {
  "deploy": "bash deploy.sh"
}
1.
2.
3.
大功告成，运行发布命令
npm run deploy
1.
此时打开 Github Settings 中下面的链接: ​ ​https://zhangyunchencc.github.io/​​ 即可看到自己的主页啦~



PC 端页面是这样的：


 

 

 

手机端页面是这样的：


 

 

 

六、发布到自己的个人域名
如果你不满足于 ​ ​https://zhangyunchencc.github...​​​ 这样的域名，想要一个自己个人的专属域名，比如 ​ ​http://www.zhangyunchen.cc/​​​ ，毕竟一些大牛（阮一峰 ​ ​http://www.ruanyifeng.com/blog/​​） 都是自己名字的网址哦，很方便很酷呢 😎

下面跟着步骤一步步来就好啦~

购买域名
推荐在 新网​ 或 万网 购买

我是在新网购买的，下面以新网为例，万网是类似的。

购买完成后进入管理后台，点击 ”解析“ 按钮，添加下面两条内容：



 

 

 



 

 

 

注意这里有坑！！！在 万网 购买域名的同学请注意，第二条记录中的 请用 @ 代替，万网不支持

记录值里的 IP 可以通过 ping 自己的域名得到：

ping www.username.github.io
1.
添加 CNAME 文件
在仓库一 USERNAME.github.io 中找到 Settings > Custom domain 把 www.zhangyunchen.cc 添加进去即可。





大功告成，打开 ​ ​https://www.zhangyunchen.cc​​ 看一下吧~~~
七、最后
你需要一些 ​ ​Markdown​​ 语法的基础知识；
你需要一个 ​ ​Github​​ 账号，并在里面创建两个 repo
Github 需要添加 ssh key，遇到问题可以百度解决；
个人博客不只可以用来写技术相关的内容，也可以有自己写的文章、随笔，甚至上传一些照片。
以上，


https://blog.51cto.com/u_15147537/5969516