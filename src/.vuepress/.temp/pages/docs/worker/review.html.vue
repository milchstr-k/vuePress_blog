<template><div><h1 id="订单管理" tabindex="-1"><a class="header-anchor" href="#订单管理" aria-hidden="true">#</a> 订单管理</h1>
<h2 id="订单详情" tabindex="-1"><a class="header-anchor" href="#订单详情" aria-hidden="true">#</a> 订单详情</h2>
<h3 id="职责" tabindex="-1"><a class="header-anchor" href="#职责" aria-hidden="true">#</a> 职责</h3>
<p>面对坐席人员，吐出组装后的全量数据。将整体订单按模块划分，每个模块数据分层展示。<br>
整体依赖三大中心：<strong>呼叫中心、积分平台、交易中心</strong>。八个服务：<strong>订单服务、交易对接服务、积分平台、交易中心、基础数据服务、对外对接服务、审核服务及高频服务</strong>。</p>
<h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3>
<p>底层通过<strong>StrategyFactory</strong>策略工厂类将订单渠道隔离，目前分为积分平台和交易中心两大渠道。对不同订单（销售、改期、快照订单、外渠道）有不同实现方式，以<strong>IOrderDetail抽象类</strong>为基底实现不同需求。当有额外需求时<strong>横向扩展</strong>即可。</p>
<p>时序图：<br>
<img src="@source/docs/worker/image/订单详情-Page-1.drawio.png" alt="image" loading="lazy"></p>
<h3 id="产品节点" tabindex="-1"><a class="header-anchor" href="#产品节点" aria-hidden="true">#</a> 产品节点</h3>
<p>将不同产品节点信息聚合进订详中，<strong>IProduct抽象公共方法</strong>，复用相同产品信息，不同产品实现类完成差异化产品信息。</p>
<h2 id="取消订单" tabindex="-1"><a class="header-anchor" href="#取消订单" aria-hidden="true">#</a> 取消订单</h2>
<h3 id="职责-1" tabindex="-1"><a class="header-anchor" href="#职责-1" aria-hidden="true">#</a> 职责</h3>
<p>将满足校验的订单关闭，同时中止取消掉订单上挂靠的配送单及审核单等，中止订单状态的正常流转。</p>
<h3 id="实现-1" tabindex="-1"><a class="header-anchor" href="#实现-1" aria-hidden="true">#</a> 实现</h3>
<p>接口整体功能划分两部分：</p>
<ul>
<li>
<p>校验模块<br>
a.订单&amp;审核单的领用<br>
b.订单渠道（呼叫中心）<br>
c.订单状态&amp;订单类型</p>
</li>
<li>
<p>取消模块<br>
a.预授权取消<br>
b.交易中心|积分平台取消<br>
c.审核单取消<br>
d.配送单取消</p>
</li>
</ul>
<p>时序图：</p>
<figure><img src="@source/docs/worker/image/取消订单.drawio.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
<h2 id="短信提取" tabindex="-1"><a class="header-anchor" href="#短信提取" aria-hidden="true">#</a> 短信提取</h2>
<h3 id="职责-2" tabindex="-1"><a class="header-anchor" href="#职责-2" aria-hidden="true">#</a> 职责</h3>
<p>作为文本数据处理接口，通过将pnr解析后的数据提取到京东鹰眼配置的短信模版变量中，处理为可用提醒短信发送至用户。</p>
<h3 id="实现-2" tabindex="-1"><a class="header-anchor" href="#实现-2" aria-hidden="true">#</a> 实现</h3>
<p>整体方案有两种：</p>
<ul>
<li>抽取公共模块和方法作为基底类，针对不同短信模版实现不同逻辑，完成差异化内容，但会造成<strong>类爆炸现象</strong>。</li>
<li>编写<strong>可配置信息</strong>，通过正则&amp;jsonPath解析完成文本解析逻辑，集成<strong>IMessage抽象类</strong>, 当增加短信模版时只需要补充<strong>可配置信息</strong>即可。如增加的短信模版比较特殊，<strong>实现IMessage横向扩展即可</strong>。</li>
</ul>
<h3 id="配置信息" tabindex="-1"><a class="header-anchor" href="#配置信息" aria-hidden="true">#</a> 配置信息</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    # 预定成功
    bookSuccess: { "passengerName": "$.data.passengerPriceInfoList[*].passengerName","marketingFlightNo": "$.data.segmentInfoList[*].marketingFlight","departureCity": "$.data.segmentInfoList[*].departurePoint.cityName","departureAirport": "$.data.segmentInfoList[*].departurePoint.airportName","departureTerminal": "$.data.segmentInfoList[*].departurePoint.terminalCode","arrivalCity": "$.data.segmentInfoList[*].arrivalPoint.cityName","arrivalAirport": "$.data.segmentInfoList[*].arrivalPoint.airportName","arrivalTerminal": "$.data.segmentInfoList[*].arrivalPoint.terminalCode","departureTime": "$.data.segmentInfoList[*].departurePoint.localDateTime","arrivalTime": "$.data.segmentInfoList[*].arrivalPoint.localDateTime","fare": "$.sum($.data.passengerPriceInfoList[0:].amount)","premium": "$.sum($.data.passengerPriceInfoList[0:].taxFee)" }
    # 出票成功
    ticketSuccess: { "orderNo": "$.data.basicInfo.orderId","marketingFlightNo": "$.data.segmentInfoList[*].marketingFlight","departureCity": "$.data.segmentInfoList[*].departurePoint.cityName","departureAirport": "$.data.segmentInfoList[*].departurePoint.airportName","departureTerminal": "$.data.segmentInfoList[*].departurePoint.terminalCode","arrivalCity": "$.data.segmentInfoList[*].arrivalPoint.cityName","arrivalAirport": "$.data.segmentInfoList[*].arrivalPoint.airportName","arrivalTerminal": "$.data.segmentInfoList[*].arrivalPoint.terminalCode","departureTime": "$.data.segmentInfoList[*].departurePoint.localDateTime","arrivalTime": "$.data.segmentInfoList[*].arrivalPoint.localDateTime","ticketNo": "$.data.passengerInfoList[*].ticketNum" }
    # 变更出票成功
    changeTicketSuccess: { "orderNo": "$.data.basicInfo.orderId","marketingFlightNo": "$.data.segmentInfoList[*].marketingFlight","departureCity": "$.data.segmentInfoList[*].departurePoint.cityName","departureAirport": "$.data.segmentInfoList[*].departurePoint.airportName","departureTerminal": "$.data.segmentInfoList[*].departurePoint.terminalCode","arrivalCity": "$.data.segmentInfoList[*].arrivalPoint.cityName","arrivalAirport": "$.data.segmentInfoList[*].arrivalPoint.airportName","arrivalTerminal": "$.data.segmentInfoList[*].arrivalPoint.terminalCode","departureTime": "$.data.segmentInfoList[*].departurePoint.localDateTime","arrivalTime": "$.data.segmentInfoList[*].arrivalPoint.localDateTime","ticketNo": "$.data.passengerInfoList[*].ticketNum" }
    # 免费改期
    freeReschedule: { "orderNo": "$.data.basicInfo.orderId","marketingFlightNo": "$.data.segmentInfoList[*].marketingFlight","departureCity": "$.data.segmentInfoList[*].departurePoint.cityName","departureAirport": "$.data.segmentInfoList[*].departurePoint.airportName","departureTerminal": "$.data.segmentInfoList[*].departurePoint.terminalCode","arrivalCity": "$.data.segmentInfoList[*].arrivalPoint.cityName","arrivalAirport": "$.data.segmentInfoList[*].arrivalPoint.airportName","arrivalTerminal": "$.data.segmentInfoList[*].arrivalPoint.terminalCode","departureTime": "$.data.segmentInfoList[*].departurePoint.localDateTime","arrivalTime": "$.data.segmentInfoList[*].arrivalPoint.localDateTime" }
    # 航班改期
    flightReschedule: { "passengerName": "$.data.passengerPriceInfoList[*].passengerName","marketingFlightNo": "$.data.segmentInfoList[*].marketingFlight","departureCity": "$.data.segmentInfoList[*].departurePoint.cityName","departureAirport": "$.data.segmentInfoList[*].departurePoint.airportName","departureTerminal": "$.data.segmentInfoList[*].departurePoint.terminalCode","arrivalCity": "$.data.segmentInfoList[*].arrivalPoint.cityName","arrivalAirport": "$.data.segmentInfoList[*].arrivalPoint.airportName","arrivalTerminal": "$.data.segmentInfoList[*].arrivalPoint.terminalCode","departureTime": "$.data.segmentInfoList[*].departurePoint.localDateTime","arrivalTime": "$.data.segmentInfoList[*].arrivalPoint.localDateTime","changePenalty": "$.sum($.data.passengerPriceInfoList[*].changePenalty)" }
    # 尽快支付提醒
    paymentReminder: { "passengerName": "$.data.passengerPriceInfoList[*].passengerName","marketingFlightNo": "$.data.segmentInfoList[*].marketingFlight","departureCity": "$.data.segmentInfoList[*].departurePoint.cityName","departureAirport": "$.data.segmentInfoList[*].departurePoint.airportName","departureTerminal": "$.data.segmentInfoList[*].departurePoint.terminalCode","arrivalCity": "$.data.segmentInfoList[*].arrivalPoint.cityName","arrivalAirport": "$.data.segmentInfoList[*].arrivalPoint.airportName","arrivalTerminal": "$.data.segmentInfoList[*].arrivalPoint.terminalCode","departureTime": "$.data.segmentInfoList[*].departurePoint.localDateTime","arrivalTime": "$.data.segmentInfoList[*].arrivalPoint.localDateTime","changePenalty": "$.sum($.data.passengerPriceInfoList[*].changePenalty)" }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="短信内容校验" tabindex="-1"><a class="header-anchor" href="#短信内容校验" aria-hidden="true">#</a> 短信内容校验</h2>
</div></template>


