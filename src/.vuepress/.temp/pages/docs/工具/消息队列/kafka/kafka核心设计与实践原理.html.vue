<template><div><h1 id="笔记" tabindex="-1"><a class="header-anchor" href="#笔记" aria-hidden="true">#</a> 笔记</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> 消息队列、kafka</p>
</blockquote>
<p>深入理解Kafka核心设计与实践原理笔记~</p>
<h2 id="消费者" tabindex="-1"><a class="header-anchor" href="#消费者" aria-hidden="true">#</a> 消费者</h2>
<h3 id="消费者与消费组" tabindex="-1"><a class="header-anchor" href="#消费者与消费组" aria-hidden="true">#</a> 消费者与消费组</h3>
<p>消费者（Consumer）负责订阅主题（Topic），并从订阅主题中拉取消息。<strong>kafka中有一层消费组（Consumer Group）的概念，每个消费者都有一个对应的消费组。消费发布到主题后，只会投递给订阅它的每个消费组中的一个消费者。</strong></p>
<p>当某个主题共有4个分区（Partition）：P0、P1、P2、P3。两个消费者组A和B都订阅了该主题，消费组A中有4个消费者(CO、 Cl、 C2 和C3), 消费组B中有2个消费者(C4和CS)。 按照Kaflca默认的规则， 最后的分配结果是消费组A中的每一个消费者分配到1个分区， 消费组B中的每一个消费者分配到 2 个分区， 两个消费组之间互不影响。每个消费者只能消费所分配到的分区中的消息。<br>
<strong>即：每一个分区只能被一个消费组中的一个消费者所消费。</strong></p>
<p>消费者与消费组这种模型可以让整体的消费能力具备横向伸缩性，我们可以增加（或减少）消费者的个数来提高（或降低）整体的消费能力。对千分区数固定的清况， 一味地增加消费者并不会让消费能力一直得到提升，<strong>如果消费者过多，出现了消费者的个数大于分区个数的清况，就会有消费者分配不到任何分区。</strong></p>
<p>KafKa同时支持两种消息投递模式：点对点(P2P, Point-to-Point)模式和发布／订阅(Pub/Sub)模式。</p>
<ul>
<li>如果所有的消费者都隶属于同一个消费组，那么所有的消息都会被均衡地投递给每一个消费者，即每条消息只会被一个消费者处理，这就相当千点对点模式的应用。</li>
<li>如果所有的消费者都隶属于不同的消费组，那么所有的消息都会被广播给所有的消费者，即每条消息会被所有的消费者处理，这就相当于发布／订阅模式的应用。</li>
</ul>
</div></template>


