<template><div><h1 id="报错" tabindex="-1"><a class="header-anchor" href="#报错" aria-hidden="true">#</a> 报错</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> java、报错</p>
</blockquote>
<h2 id="_1-asyncrequesttimeoutexception异常" tabindex="-1"><a class="header-anchor" href="#_1-asyncrequesttimeoutexception异常" aria-hidden="true">#</a> 1. AsyncRequestTimeoutException异常</h2>
<p>原因：响应太慢</p>
<p>spring.mvc.async.request-timeout</p>
<blockquote>
<p>Amount of time before asynchronous request handling times out. If this value is not set, the default timeout of the underlying implementation is used.</p>
</blockquote>
<p>解决；</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>spring:
  mvc:
    async:
      request-timeout: 3600000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：</p>
<p><a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/context/request/async/AsyncRequestTimeoutException.html" target="_blank" rel="noopener noreferrer">Class AsyncRequestTimeoutException<ExternalLinkIcon/></a></p>
<p><a href="https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#spring.mvc.async.request-timeout" target="_blank" rel="noopener noreferrer">spring.mvc.async.request-timeout<ExternalLinkIcon/></a></p>
<blockquote>
<p>设定async请求的超时时间，以毫秒为单位，如果没有设置的话，以具体实现的超时时间为准，比如tomcat的servlet3的话是10秒.</p>
</blockquote>
<hr>
</div></template>


