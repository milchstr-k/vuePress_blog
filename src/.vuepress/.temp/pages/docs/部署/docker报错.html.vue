<template><div><h1 id="docker问题" tabindex="-1"><a class="header-anchor" href="#docker问题" aria-hidden="true">#</a> docker问题</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> docker、问题</p>
</blockquote>
<h2 id="_1-docker-error-response-from-daemon-timeout" tabindex="-1"><a class="header-anchor" href="#_1-docker-error-response-from-daemon-timeout" aria-hidden="true">#</a> 1.docker: Error response from daemon Timeout</h2>
<p>在等待报头时超时，  请求在等待连接时被取消(客户端)。Docker 默认的源为国外官方源，下载速度较慢，可改为国内镜像源。</p>
<p>① 修改docker镜像源，如果没有 daemon.json就新建添加以下内容：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[root@localhost ~]# cd /etc/docker
[root@localhost docker]# ls
daemon.json  key.json
[root@localhost docker]# vim daemon.json 
 
 # 添加以下内容
{
 
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
 
}
 
# 也可以添加多个国内源
{
 
"registry-mirrors": ["http://hub-mirror.c.163.com", "https://registry.docker-cn.com"]
 
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>国内镜像源：</p>
<ul>
<li>网易  <a href="http://hub-mirror.c.163.com" target="_blank" rel="noopener noreferrer">http://hub-mirror.c.163.com<ExternalLinkIcon/></a></li>
<li>中国科技大学  <a href="https://docker.mirrors.ustc.edu.cn" target="_blank" rel="noopener noreferrer">https://docker.mirrors.ustc.edu.cn<ExternalLinkIcon/></a></li>
<li>阿里云  <a href="https://pee6w651.mirror.aliyuncs.com" target="_blank" rel="noopener noreferrer">https://pee6w651.mirror.aliyuncs.com<ExternalLinkIcon/></a></li>
</ul>
<p>② 修改完之后，需要重新启动Docker。（当修改配置文件时候都需要进行重启服务）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[root@localhost docker]# systemctl daemon-reload    # 重新载入 systemd，扫描新的或有变动的单元
[root@km docker]# systemctl restart docker          # 重新启动Docker服务


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


