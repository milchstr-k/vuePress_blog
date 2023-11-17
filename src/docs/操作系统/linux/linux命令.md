---
icon: pen-to-square
date: 2023-08-07 11:17
category:
  - Linux
tag:
  - 命令
---

# Linux命令

> 📌 **关键词：** Linux、命令

## 进程杀死
```java

// 经过 killall 指令
killall nginx
// 经过 pkill 指令，类似于 pgrep + kill
pkill nginx
// 经过先查找再 kill 的方法
ps -ef | grep nginx | grep -v grep | awk '{print $2}' | xargs kill -9
// 用 cut -c 来截取指定位置的字符串
ps -ef | grep nginx | grep -v grep | cut -c 11-15 | xargs kill -9
// 经过 pgrep 指令，根据名字找出一切包括该名字的进程号
pgrep nginx | xargs kill -9
// 经过 pidof 指令，根据进程全名找出进程号
pidof nginx | kill -9
// 除了管道符的方法，也可以用指令替换，这样就不用经过 xargs 转化参数了
kill -9 `pgrep nginx`

```