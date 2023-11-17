<template><div><h1 id="时区" tabindex="-1"><a class="header-anchor" href="#时区" aria-hidden="true">#</a> 时区</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> java、时区</p>
</blockquote>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>为了照顾到各地区的使用方便，又使其他地方的人容易将本地的时间换算到别的地方时间上去。有关国际会议决定将地球表面按经线从东到西，划成一个个区域，并且规定相邻区域的时间相差1小时。<strong>向西减1小时，向东加1小时</strong>，跨过几个区域就加或减几小时。</p>
<p>现今全球共分为24个时区。实际上，常常1个国家或1个省份同时跨着2个或更多时区，为了照顾到行政上的方便，常将1个国家或1个省份划在一起。所以时区并不严格按南北直线来划分，而是按自然条件来划分。例如，<strong>中国幅员宽广，差不多跨5个时区，但为了使用方便简单，实际上在只用东八时区的标准时即北京时间为准。</strong></p>
<h2 id="时区划分" tabindex="-1"><a class="header-anchor" href="#时区划分" aria-hidden="true">#</a> 时区划分</h2>
<p>1884年在华盛顿召开的一次国际经度会议（又称国际子午线会议）上，规定将全球划分为24个时区（东、西各12个时区）。规定<strong>英国（格林尼治天文台旧址）为中时区（零时区）</strong>、东1—12区，西1—12区。每个时区横跨经度15度，时间正好是1小时。最后的东、西第12区各跨经度7.5度，以东、西经180度为界。每个时区的中央经线上的时间就是这个时区内统一采用的时间，称为区时，相邻两个时区的时间相差1小时。</p>
<h2 id="计时方式" tabindex="-1"><a class="header-anchor" href="#计时方式" aria-hidden="true">#</a> 计时方式</h2>
<p>计时方式分为：<strong>UTC、GMT</strong></p>
<ul>
<li>UTC：协调世界时，又称世界统一时间。</li>
<li>GMT：格林威治平时</li>
</ul>
<h2 id="时区格式" tabindex="-1"><a class="header-anchor" href="#时区格式" aria-hidden="true">#</a> 时区格式</h2>
<table>
<thead>
<tr>
<th>时区格式</th>
<th>样例</th>
</tr>
</thead>
<tbody>
<tr>
<td city="">{area}/</td>
<td>Asia/Shanghai</td>
</tr>
<tr>
<td HH:mm="">{UTC}{+/-}</td>
<td>UTC+08:00</td>
</tr>
<tr>
<td HH:mm="">{GMT}{+/-}</td>
<td>GMT+08:00</td>
</tr>
</tbody>
</table>
<h2 id="时区处理" tabindex="-1"><a class="header-anchor" href="#时区处理" aria-hidden="true">#</a> 时区处理</h2>
<ul>
<li>LocalDateTime</li>
</ul>
<p>LocalDateTime可同时指定所在的时区和目标时区，可直接转换UTC时间</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
    <span class="token doc-comment comment">/**
     * 字符串dateTime转LocalDataTime
     *
     * <span class="token keyword">@param</span> <span class="token parameter">dateTime</span> 日期，如：2020-11-11 09：00：00
     * <span class="token keyword">@return</span> LocalDateTime类型
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">LocalDateTime</span> <span class="token function">asLocalDataTime</span><span class="token punctuation">(</span><span class="token class-name">String</span> dateTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isAnyEmpty</span><span class="token punctuation">(</span>dateTime<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        dateTime <span class="token operator">=</span> dateTime<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"T"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>dateTime<span class="token punctuation">)</span>
                <span class="token comment">// 当前时区</span>
                <span class="token punctuation">.</span><span class="token function">atZone</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token string">"UTC"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toZoneId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// 目标时区</span>
                <span class="token punctuation">.</span><span class="token function">withZoneSameInstant</span><span class="token punctuation">(</span><span class="token class-name">ZoneId</span><span class="token punctuation">.</span><span class="token function">systemDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocalDateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


