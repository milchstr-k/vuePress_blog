<template><div><h1 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> TCP头部</p>
</blockquote>
<h2 id="tcp头部格式" tabindex="-1"><a class="header-anchor" href="#tcp头部格式" aria-hidden="true">#</a> TCP头部格式</h2>
<figure><img src="@source/docs/网络/TCP/image/TCP头部.drawio.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
<p><strong>序列号:</strong> 建立连接时，计算机生成<strong>随机数作为初始值</strong>，通过<strong>SYN包</strong>传给接收端主机，每发送一次数据，就<strong>累加</strong>一次该<strong>数据字节数</strong>的大小。<strong>解决网络包乱序问题</strong>。</p>
<p><strong>确认应答号：</strong> 下一次<strong>期望</strong>收到的数据序列号，发送端收到这个确认应答后认为该序号之前的数据已被正常接收。<strong>解决网络不丢包问题</strong>。</p>
<p><strong>控制位:</strong></p>
<ul>
<li>ACK：为1时，「确认应答」的字段变为有效，TCP 规定除了最初建⽴连接时的 SYN 包之外该位必须设置为 1 。</li>
<li>RST: 为1时，表示TCP连接中出现异常必须强制断开连接</li>
<li>SYN: 为1时，表示希望建⽴连接，并在其「序列号」的字段进⾏序列号初始值的设定。</li>
<li>FIN: 为1时，表示不会再有数据发送，希望断开连接。当通信结束希望断开连接时，通信双⽅的主机之间就可以相互交换 FIN 位为 1 的 TCP 段。</li>
</ul>
</div></template>


