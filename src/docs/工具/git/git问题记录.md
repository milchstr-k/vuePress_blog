---
icon: pen-to-square
date: 2023-07-04 12:52
category:
  - git
tag:
  - git
---

# git问题

> 📌 **关键词：** git

## 不小心git reset --hard

* 当前修改没提交commit，通过idea中的本地历史进行查看（Local History）
* 提交commit
    * git fsck --lost-found  // 获取commit过的代码痕迹
    * git show xxxx
    * git rebase xxxx     // xxx为commit提交的ID

