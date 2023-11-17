<template><div><h1 id="linux安装docker-compose" tabindex="-1"><a class="header-anchor" href="#linux安装docker-compose" aria-hidden="true">#</a> linux安装docker-compose</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> docker-compose、centOs8</p>
</blockquote>
<h2 id="下载路径" tabindex="-1"><a class="header-anchor" href="#下载路径" aria-hidden="true">#</a> 下载路径</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 下载版本
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose


# 执行权限
chmod +x /usr/local/bin/docker-compose

# 创建软连接
sudo ln -s /usr/local/bin/docker-compose ~/app/docker-compose

# 查看是否安装成功
ll /usr/local/bin

# 查看版本
docker-compose --version

# 卸载
rm /usr/local/bin/docker-compose 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


