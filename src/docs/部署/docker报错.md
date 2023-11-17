---
icon: pen-to-square
date: 2023-07-25 11:40
category:
  - docker
tag:
  - 问题
---

# docker问题

> 📌 **关键词：** docker、问题

## 1.docker: Error response from daemon Timeout 

在等待报头时超时，  请求在等待连接时被取消(客户端)。Docker 默认的源为国外官方源，下载速度较慢，可改为国内镜像源。


① 修改docker镜像源，如果没有 daemon.json就新建添加以下内容：

```
[root@localhost ~]# cd /etc/docker
[root@localhost docker]# ls
daemon.json  key.json
[root@localhost docker]# vim daemon.json 
 
 # 添加以下内容
{
 
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
 
}
 
# 也可以添加多个国内源
{
 
"registry-mirrors": ["http://hub-mirror.c.163.com", "https://registry.docker-cn.com"]
 
}


```
国内镜像源：
* 网易  http://hub-mirror.c.163.com
* 中国科技大学  https://docker.mirrors.ustc.edu.cn
* 阿里云  https://pee6w651.mirror.aliyuncs.com

② 修改完之后，需要重新启动Docker。（当修改配置文件时候都需要进行重启服务）
```
[root@localhost docker]# systemctl daemon-reload    # 重新载入 systemd，扫描新的或有变动的单元
[root@km docker]# systemctl restart docker          # 重新启动Docker服务


```
---
