
# 订单管理

## 订单详情

### 职责

面对坐席人员，吐出组装后的全量数据。将整体订单按模块划分，每个模块数据分层展示。
整体依赖三大中心：**呼叫中心、积分平台、交易中心**。八个服务：**订单服务、交易对接服务、积分平台、交易中心、基础数据服务、对外对接服务、审核服务及高频服务**。

### 实现

底层通过**StrategyFactory**策略工厂类将订单渠道隔离，目前分为积分平台和交易中心两大渠道。对不同订单（销售、改期、快照订单、外渠道）有不同实现方式，以**IOrderDetail抽象类**为基底实现不同需求。当有额外需求时**横向扩展**即可。

时序图：
![image](image/%E8%AE%A2%E5%8D%95%E8%AF%A6%E6%83%85-Page-1.drawio.png)

### 产品节点

将不同产品节点信息聚合进订详中，**IProduct抽象公共方法**，复用相同产品信息，不同产品实现类完成差异化产品信息。


## 取消订单

### 职责

将满足校验的订单关闭，同时中止取消掉订单上挂靠的配送单及审核单等，中止订单状态的正常流转。

### 实现

接口整体功能划分两部分：

* 校验模块
    a.订单&审核单的领用
    b.订单渠道（呼叫中心）
    c.订单状态&订单类型

* 取消模块
    a.预授权取消
    b.交易中心|积分平台取消
    c.审核单取消
    d.配送单取消

时序图：

![image](image/%E5%8F%96%E6%B6%88%E8%AE%A2%E5%8D%95.drawio.png)


## 短信提取

### 职责

作为文本数据处理接口，通过将pnr解析后的数据提取到京东鹰眼配置的短信模版变量中，处理为可用提醒短信发送至用户。

### 实现

整体方案有两种：

* 抽取公共模块和方法作为基底类，针对不同短信模版实现不同逻辑，完成差异化内容，但会造成**类爆炸现象**。
* 编写**可配置信息**，通过正则&jsonPath解析完成文本解析逻辑，集成**IMessage抽象类**, 当增加短信模版时只需要补充**可配置信息**即可。如增加的短信模版比较特殊，**实现IMessage横向扩展即可**。

### 配置信息

```
    # 预定成功
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

```


## 短信内容校验