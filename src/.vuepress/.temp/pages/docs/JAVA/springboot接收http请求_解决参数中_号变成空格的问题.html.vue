<template><div><h1 id="springboot接收http请求-解决参数中-号变成空格的问题" tabindex="-1"><a class="header-anchor" href="#springboot接收http请求-解决参数中-号变成空格的问题" aria-hidden="true">#</a> springboot接收http请求,解决参数中+号变成空格的问题</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> springboot、转码</p>
</blockquote>
<h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2>
<p>前端参数传到后端时，参数经过tomcat校验，<strong>tomcat中Parameters类中convert方法对参数解码</strong>，把&quot;+&quot;替换成空格。</p>
<p>Tomcat的新版本中增加了一个新特性，严格按照 RFC 3986规范进行访问解析，而 RFC 3986规范定义了Url中只允许包含英文字母（a-zA-Z）、数字（0-9）、-_.~4个特殊字符以及所有保留字符(RFC3986中指定了以下字符为保留字符：! * ' ( ) ; : @ &amp; = + $ , / ? # [ ])。</p>
<p>| | tomcat | 加码 | 解码 |<br>
|&quot; &quot;|&quot; &quot;|&quot;+&quot;|&quot; &quot;|<br>
|&quot;+&quot;|&quot; &quot;|&quot;%2B&quot;|&quot;+&quot;|<br>
|&quot;=&quot;|&quot;=&quot;|&quot;%3D&quot;|&quot;=&quot;|</p>
<ul>
<li>Get请求</li>
</ul>
<p>如前端发送的URL中含有“+”那么使用springboot框架接受的参数中 “+”会变成 空格</p>
<ul>
<li>Post请求</li>
</ul>
<p>如前端发送的URL中含有“+”那么使用springboot框架接受的参数中 “+”不会变成 空格</p>
<h2 id="tomcat转换" tabindex="-1"><a class="header-anchor" href="#tomcat转换" aria-hidden="true">#</a> tomcat转换</h2>
<p>主要涉及org.apache.tomcat.util.http.Parameters类中的processParameters方法和convert方法</p>
<h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2>
<ul>
<li>
<p>前端对其进行加码</p>
</li>
<li>
<p>后端使用replace方法, url.replace(&quot; &quot;,&quot;+&quot;);</p>
</li>
</ul>
</div></template>


