<template><div><h1 id="windows下安装vmware" tabindex="-1"><a class="header-anchor" href="#windows下安装vmware" aria-hidden="true">#</a> windows下安装vmware</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> vmware安装</p>
</blockquote>
<h2 id="下载路径" tabindex="-1"><a class="header-anchor" href="#下载路径" aria-hidden="true">#</a> 下载路径</h2>
<ul>
<li>vmware</li>
</ul>
<p><a href="https://customerconnect.vmware.com/cn/downloads/info/slug/desktop_end_user_computing/vmware_workstation_pro/16_0" target="_blank" rel="noopener noreferrer">https://customerconnect.vmware.com/cn/downloads/info/slug/desktop_end_user_computing/vmware_workstation_pro/16_0<ExternalLinkIcon/></a></p>
<p>这里下载需要注册vmware用户：</p>
<figure><img src="@source/docs/部署/image/2023-07-09-11-13-45.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>【地区】我填的是 “tomas”。
【名字】【姓氏】按情况填写。
【手机】“代码块”可不用操作，手机我填的是  13312312312
【邮箱】电子邮箱必须要真实，因为会给你发激活链接

** 输入验证码的时候 ** 需要将浏览器语言切换成英文，中文模式会有问题
![](image/2023-07-09-11-11-52.png)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dll未安装" tabindex="-1"><a class="header-anchor" href="#dll未安装" aria-hidden="true">#</a> DLL未安装</h2>
<p>安装过程报错：</p>
<figure><img src="@source/docs/部署/image/2023-07-09-11-28-43.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>不要关闭上面截图对话框（不要点击确定）</li>
<li>win + R 快捷键 然后输入 %temp%</li>
<li>找到末尾为 ~setup的文件夹<br>
<img src="@source/docs/部署/image/2023-07-09-11-30-32.png" alt="" loading="lazy"></li>
<li>点击VMwareWorkstation.msi 完成安装</li>
<li>点击了VMwareWorkstation.msi  出现了安装界面，将报错界面点击确定关闭</li>
</ul>
<p>错误分析：<br>
查看VMware 的日志文件（temp目录下的）vminst.log 文件</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<ul>
<li>安装位置修改</li>
</ul>
<figure><img src="@source/docs/部署/image/2023-07-09-11-36-17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>vmware发生无误，安装提前结束</li>
</ul>
<p>问题很奇怪，上午尝试了15-17的版本，全部提前结束。下午尝试了14无问题，重新下载16版本正常安装。<br>
可重启电脑尝试</p>
<h2 id="序列号" tabindex="-1"><a class="header-anchor" href="#序列号" aria-hidden="true">#</a> 序列号</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ZF3R0-FHED2-M80TY-8QYGC-NPKYF

YF390-0HF8P-M81RQ-2DXQE-M2UT6

ZF71R-DMX85-08DQY-8YMNC-PPHV8

使用第一个激活成功

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


