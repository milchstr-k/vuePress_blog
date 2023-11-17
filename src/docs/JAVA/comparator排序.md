---
icon: pen-to-square
date: 2023-07-29 11:07
category:
  - Java
tag:
  - Comparator排序
---

# Comparator排序

> 📌 **关键词：** java、Comparator排序

## comparing

```java
//返回 对象集合以类属性一升序排序
list.stream().sorted(Comparator.comparing(类::属性一));

//先以属性一升序,结果进行属性一降序
list.stream().sorted(Comparator.comparing(类::属性一).reversed());
//以属性一降序
list.stream().sorted(Comparator.comparing(类::属性一,Comparator.reverseOrder()));

//返回 对象集合以类属性一升序 属性二升序
list.stream().sorted(Comparator.comparing(类::属性一).thenComparing(类::属性二));


//先以属性一升序,升序结果进行属性一降序,再进行属性二升序
list.stream().sorted(Comparator.comparing(类::属性一).reversed().thenComparing(类::属性二));
//先以属性一降序,再进行属性二升序
list.stream().sorted(Comparator.comparing(类::属性一,Comparator.reverseOrder()).thenComparing(类::属性二));


//先以属性一升序,升序结果进行属性一降序,再进行属性二降序
list.stream().sorted(Comparator.comparing(类::属性一).reversed().thenComparing(类::属性二,Comparator.reverseOrder()));
//先以属性一降序,再进行属性二降序
list.stream().sorted(Comparator.comparing(类::属性一,Comparator.reverseOrder()).thenComparing(类::属性二,Comparator.reverseOrder()));


//先以属性一升序,升序结果进行属性一降序,再进行属性二升序,结果进行属性一降序属性二降序
list.stream().sorted(Comparator.comparing(类::属性一).reversed().thenComparing(类::属性二).reversed());
//先以属性一升序,再进行属性二降序
list.stream().sorted(Comparator.comparing(类::属性一).thenComparing(类::属性二,Comparator.reverseOrder()));

```

## Comparator.nullsFirst

当集合中存在null元素时，null元素排在集合的最前面

```java

Collections.sort(列表, Comparator.nullsFirst(Comparator.comparing(类::属性)));
 
 
Collections.sort(列表, Comparator.nullsLast(Comparator.comparing(类::属性)));

```

## Comparator.thenComparing

先以属性一升序,再进行属性二升序
```java

Collections.sort(列表, Comparator.comparing(类::属性一).thenComparing(类::属性二));

// 对null处理
pendingTicketList.parallelStream()
                .sorted(Comparator.comparing(PendingTicket::isUrgentFlag, Comparator.nullsFirst(Boolean::compareTo))
                        .thenComparing(PendingTicket::isPriorityServiceFlag, Comparator.nullsFirst(Boolean::compareTo))
                        .thenComparing(PendingTicket::getTicketLimitTime, Comparator.nullsFirst(String::compareTo))
                        .reversed())

```

