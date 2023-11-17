---
icon: pen-to-square
date: 2023-07-09 10:44
category:
  - centos
tag:
  - docker-compose
---

# linux安装docker-compose

> 📌 **关键词：** docker-compose、centOs8


## 下载路径

```
# 下载版本
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose


# 执行权限
chmod +x /usr/local/bin/docker-compose

# 创建软连接
sudo ln -s /usr/local/bin/docker-compose ~/app/docker-compose

# 查看是否安装成功
ll /usr/local/bin

# 查看版本
docker-compose --version

# 卸载
rm /usr/local/bin/docker-compose 

```