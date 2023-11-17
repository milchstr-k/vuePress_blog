<template><div><h1 id="线程池状态" tabindex="-1"><a class="header-anchor" href="#线程池状态" aria-hidden="true">#</a> 线程池状态</h1>
<blockquote>
<p>📌 <strong>关键词：</strong> java、线程池状态</p>
</blockquote>
<h2 id="running" tabindex="-1"><a class="header-anchor" href="#running" aria-hidden="true">#</a> RUNNING</h2>
<p>线程池正常运行，既能接受新任务，也会正常处理队列中任务。</p>
<h2 id="shutdown" tabindex="-1"><a class="header-anchor" href="#shutdown" aria-hidden="true">#</a> SHUTDOWN</h2>
<p>当调用线程池的shutdown()方法时，线程池进入SHUTDOWN状态，标识线程池处于正在关闭状态，此状态下<strong>线程池不会接受新任务，但会继续把队列中任务处理完</strong>。</p>
<h2 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> STOP</h2>
<p>当调用线程池的shutdownnow()方法时，线程池进入STOP状态，标识线程池处于正在停止状态，此状态下<strong>线程池不会接受新任务，不会处理队列中任务</strong>，并且正在运行的线程也会被中断。</p>
<h2 id="tidying" tabindex="-1"><a class="header-anchor" href="#tidying" aria-hidden="true">#</a> TIDYING</h2>
<p>线程池中没有线程在运行后，线程池的状态就会自动变为TIDYING,并且会调用terminated()，该方法是空方法，用于扩展。</p>
<h2 id="terminated" tabindex="-1"><a class="header-anchor" href="#terminated" aria-hidden="true">#</a> TERMINATED</h2>
<p>terminated()方法执行完之后，线程池状态变为TERMINATED。</p>
</div></template>


