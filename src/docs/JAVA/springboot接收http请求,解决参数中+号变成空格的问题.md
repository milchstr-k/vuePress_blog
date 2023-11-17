---
icon: pen-to-square
date: 2023-07-01 21:30
category:
  - Java
tag:
  - springboot
  - 转码
---

# springboot接收http请求,解决参数中+号变成空格的问题

> 📌 **关键词：** springboot、转码

## 原因

前端参数传到后端时，参数经过tomcat校验，**tomcat中Parameters类中convert方法对参数解码**，把"+"替换成空格。

Tomcat的新版本中增加了一个新特性，严格按照 RFC 3986规范进行访问解析，而 RFC 3986规范定义了Url中只允许包含英文字母（a-zA-Z）、数字（0-9）、-_.~4个特殊字符以及所有保留字符(RFC3986中指定了以下字符为保留字符：! * ' ( ) ; : @ & = + $ , / ? # [ ])。

| | tomcat | 加码 | 解码 |
|" "|" "|"+"|" "|
|"+"|" "|"%2B"|"+"|
|"="|"="|"%3D"|"="|

* Get请求

如前端发送的URL中含有“+”那么使用springboot框架接受的参数中 “+”会变成 空格

* Post请求

如前端发送的URL中含有“+”那么使用springboot框架接受的参数中 “+”不会变成 空格

## tomcat转换

主要涉及org.apache.tomcat.util.http.Parameters类中的processParameters方法和convert方法

## 解决

* 前端对其进行加码

* 后端使用replace方法, url.replace(" ","+");
