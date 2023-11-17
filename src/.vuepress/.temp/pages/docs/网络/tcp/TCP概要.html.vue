<template><div><h1 id="tcp-ip协议" tabindex="-1"><a class="header-anchor" href="#tcp-ip协议" aria-hidden="true">#</a> TCP/IP协议</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> 网络、TCP/IP</p>
</blockquote>
<h2 id="诞生" tabindex="-1"><a class="header-anchor" href="#诞生" aria-hidden="true">#</a> 诞生</h2>
<p>TCP/IP是一种<strong>通信协议</strong>，它在1960年美国国防部支持开发的ARPANET网络上所使用。初期的ARPANET只连接了4个局域网，被认为是现代英特网的原型。</p>
<p>当时英特网的主流是<strong>限定于大学和企业等特定机构内部使用局域网</strong>，所以每个机构网络都制作了<strong>各自独立的线路和协议</strong>。这种方式对于各个局域网内部通信来说毫无问题，但涉及到多个局域网连接时就需要对通信方法的统一。</p>
<p>网络通信主要分为两方：<strong>发送方和接收方</strong>，为了让数据能通过线缆、电磁波、红外线传输，发送方需要将文字 Or 图片数据转换为电信号 Or 光信号。接受方需要将信号还原成文字 Or 图片。在还原的过程需要知道当时数据是如何转换信号的，此时将<strong>数据 -&gt; 信号 -&gt; 传送 -&gt; 信号 -&gt; 数据</strong>流程按照统一规则执行，TCP/IP就产生了。</p>
<p>由于很难通过一个协议支持所有工作，所以TCP/IP由多个协议构成。</p>
<h2 id="网络模型" tabindex="-1"><a class="header-anchor" href="#网络模型" aria-hidden="true">#</a> 网络模型</h2>
<p>TCP/TP协议将信息发送和接收划分为五层来完成，即:<strong>应用层、传输层、网络层、数据链路层、物理层</strong>。</p>
<h3 id="应用层" tabindex="-1"><a class="header-anchor" href="#应用层" aria-hidden="true">#</a> 应用层</h3>
<p>应用层是计算机网络体系结构的最顶层, 我们电脑和手机上使用的应用软件都是在应用层实现的。应用层类似于快递员角色，寄快递的时候只需要将包裹交给快递员，由他负责传输，我们是不关心快递如何运输。</p>
<p>应用层工作在操作系统中的<strong>用户态</strong>, 传输层及以下工作在<strong>内核态</strong></p>
<h5 id="协议" tabindex="-1"><a class="header-anchor" href="#协议" aria-hidden="true">#</a> 协议</h5>
<figure><img src="@source/docs/网络/TCP/image/应用层协议.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
<h3 id="传输层" tabindex="-1"><a class="header-anchor" href="#传输层" aria-hidden="true">#</a> 传输层</h3>
<p>传输层上有两种协议：TCP、UDP。</p>
<p>TCP以<strong>安全可靠</strong>为宗旨的协议，数据在运输过程中发生损坏，或者因某种原因无法到达时，可以再次发送数据。因此TCP协议被用在<strong>电子邮件、www服务</strong>。</p>
<p>UDP以<strong>迅速传输数据</strong>为宗旨，只负责持续发送数据，不负责之后的跟踪。UDP主要用在对数据实时性要求较高的IP电话及流式传输等。</p>
<p>传输层将应用层数据进行<strong>分块</strong>，当数据无法到达接受方时，只需要重新发送这⼀个分块，⽽不⽤重新发送整个数据包。传输层的数据包⼤⼩超过 **MSS（TCP 最⼤报⽂段⻓度）**时需要进行分块。在 TCP 协议中，我们把每个分块称为⼀个 TCP 段（TCP Segment）</p>
<h4 id="端口号" tabindex="-1"><a class="header-anchor" href="#端口号" aria-hidden="true">#</a> 端口号</h4>
<p>端口号范围：0 ~ 65535。其中0 ~ 1023为通信端口。</p>
<table>
<thead>
<tr>
<th>服务</th>
<th>应用层协议</th>
<th>端口号</th>
<th>传输层协议</th>
</tr>
</thead>
<tbody>
<tr>
<td>WWW</td>
<td>HTTP</td>
<td>80</td>
<td>TCP/UDP</td>
</tr>
</tbody>
</table>
<h3 id="网络层" tabindex="-1"><a class="header-anchor" href="#网络层" aria-hidden="true">#</a> 网络层</h3>
<p>网络层使用的是IP协议，IP协议是无连接型协议，相当于传输层的UDP。为了增加网络层的可靠性，跟踪IP的协议：ICMP产生了。当收件人没有收到信息等问题发生时，ICMP向发件人发送通知信息。</p>
<h4 id="传递数据链路层" tabindex="-1"><a class="header-anchor" href="#传递数据链路层" aria-hidden="true">#</a> 传递数据链路层</h4>
<p>IP协议将运输层报文作为数据部分，追加上<strong>IP包头（包含收件人IP地址等）<strong>后组装成IP报文，当IP报文超过数据链路层能处理的数据大小（MTU-以太⽹中⼀般为 1500 字节）时，将数据</strong>分割</strong>后再追加包头。</p>
<h4 id="尽力服务数据转发" tabindex="-1"><a class="header-anchor" href="#尽力服务数据转发" aria-hidden="true">#</a> 尽力服务数据转发</h4>
<p>IP数据包转发采用尽力服务模式，尽力服务指<strong>会努力，但不保证结果</strong>。会检查包头是否损坏及接受地址是否存在，但不会实施再次发送处理。</p>
<h4 id="采用最佳路径发送" tabindex="-1"><a class="header-anchor" href="#采用最佳路径发送" aria-hidden="true">#</a> 采用最佳路径发送</h4>
<p>IP中根据收件人路程和通信情况等，判断出当时最快的传递路径，然后发出。IP协议中寻址功能先匹配到相同的网络号，在去找对应主机。另⼀个重要要的能⼒就是路由。实际场景中，两台设备并不是⽤⼀条⽹线连接起来的，⽽是通过很多⽹关、路由器、交换机等众多⽹络设备连接起来的，那么就会形成很多条⽹络的路径，因此当数据包到达⼀个⽹络节点，就需要通过算法决定下⼀步⾛哪条路径</p>
<h4 id="交给传输层" tabindex="-1"><a class="header-anchor" href="#交给传输层" aria-hidden="true">#</a> 交给传输层</h4>
<p>收件人确认IP包头中写入的收件人地址（IP地址），只收取发给自己的数据，然后交给传输层指定的协议。如果一个大数据被分割成几部分发送的，则组装好之后再传递。</p>
<h3 id="数据链路层" tabindex="-1"><a class="header-anchor" href="#数据链路层" aria-hidden="true">#</a> 数据链路层</h3>
<p>网络链接方式有多种：<strong>总线型、环形、星型、网状型</strong>。同一种方法链接起来的整体叫做<strong>数据链路</strong>。消弭不同数据链路之间的不同，让网络层及以上的层发觉不到不同点，就是数据链路层的职责。</p>
<h4 id="桥梁" tabindex="-1"><a class="header-anchor" href="#桥梁" aria-hidden="true">#</a> 桥梁</h4>
<p>链接网络层与物理层的桥梁，对网络层传输的数据追加包头后形成<strong>帧</strong>。</p>
<h3 id="物理层" tabindex="-1"><a class="header-anchor" href="#物理层" aria-hidden="true">#</a> 物理层</h3>
</div></template>


