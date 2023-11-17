---
icon: pen-to-square
date: 2023-07-18 11:11
category:
  - Java
tag:
  - 报错
---

# 报错

> 📌 **关键词：** java、报错

## 1. AsyncRequestTimeoutException异常

原因：响应太慢

spring.mvc.async.request-timeout

> Amount of time before asynchronous request handling times out. If this value is not set, the default timeout of the underlying implementation is used.

解决；
```
spring:
  mvc:
    async:
      request-timeout: 3600000

```

参考：

[Class AsyncRequestTimeoutException](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/context/request/async/AsyncRequestTimeoutException.html)

[spring.mvc.async.request-timeout](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#spring.mvc.async.request-timeout)

> 设定async请求的超时时间，以毫秒为单位，如果没有设置的话，以具体实现的超时时间为准，比如tomcat的servlet3的话是10秒. 

---

