<template><div><h1 id="git问题" tabindex="-1"><a class="header-anchor" href="#git问题" aria-hidden="true">#</a> git问题</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> git</p>
</blockquote>
<h2 id="不小心git-reset-hard" tabindex="-1"><a class="header-anchor" href="#不小心git-reset-hard" aria-hidden="true">#</a> 不小心git reset --hard</h2>
<ul>
<li>当前修改没提交commit，通过idea中的本地历史进行查看（Local History）</li>
<li>提交commit
<ul>
<li>git fsck --lost-found  // 获取commit过的代码痕迹</li>
<li>git show xxxx</li>
<li>git rebase xxxx     // xxx为commit提交的ID</li>
</ul>
</li>
</ul>
</div></template>


