<template><div><h1 id="jsonpath" tabindex="-1"><a class="header-anchor" href="#jsonpath" aria-hidden="true">#</a> JsonPath</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> java、Json解析</p>
</blockquote>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>正如XPath解析XML文档一样，JsonPath提供了对Json文档的解析能力。通过使用JsonPath查找Json节点获取数据，JsonPath就是XPath在Json上的使用。</p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2>
<table>
<thead>
<tr>
<th>操作</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>$</td>
<td>查询根元素</td>
</tr>
<tr>
<td>@</td>
<td>过滤器断言处理的当前节点对象，类似java中的this字段</td>
</tr>
<tr>
<td>*</td>
<td>通配符，必要时可用任何地方的名称或数字</td>
</tr>
<tr>
<td>..</td>
<td>递归搜索，在任何地方可以使用名称</td>
</tr>
<tr>
<td>.A</td>
<td>表示一个A子节点</td>
</tr>
<tr>
<td>[A]huo[A,B]</td>
<td>迭代器下标，表示一个或多个数组下标</td>
</tr>
<tr>
<td>[start:end]</td>
<td>数组片段，区间为[start:end)，不包含end</td>
</tr>
<tr>
<td>?()</td>
<td>过滤器表达式，筛选操作</td>
</tr>
</tbody>
</table>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>描述</th>
<th>输出</th>
</tr>
</thead>
<tbody>
<tr>
<td>min()</td>
<td>获取数值类型数组的最小值</td>
<td>Double</td>
</tr>
<tr>
<td>max()</td>
<td>获取数值类型数组的最大值</td>
<td>Double</td>
</tr>
<tr>
<td>avg()</td>
<td>获取数值类型数组的平均值</td>
<td>Double</td>
</tr>
<tr>
<td>stddev()</td>
<td>获取数值类型数组的标准差</td>
<td>Double</td>
</tr>
<tr>
<td>length()</td>
<td>获取数值类型数组的长度</td>
<td>Integer</td>
</tr>
<tr>
<td>sum()</td>
<td>获取数值类型数组的总和</td>
<td>Double</td>
</tr>
</tbody>
</table>
<h2 id="json解析" tabindex="-1"><a class="header-anchor" href="#json解析" aria-hidden="true">#</a> Json解析</h2>
<h3 id="在线网站" tabindex="-1"><a class="header-anchor" href="#在线网站" aria-hidden="true">#</a> 在线网站</h3>
<p><a href="http://jsonpath.com/" target="_blank" rel="noopener noreferrer">http://jsonpath.com/<ExternalLinkIcon/></a></p>
<h3 id="json报文" tabindex="-1"><a class="header-anchor" href="#json报文" aria-hidden="true">#</a> json报文</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    "firstName": "John",
    "lastName": "doe",
    "age": 26,
    "address": {
        "streetAddress": "naist street",
        "city": "Nara",
        "postalCode": "630-0192"
    },
    "phoneNumbers": [
        {
            "type": "iPhone",
            "number": "0123-4567-8888",
            "id": 1
        },
        {
            "type": "home",
            "number": "0123-4567-8910",
            "id": 2
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>$.phoneNumbers[:1].type: 获取phoneNumbers数组中第一个数据</li>
<li>$.address: 获取address节点数据</li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">.</mi><mi>s</mi><mi>u</mi><mi>m</mi><mo stretchy="false">(</mo></mrow><annotation encoding="application/x-tex">.sum(</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">.</span><span class="mord mathnormal">s</span><span class="mord mathnormal">u</span><span class="mord mathnormal">m</span><span class="mopen">(</span></span></span></span>.phoneNumbers[0:].id): 对phoneNumbers的id聚合。<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">.</mi><mi>s</mi><mi>u</mi><mi>m</mi><mo stretchy="false">(</mo></mrow><annotation encoding="application/x-tex">.sum(</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">.</span><span class="mord mathnormal">s</span><span class="mord mathnormal">u</span><span class="mord mathnormal">m</span><span class="mopen">(</span></span></span></span>.phoneNumbers[(*)].id)会报错</li>
</ul>
<h2 id="java引入" tabindex="-1"><a class="header-anchor" href="#java引入" aria-hidden="true">#</a> Java引入</h2>
<h3 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> Maven</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>        &lt;dependency>
            &lt;groupId>com.jayway.jsonpath&lt;/groupId>
            &lt;artifactId>json-path&lt;/artifactId>
            &lt;version>2.8.0&lt;/version>
        &lt;/dependency>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Object document = Configuration.defaultConfiguration().jsonProvider().parse("json数据");
Object value = JsonPath.read(document, "JsonPath表达式");
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


