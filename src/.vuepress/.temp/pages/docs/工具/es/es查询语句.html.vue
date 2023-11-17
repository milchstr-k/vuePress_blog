<template><div><hr>
<p>icon: pen-to-square<br>
date: 2023-09-14 10:56<br>
category:</p>
<ul>
<li>工具<br>
tag:</li>
<li>es</li>
</ul>
<hr>
<h1 id="时区" tabindex="-1"><a class="header-anchor" href="#时区" aria-hidden="true">#</a> 时区</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> es、查询</p>
</blockquote>
<h2 id="_1-es分词器" tabindex="-1"><a class="header-anchor" href="#_1-es分词器" aria-hidden="true">#</a> 1. ES分词器</h2>
<p>在学习查询语法之前有必要带大家了解一下ES的分词器。因为这是题主认为ES搜索引擎最大的特点了，它查询速度之所以这么快也和这个有很大关系。但更重要的是，如果我们不了解ES会对你存储的索引文本或者查询query进行分词，后面的语法你将很难理解。</p>
<p>对于我们存入ES索引（Index）中的各个字段（Term），ES内部都会有一个分词器对其进行分词，然后将这个分词结果存储起来，方便你未来的查询使用，这个分词器我们也可以直接很方便的调用，只要访问其_analyze即可：</p>
<p>POST <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/_analyze<br>
{<br>
&quot;analyzer&quot;: &quot;standard&quot;,<br>
&quot;text&quot;: &quot;This is a test doc&quot;<br>
}<br>
这里需要指定一个分词器，ES默认的分词器是standard，不过只支持英文分词，如果你用它来对中文进行分词的话会直接按字拆分，有一些中文分词器可以下载使用，像ik或者jieba之类的，这里便不去介绍如何安装了，感兴趣的可以查阅相关文章。</p>
<p>回到正题，我们用上述的分词请求返回的结果如下：</p>
<p>{<br>
&quot;tokens&quot;: [<br>
{<br>
&quot;token&quot;: &quot;this&quot;,<br>
&quot;start_offset&quot;: 0,<br>
&quot;end_offset&quot;: 4,<br>
&quot;type&quot;: &quot;<ALPHANUM>&quot;,<br>
&quot;position&quot;: 0<br>
},<br>
{<br>
&quot;token&quot;: &quot;is&quot;,<br>
&quot;start_offset&quot;: 5,<br>
&quot;end_offset&quot;: 7,<br>
&quot;type&quot;: &quot;<ALPHANUM>&quot;,<br>
&quot;position&quot;: 1<br>
},<br>
{<br>
&quot;token&quot;: &quot;a&quot;,<br>
&quot;start_offset&quot;: 8,<br>
&quot;end_offset&quot;: 9,<br>
&quot;type&quot;: &quot;<ALPHANUM>&quot;,<br>
&quot;position&quot;: 2<br>
},<br>
{<br>
&quot;token&quot;: &quot;test&quot;,<br>
&quot;start_offset&quot;: 10,<br>
&quot;end_offset&quot;: 14,<br>
&quot;type&quot;: &quot;<ALPHANUM>&quot;,<br>
&quot;position&quot;: 3<br>
},<br>
{<br>
&quot;token&quot;: &quot;doc&quot;,<br>
&quot;start_offset&quot;: 15,<br>
&quot;end_offset&quot;: 18,<br>
&quot;type&quot;: &quot;<ALPHANUM>&quot;,<br>
&quot;position&quot;: 4<br>
}<br>
]<br>
}<br>
​可以看到我们的句子就被分词器这样做好了分词，还有偏移量之类的信息。</p>
<p>这里只是带大家看一下ES是如何做到分词的，我们平时查询的话自己是用不到分词的，这些分词都是在保存索引时ES自动分好存储起来的。</p>
<h2 id="_2-es查询" tabindex="-1"><a class="header-anchor" href="#_2-es查询" aria-hidden="true">#</a> 2. ES查询</h2>
<p>下面介绍一下ES常用的几种查询（题主只介绍常用的，一些复杂用法可能不会都介绍全，大家在实际学习和工作中遇到了再去官方文档中查就好啦）。</p>
<h3 id="_2-1-match查询" tabindex="-1"><a class="header-anchor" href="#_2-1-match查询" aria-hidden="true">#</a> 2.1 match查询</h3>
<p>ES的查询有一个很大的特点就是分词。所以大家在使用ES的过程中脑子要始终有这么一个意识，你要查找的text是通过分词器分过词的，所以你去匹配的实际上是一个个被分词的片段。而你搜索的query也有可能会被分词，match就是一种会将你搜索的query进行分词的查询方法。我们结合例子来看！</p>
<p>比如我们要查询的索引结构如下：</p>
<p>{<br>
&quot;_index&quot;: &quot;textbook&quot;,<br>
&quot;_id&quot;: &quot;kIwXeYQB8iTYJNkI986Y&quot;,<br>
&quot;_source&quot;: {<br>
&quot;bookName&quot;: &quot;This is a test doc&quot;,<br>
&quot;author&quot;: &quot;老坛&quot;,<br>
&quot;num&quot;: 20<br>
}<br>
}<br>
_index代表索引名称，_id代表该条数据唯一id，_source代表该条数据具体的结构。</p>
<p>这里我们通过bookName字段来查询。</p>
<p>输入query语句如下：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;match&quot;: {<br>
&quot;bookName&quot;:&quot;test&quot;<br>
}<br>
}<br>
}<br>
该条语句代表用match方式搜索索引为textbook中bookName可以匹配到test的语句。因为：</p>
<p>&quot;bookName&quot;: &quot;This is a test doc&quot;<br>
原文被分词器分词后包含test这个词语，所以可以正常被匹配出来。</p>
<p>这个例子比较简单，我们换个复杂一点的例子：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;match&quot;: {<br>
&quot;bookName&quot;:&quot;my test&quot;<br>
}<br>
}<br>
}<br>
大家认为这个能否被匹配出来呢？</p>
<p>原文中根本就没有my这个词语，那怎么被匹配出来？但实际上是可以匹配出来的。</p>
<p>原因是match查询里，会对你查询的query也进行分词，也就是会将你的&quot;my test&quot;进行分词，得到my与test两个词语，然后用这两个词语分别去匹配文本，发现虽然my匹配不到，但是test可以匹配到，所以依然可以查出来。这个和我们传统的搜索方式确实存在差异，大家要注意。</p>
<p>那这种搜索方式存在的价值是什么呢？其实还有蛮大用处的。比如我们的ES库存储的是很多的英文好词好句，然后用户想提高自己的英文写作，因此想搜索出一些比较好的表达加在自己的文章中，那这个时候对于用户来讲，严格的匹配方式大概率什么都搜不到，但是像match这样的搜索方式便非常合适。例如有个好句是这样的：</p>
<p>If at first you don't succeed, try again.<br>
然后用户用下面的方式搜索：</p>
<p>If you don't success<br>
用match就可以很好的匹配出来。</p>
<h3 id="_2-2-match-phrase查询" tabindex="-1"><a class="header-anchor" href="#_2-2-match-phrase查询" aria-hidden="true">#</a> 2.2 match_phrase查询</h3>
<p>既然match的限制比较小，那如果我们需要这个限制更强一点用什么方式呢？match_phrase便是一个比较不错的选择。match_phrase和match一样也是会对你的搜索query进行分词，但是，不同的是它不是匹配到某一处分词的结果就算是匹配成功了，而是需要query中所有的词都匹配到，而且相对顺序还要一致，而且默认还是连续的，如此一来，限制就更多了。我们还是举个例子。比如还是刚刚的索引数据：</p>
<p>{<br>
&quot;_index&quot;: &quot;textbook&quot;,<br>
&quot;_id&quot;: &quot;kIwXeYQB8iTYJNkI986Y&quot;,<br>
&quot;_source&quot;: {<br>
&quot;bookName&quot;: &quot;This is a test doc&quot;,<br>
&quot;author&quot;: &quot;老坛&quot;,<br>
&quot;num&quot;: 20<br>
}<br>
}<br>
如果我们还用刚刚的方式搜索：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;match_phrase&quot;: {<br>
&quot;bookName&quot;:&quot;my test&quot;<br>
}<br>
}<br>
}<br>
这次是匹配不到结果的。那么怎样才能匹配到结果呢？只能是搜索原文中的连续字串：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;match_phrase&quot;: {<br>
&quot;bookName&quot;:&quot;is a test&quot;<br>
}<br>
}<br>
}<br>
这样是可以匹配到结果的。但是如此一来限制可能太大了一点，所以官方还给了一个核心餐宿可以调整搜索的严格程度，这个参数叫slop，我们举个例子：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;match_phrase&quot;: {<br>
&quot;bookName&quot;:{<br>
&quot;query&quot;:&quot;is test&quot;,<br>
&quot;slop&quot;:1<br>
}<br>
}<br>
}<br>
}<br>
比如我们将slop置为1，然后搜索&quot;is test&quot;，虽然is test中间省略了一个词语&quot;a&quot;，但是在slop为1的情况下是可以容忍你中间省略一个词语的，也可以搜索出来结果。以此类推，slop为2就可以省略两个词语了。大家可以根据自己的实际情况进行调整。</p>
<p>另外我们可以发现，如果在搜索时添加了辅助参数（比如slop）我们搜索格式的层级要往下扩展一层，之前的</p>
<p>&quot;bookName&quot;:&quot;my test&quot;<br>
要改为：</p>
<p>&quot;bookName&quot;:{<br>
&quot;query&quot;:&quot;is test&quot;,<br>
&quot;slop&quot;:1<br>
}<br>
我们注意一下就好了。</p>
<h3 id="_2-3-multi-match查询" tabindex="-1"><a class="header-anchor" href="#_2-3-multi-match查询" aria-hidden="true">#</a> 2.3 multi_match查询</h3>
<p>有了前面的基础，multi_match比较好理解。实际上就是可以从多个字段中去寻找我们要查找的query：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;multi_match&quot;: {<br>
&quot;query&quot; : &quot;老坛&quot;,<br>
&quot;fields&quot; : [&quot;bookName&quot;, &quot;author&quot;]<br>
}<br>
}<br>
}<br>
比如这里我们是从bookName和author两个字段里去寻找老坛，虽然bookName没有，但是author可以匹配到，那也可以找到数据。所以本质上就是对bookName和author分别做了一次match：</p>
<p>{<br>
&quot;_index&quot;: &quot;textbook&quot;,<br>
&quot;_id&quot;: &quot;kIwXeYQB8iTYJNkI986Y&quot;,<br>
&quot;_source&quot;: {<br>
&quot;bookName&quot;: &quot;This is a test doc&quot;,<br>
&quot;author&quot;: &quot;老坛&quot;,<br>
&quot;num&quot;: 20<br>
}<br>
}</p>
<h3 id="_2-4-term查询" tabindex="-1"><a class="header-anchor" href="#_2-4-term查询" aria-hidden="true">#</a> 2.4 term查询</h3>
<p>term查询也是比较常用的一种查询方式，它和match的唯一区别就是match需要对query进行分词，而term是不会进行分词的，它会直接拿query整体和原文进行匹配。所以不理解的小伙伴使用起来可能会非常奇怪：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;term&quot;: {<br>
&quot;bookName&quot;: &quot;This is a test doc&quot;<br>
}<br>
}<br>
}<br>
当我们用这种方式进行搜索时，明明要搜索的和被搜索的文本一模一样，确就是搜不出来。这就是因为我们去搜的实际上并不是原文本身，而是被分词的原文，在原文被分好的每一个词语里，没有一个词语是：&quot;This is a test doc&quot;，那自然是什么都搜不到了。所以在这种情况下就只能用某一个词进行搜索才可以搜到：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;term&quot;: {<br>
&quot;bookName&quot;: &quot;This&quot;<br>
}<br>
}<br>
}</p>
<h3 id="_2-5-terms查询" tabindex="-1"><a class="header-anchor" href="#_2-5-terms查询" aria-hidden="true">#</a> 2.5 terms查询</h3>
<p>terms查询事实上就是多个term查询取一个交集，也就是要满足多个term查询条件匹配出来的结果才可以查到，所以是比单纯的term条件更为严格了：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;terms&quot;: {<br>
&quot;bookName&quot;: [&quot;This&quot;, &quot;is&quot;]<br>
}<br>
}<br>
}<br>
比如这个例子，是要求原文中既有This这个词，又有is这个词才可以被查到，那按照这个规则我们是可以匹配到数据的：</p>
<p>{<br>
&quot;_index&quot;: &quot;textbook&quot;,<br>
&quot;_id&quot;: &quot;kIwXeYQB8iTYJNkI986Y&quot;,<br>
&quot;_source&quot;: {<br>
&quot;bookName&quot;: &quot;This is a test doc&quot;,<br>
&quot;author&quot;: &quot;老坛&quot;,<br>
&quot;num&quot;: 20<br>
}<br>
}<br>
但是如果改成了一个不存在的词便匹配不到了：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;terms&quot;: {<br>
&quot;bookName&quot;: [&quot;This&quot;, &quot;my&quot;]<br>
}<br>
}<br>
}</p>
<h3 id="_2-6-fuzzy查询" tabindex="-1"><a class="header-anchor" href="#_2-6-fuzzy查询" aria-hidden="true">#</a> 2.6 fuzzy查询</h3>
<p>fuzzy是ES里面的模糊搜索，它可以借助term查询来进行理解。fuzzy和term一样，也不会将query进行分词，但是不同的是它在进行匹配时可以容忍你的词语拼写有错误，至于容忍度如何，是根据参数fuzziness决定的。fuzziness默认是2，也就是在默认情况下，fuzzy查询容忍你有两个字符及以下的拼写错误。即如果你要匹配的词语为test，但是你的query是text，那也可以匹配到。这里无论是错写多写还是少写都是计算在内的。我们同样还是举例说明。</p>
<p>对于索引数据：</p>
<p>{<br>
&quot;_index&quot;: &quot;textbook&quot;,<br>
&quot;_id&quot;: &quot;kIwXeYQB8iTYJNkI986Y&quot;,<br>
&quot;_source&quot;: {<br>
&quot;bookName&quot;: &quot;This is a test doc&quot;,<br>
&quot;author&quot;: &quot;老坛&quot;,<br>
&quot;num&quot;: 20<br>
}<br>
}<br>
如果查询语句为：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;fuzzy&quot;: {<br>
&quot;bookName&quot;:&quot;text&quot;<br>
}<br>
}<br>
}<br>
这时肯定是用text来匹配原文中的每一个词，发现text和test最为接近，但是有一个字符的差异，在默认fuzziness为2的情况下，依然可以匹配出来。</p>
<p>当然这个fuzziness是可以调的，比如：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;fuzzy&quot;: {<br>
&quot;bookName&quot;:{<br>
&quot;value&quot;:&quot;texts&quot;,<br>
&quot;fuzziness&quot;:1<br>
}<br>
}<br>
}<br>
}<br>
在容忍度为1的情况下，如果你想查texts就查不到结果了。</p>
<h3 id="_2-7-range查询" tabindex="-1"><a class="header-anchor" href="#_2-7-range查询" aria-hidden="true">#</a> 2.7 range查询</h3>
<p>range查询时对于某一个数值字段的大小范围查询，比如我这里特意所加的nums字段就是这个时候派上用场的。range的语法设计到了一些关键字：</p>
<p>gte：大于等于<br>
gt：大于<br>
lt：小于<br>
lte：小于等于<br>
GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;: {<br>
&quot;range&quot;: {<br>
&quot;num&quot;: {<br>
&quot;gte&quot;:20,<br>
&quot;lt&quot;:30<br>
}<br>
}<br>
}<br>
}<br>
比如这样的条件就是去查找字段num大于等于20小于30的数据</p>
<p>那我们的数据便可以被查询到：</p>
<p>{<br>
&quot;_index&quot;: &quot;textbook&quot;,<br>
&quot;_id&quot;: &quot;kIwXeYQB8iTYJNkI986Y&quot;,<br>
&quot;_source&quot;: {<br>
&quot;bookName&quot;: &quot;This is a test doc&quot;,<br>
&quot;author&quot;: &quot;老坛&quot;,<br>
&quot;num&quot;: 20<br>
}<br>
}</p>
<h3 id="_2-8-bool查询" tabindex="-1"><a class="header-anchor" href="#_2-8-bool查询" aria-hidden="true">#</a> 2.8 bool查询</h3>
<p>bool查询是上面查询的一个综合，它可以用多个上面的查询去组合出一个大的查询语句，它也有一些关键字：</p>
<p>must：代表且的关系，也就是必须要满足该条件<br>
should：代表或的关系，代表符合该条件就可以被查出来<br>
must_not：代表非的关系，也就是要求不能是符合该条件的数据才能被查出来<br>
例如有这样一个查询：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;:{<br>
&quot;bool&quot;:{<br>
&quot;must&quot;:{<br>
&quot;match&quot;:{<br>
&quot;bookName&quot;:&quot;老坛&quot;<br>
}<br>
},<br>
&quot;should&quot;:{<br>
&quot;term&quot;:{<br>
&quot;author&quot;:&quot;老坛&quot;<br>
},<br>
&quot;range&quot;:{<br>
&quot;num&quot;:{<br>
&quot;gt&quot;:20<br>
}<br>
},<br>
}<br>
}<br>
}<br>
}<br>
这里就要求must里面的match是必须要符合的，但是should里面的两个条件就可以符合一条即可。</p>
<h3 id="_2-9-排序和分页" tabindex="-1"><a class="header-anchor" href="#_2-9-排序和分页" aria-hidden="true">#</a> 2.9 排序和分页</h3>
<p>排序和分页也是建立在上述的那些搜索之上的。排序和分页的条件是和query平级去写的，我们一个一个来看。先举个例子：</p>
<p>GET <a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:prot/textbook/_search<br>
{<br>
&quot;query&quot;:{<br>
&quot;match&quot;:{<br>
&quot;bookName&quot;:&quot;老坛&quot;<br>
}<br>
},<br>
&quot;from&quot;:0,<br>
&quot;size&quot;:100,<br>
&quot;sort&quot;:{<br>
&quot;num&quot;:{<br>
&quot;order&quot;:&quot;desc&quot;<br>
}<br>
}<br>
}<br>
这里关于分页的语句是：</p>
<p>&quot;from&quot;:0,<br>
&quot;size&quot;:100,<br>
它代表的意思是按照页容量为100进行分页，取第一页​。</p>
<p>关于排序的语句是：</p>
<p>&quot;sort&quot;:{<br>
&quot;num&quot;:{<br>
&quot;order&quot;:&quot;desc&quot;<br>
}<br>
}<br>
它需要指定一个字段，然后根据这个字段进行升序或降序。这里我们根据num来进行降序排序，如果想升序就把order的值改为asc就好了。</p>
</div></template>


