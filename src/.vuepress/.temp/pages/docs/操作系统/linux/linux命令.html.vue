<template><div><h1 id="linux命令" tabindex="-1"><a class="header-anchor" href="#linux命令" aria-hidden="true">#</a> Linux命令</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> Linux、命令</p>
</blockquote>
<h2 id="进程杀死" tabindex="-1"><a class="header-anchor" href="#进程杀死" aria-hidden="true">#</a> 进程杀死</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
<span class="token comment">// 经过 killall 指令</span>
killall nginx
<span class="token comment">// 经过 pkill 指令，类似于 pgrep + kill</span>
pkill nginx
<span class="token comment">// 经过先查找再 kill 的方法</span>
ps <span class="token operator">-</span>ef <span class="token operator">|</span> grep nginx <span class="token operator">|</span> grep <span class="token operator">-</span>v grep <span class="token operator">|</span> awk '<span class="token punctuation">{</span>print $<span class="token number">2</span><span class="token punctuation">}</span>' <span class="token operator">|</span> xargs kill <span class="token operator">-</span><span class="token number">9</span>
<span class="token comment">// 用 cut -c 来截取指定位置的字符串</span>
ps <span class="token operator">-</span>ef <span class="token operator">|</span> grep nginx <span class="token operator">|</span> grep <span class="token operator">-</span>v grep <span class="token operator">|</span> cut <span class="token operator">-</span>c <span class="token number">11</span><span class="token operator">-</span><span class="token number">15</span> <span class="token operator">|</span> xargs kill <span class="token operator">-</span><span class="token number">9</span>
<span class="token comment">// 经过 pgrep 指令，根据名字找出一切包括该名字的进程号</span>
pgrep nginx <span class="token operator">|</span> xargs kill <span class="token operator">-</span><span class="token number">9</span>
<span class="token comment">// 经过 pidof 指令，根据进程全名找出进程号</span>
pidof nginx <span class="token operator">|</span> kill <span class="token operator">-</span><span class="token number">9</span>
<span class="token comment">// 除了管道符的方法，也可以用指令替换，这样就不用经过 xargs 转化参数了</span>
kill <span class="token operator">-</span><span class="token number">9</span> `pgrep nginx`

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


