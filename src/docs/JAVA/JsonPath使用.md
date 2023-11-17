---
icon: pen-to-square
date: 2023-07-01 21:30
category:
  - Java
tag:
  - JsonPath
---

# JsonPath

> 📌 **关键词：** java、Json解析

## 概述

正如XPath解析XML文档一样，JsonPath提供了对Json文档的解析能力。通过使用JsonPath查找Json节点获取数据，JsonPath就是XPath在Json上的使用。

## 语法

|操作| 说明|
|  ----  | ----  | 
|$|查询根元素|
|@|过滤器断言处理的当前节点对象，类似java中的this字段|
|*|通配符，必要时可用任何地方的名称或数字|
|..|递归搜索，在任何地方可以使用名称|
|.A|表示一个A子节点|
|[A]huo[A,B]|迭代器下标，表示一个或多个数组下标|
|[start:end]|数组片段，区间为[start:end)，不包含end|
|?()|过滤器表达式，筛选操作|

## 函数

|名称|描述|输出
|--|--|--|
|min()|获取数值类型数组的最小值|Double|
|max()|获取数值类型数组的最大值|Double|
|avg()|获取数值类型数组的平均值|Double|
|stddev()|获取数值类型数组的标准差|Double|
|length()|获取数值类型数组的长度|Integer|
|sum()|获取数值类型数组的总和|Double|

## Json解析

### 在线网站

http://jsonpath.com/

### json报文

```
{
    "firstName": "John",
    "lastName": "doe",
    "age": 26,
    "address": {
        "streetAddress": "naist street",
        "city": "Nara",
        "postalCode": "630-0192"
    },
    "phoneNumbers": [
        {
            "type": "iPhone",
            "number": "0123-4567-8888",
            "id": 1
        },
        {
            "type": "home",
            "number": "0123-4567-8910",
            "id": 2
        }
    ]
}
```
* $.phoneNumbers[:1].type: 获取phoneNumbers数组中第一个数据
* $.address: 获取address节点数据
* $.sum($.phoneNumbers[0:].id): 对phoneNumbers的id聚合。$.sum($.phoneNumbers[(*)].id)会报错


## Java引入

### Maven

```
        <dependency>
            <groupId>com.jayway.jsonpath</groupId>
            <artifactId>json-path</artifactId>
            <version>2.8.0</version>
        </dependency>

```

### 使用

```
Object document = Configuration.defaultConfiguration().jsonProvider().parse("json数据");
Object value = JsonPath.read(document, "JsonPath表达式");
```

