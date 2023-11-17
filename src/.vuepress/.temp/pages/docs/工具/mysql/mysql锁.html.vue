<template><div><h1 id="mysql锁" tabindex="-1"><a class="header-anchor" href="#mysql锁" aria-hidden="true">#</a> mysql锁</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> mysql、锁</p>
</blockquote>
<h2 id="数据库种类" tabindex="-1"><a class="header-anchor" href="#数据库种类" aria-hidden="true">#</a> 数据库种类</h2>
<p>数据库锁有<strong>排他锁、共享锁、意向锁、自增锁、间隙锁</strong>，锁的范围包括<strong>行锁、表锁、区间锁</strong>。</p>
<p>意向锁、自增锁、间隙锁是mysql内部逻辑锁，排他锁和共享锁是使用过程中用户添加的锁。</p>
<h2 id="排他锁" tabindex="-1"><a class="header-anchor" href="#排他锁" aria-hidden="true">#</a> 排他锁</h2>
<p>排他锁也被称为X锁（共享锁是S锁），加锁前需要<strong>开启事务</strong>，<strong>for update语句在事务中有效</strong>。如果事务A成功获取锁，其他事务无法对这条记录进行加锁（排他锁、共享锁），可以无锁查询。</p>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<ul>
<li>无锁</li>
</ul>
<table>
<thead>
<tr>
<th>事务1</th>
<th>事务2</th>
</tr>
</thead>
<tbody>
<tr>
<td>step1:查询金额200</td>
<td></td>
</tr>
<tr>
<td>step2:内存计算200-100=100</td>
<td>step1: 查询金额200</td>
</tr>
<tr>
<td>step3:更新数据库金额100</td>
<td>step2: 内存计算200+50=250</td>
</tr>
<tr>
<td>step4:commit</td>
<td>step3:更新数据金额250</td>
</tr>
<tr>
<td></td>
<td>step4: commit</td>
</tr>
</tbody>
</table>
<p>现实场景中，金额期望150，但实际现在为250。</p>
<ul>
<li>加锁</li>
</ul>
<table>
<thead>
<tr>
<th>事务1</th>
<th>事务2</th>
</tr>
</thead>
<tbody>
<tr>
<td>step1:查询金额200（加锁）</td>
<td></td>
</tr>
<tr>
<td>step2:内存计算200-100=100</td>
<td>step1: 查询金额200(加锁)</td>
</tr>
<tr>
<td>step3:更新数据库金额100</td>
<td>setp2: 等待</td>
</tr>
<tr>
<td>step4:commit</td>
<td>step3: 等待</td>
</tr>
<tr>
<td></td>
<td>step4: 返回金额100元</td>
</tr>
<tr>
<td></td>
<td>step5: 内存计算+50=150</td>
</tr>
<tr>
<td></td>
<td>setp6: 更新余额150元</td>
</tr>
<tr>
<td></td>
<td>setp7: commit</td>
</tr>
</tbody>
</table>
<p>保持金额的一致性，当A事务加了排他锁后其他事务只能等待直到A事务提交。</p>
<h2 id="共享锁" tabindex="-1"><a class="header-anchor" href="#共享锁" aria-hidden="true">#</a> 共享锁</h2>
<p>共享锁又被成为S锁，相对于悲观锁来说，是低一级的锁。事务A对某一条数据加了共享锁后，其他事务依旧可以增加共享锁，但是不能增加排他锁。</p>
<table>
<thead>
<tr>
<th></th>
<th>共享锁（S）</th>
<th>排它锁（X）</th>
</tr>
</thead>
<tbody>
<tr>
<td>共享锁（S）</td>
<td>√</td>
<td>X</td>
</tr>
<tr>
<td>排他锁（X）</td>
<td>X</td>
<td>X</td>
</tr>
</tbody>
</table>
<h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h3>
<p>排他锁保证一张表中数据一致性，共享锁保证主从表的一致性。</p>
<p>有用户user表和用户联系人user_relation表</p>
<p>todo</p>
<h3 id="共享锁升级导致死锁" tabindex="-1"><a class="header-anchor" href="#共享锁升级导致死锁" aria-hidden="true">#</a> 共享锁升级导致死锁</h3>
<h4 id="共享锁升级" tabindex="-1"><a class="header-anchor" href="#共享锁升级" aria-hidden="true">#</a> 共享锁升级</h4>
<p>当获取到共享锁后对获得锁的数据进行更新，共享锁会<strong>升级排他锁</strong>，可能导致死锁现象。</p>
<h4 id="升级导致死锁" tabindex="-1"><a class="header-anchor" href="#升级导致死锁" aria-hidden="true">#</a> 升级导致死锁</h4>
<p>共享锁可以被多个事务同时获得，如果多个事务获得共享锁后同时进行更新，则会导致死锁。</p>
<table>
<thead>
<tr>
<th>事务1</th>
<th>事务2</th>
</tr>
</thead>
<tbody>
<tr>
<td>select * from account where ? lock in share mode返回200元</td>
<td></td>
</tr>
<tr>
<td>内存计算：200-100=100</td>
<td>select * from account where ? lock in share mode返回200元</td>
</tr>
<tr>
<td>update account set balance = 100 where user=A，更新余额100元</td>
<td>内存计算：200-100=100</td>
</tr>
<tr>
<td>尝试锁升级成排他锁，等待事务2释放共享锁</td>
<td>update account set balance = 100 where user=A，更新余额100元</td>
</tr>
<tr>
<td>等待</td>
<td>尝试锁升级成排他锁 等待事务 T1 释放</td>
</tr>
<tr>
<td>等待</td>
<td>检测出死锁，事务失败，roll back</td>
</tr>
<tr>
<td>获得锁成功， 更新成功</td>
<td></td>
</tr>
<tr>
<td>commit</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="意向锁" tabindex="-1"><a class="header-anchor" href="#意向锁" aria-hidden="true">#</a> 意向锁</h2>
<p>意向锁（intention lock）分为<strong>IS共享意向锁</strong> 和 <strong>IX排他意向锁</strong>。意向锁表示表中有记录被锁了，记录被加了排他锁，则表上会有IX锁，记录加了共享锁，则表上有IS锁。</p>
<h3 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题" aria-hidden="true">#</a> 解决问题</h3>
<p>mysql中支持行锁和表锁，当事务A加了行锁后，事务B此时想要加表锁，在没有意向锁的情况下，需要循环表的每一条记录判断是否加锁，最后确定能否加表锁，效率低。</p>
<p>当给记录加锁时，会在表上先加意向锁，代表这个表中某条记录被加锁。当其他事务来对表进行加锁的时候，只需要判断表上是否有意向锁，就可以对表进行加锁。</p>
<h3 id="互斥性" tabindex="-1"><a class="header-anchor" href="#互斥性" aria-hidden="true">#</a> 互斥性</h3>
<p>todo</p>
<h2 id="间隙锁" tabindex="-1"><a class="header-anchor" href="#间隙锁" aria-hidden="true">#</a> 间隙锁</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p>解决mysql在可重复读级别下部分幻读问题。间隙锁在<strong>范围查询加锁或查询不存在值加锁时使用</strong>，用于锁定一定范围数据，防止其他事务写入，解决幻读问题。</p>
<h3 id="解决幻读" tabindex="-1"><a class="header-anchor" href="#解决幻读" aria-hidden="true">#</a> 解决幻读</h3>
</div></template>


