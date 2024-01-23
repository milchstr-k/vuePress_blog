---
icon: pen-to-square
date: 2024-01-06 21:54
category:
  - redis
tag:
  - 客户端
---
# redis客户端
在redis官网中，有针对每种语言的客户端介绍，在redis建议使用的客户端前会有星号标识。

## 介绍
### Jedis
    java+redis的组合单词，特点是：方法以redis命令为方法名称，学习成本低。但是**Jedis实例线程不安全，在多线程使用时必须为每个线程创建一个Jedis连接，因此需要使用线程池**

### Lettuce
    是Netty实现的，支持同步、异步和响应式编程方式，线程安全的，支持Redis的烧饼模式、集群模式和管道模式。Spring官方默认兼容

### Redisson
    基于Redis实现的分布式、可伸缩的Java数据结构集合，包含了诸如Map、Queue、Lock、Semaphore、AtomicLog等强大功能

Spring Data Redis兼容了Jedis,Lettuce

## 使用
### Jedis
#### 直连方式
1. 引入依赖，官网：https://github.com/redis/jedis, 里面有引入Maven包说明
2. 建立连接
```java
private Jedis jedis;

@BeforEach
void setup() {
    // 建立连接
    jedis = new Jedis("192.168.xx.xx", 6379);
    // 设置密码
    jedis.auth("110");
    // 选择库
    jedis.select(0);

}

```
3. 测试
```java
// 插入数据，方法名称就是redis名称
String result = jedis.set("name", "张三");
// 获取数据
String name = jedis.get("name");
```
4. 释放资源
```java
@AfterEach
void tearDown() {
    // 释放资源
    if (jedis != null) {
        jedis.close();
    }
}
```

#### 连接使用
jedis本身线程不安全，频繁创建和销毁连接会有性能损耗，推荐使用jedis连接池代替jedis直连方式。
```java
public class JedisConnectionFactory {
    private static final JedisPool jedisPool;

    static {
        JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
        // 最大连接
        jedisPoolConfig.setMaxTotal(8);
        // 最大空闲连接
        jedisPoolConfig.setMaxIdle(8);
        // 最小空闲连接
        jedisPoolConfig.setMinIdle(0);
        // 设置最长等待时间，ms
        jedisPoolConfig.setMaxWaitMillis(200);
        // 连接池对象，ip， port， 超时时间， 密码
        jedisPool = new JedisPool(jedisPoolConfig, "192.168.xx.xx", 6379, 1000, "12311");

    }

    // 获取jedis对象
    public static Jedis getJedis() {
        return jedisPool.getResource();
    }


}

```
### SpringDataRedis
Spring中数据的操作模块，包含对各种数据库的集成，其中对Redis的集成模块就叫做SrpingDataRedis, **官网地址：https://spring.io/projects/spring-data-redis**
* 提供了不同Redis客户端的整合(Lettuce和Jedis)
* 提供了RedisTemplate统一API操作Redis
* 支持Redis的发布订阅模型
* 支持Redis哨兵和Redis集群
* 支持基于Lettuce的响应式编程
* 支持基于JDK、JSON、字符串、Spring对象的数据序列化及反序列化
* 支持基于Redis的JDKCollection实现

#### RedisTemplate API
| API | 返回值类型 | 说明 |
| - | - | - |
| redisTemplate.opsForValue() | ValueOperations | 提供**String**类型数据 |
| redisTemplate.opsForHash()  | HashOperations  | 提供**Hash**类型数据 |
| redisTemplate.opsForList()  | ListOperations | 提供**List**类型数据 |
| redisTemplate.opsForSet()   | SetOperations | 提供**Set**类型数据 |
| redisTemplate.opsForZSet()  | ZSetOperations | 提供**SortedSet**类型数据 |
| redisTemplate  |  | 提供**通用**命令 |

#### RedisTemplate序列化
RedisSerializer 接口是 Redis 序列化接口，用于 Redis Key、Value、HashKey、HashValue 的序列化

* JDK 序列化方式（RedisTemplate 默认）
    * JdkSerializationRedisSerializer:key和value被反序列成16进制字符(标志位 + 字符串长度 + 字符串内容)，内存占用大，内容不直观
* String 序列化方式（StringRedisTemplate 默认）
    * StringRedisSerializer:字符串和二进制数组的直接转换
* JSON 序列化方式
    * GenericJackson2JsonRedisSerializer:会在序列化的时候将类全名写到Json中，从而实现自动反序列化。
    * Jackson2JsonRedisSerializer
推荐使用 Jackson2JsonRedisSerializer，相比 GenericJackson2JsonRedisSerializer 占用内存小，效率高。
* XML 序列化方式


