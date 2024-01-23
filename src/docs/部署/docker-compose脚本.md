---
icon: pen-to-square
date: 2023-07-24 19:44
category:
  - docker
tag:
  - docker-compose
  - 脚本
---

# docker-compose脚本

> 📌 **关键词：** docker-compose、脚本


## Kafka3

Kafka3无需安装zookeeper

```
version: "3"
services:
  kafka:
    image: bitnami/kafka:latest
    user: root
    ports:
      - 9092:9092
      - 9093:9093
    environment:
      - KAFKA_ENABLE_KRAFT=yes  # kraft模式
      - KAFKA_CFG_PROCESS_ROLES=broker,controller # 服务器在KRaft模式中同时充当Broker和Controller。
      - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
      - KAFKA_CFG_LISTENER=PLAINTEXT://:9092,CONTROLLER://:9093
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT
      - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 #宿主机ip
      - KAFKA_BROKER_ID=1
      - KAFKA_KRAFT_CLUSTER_ID=7es-47FeQpCKpLfsN1uPxQ
      - KAFKA_CFG_CONTROLLER_QUORUM_VOYERS=1@localhost:9093
      - ALLOW_PLAINTEXT_LISTENER=yes  # 允许使用PLAINTEXT侦听器

  redis_master:
    image: redis:7.0.4
    restart: always
    hostname: redis
    container_name: redis_master
    privileged: true
    ports:
      - 6379:6379
    environment:
      TZ: Asia/Shanghai
    volumes:
        - /root/app/redis/data:/data
        - /root/app/redis/conf/redis.conf:/etc/redis/redis.conf
        - /root/app/redis/logs:/logs
    command: ["redis-server","/etc/redis/redis.conf"]

    

```

配置参考：https://github.com/apache/kafka/blob/trunk/config/kraft/server.properties

```
进入kafka容器
docker exec -it kafka-kafka-1 bash
找到kafka提供的脚本
cd /opt/bitnami/kafka/bin
创建tioic
#解释：创建1个副本3个分区的topic,命名为mytest
./kafka-topics.sh --zookeeper master:2181 --create --topic mytest --replication-factor 1 --partitions 3
查看topic分区
./kafka-topics.sh --zookeeper master:2181 --describe --topic mytest
Topic:mytest  PartitionCount:3  ReplicationFactor:1 Configs:
  Topic: mytest Partition: 0  Leader: 0 Replicas: 0 Isr: 0
  Topic: mytest Partition: 1  Leader: 0 Replicas: 0 Isr: 0
  Topic: mytest Partition: 2  Leader: 0 Replicas: 0 Isr: 0

实验需要打开两个窗口,一个启动生产者一个启动消费者，方便观察
模拟创建一个生产者(producer)来生成消息，创建一个消费者(consumer)去消费消息
创建生产者
./kafka-console-producer.sh --broker-list kafka:9092 --topic mytest
#创建消费者
#解释：生产者会把消息丢进topic，我们在topic:mytest中创建一个命名为group_mytes的消费组来消费数据
./kafka-console-consumer.sh --bootstrap-server kafka:9092 --topic mytest --consumer-property group.id=group_mytes
#此时在生产者端输入消息，会在消费者端查看到对应消费内容。

#查看消息积压
./kafka-consumer-groups.sh --describe --bootstrap-server kafka:9092 --group group_mytes
Group           Topic                          Pid Offset          logSize         Lag             Owner
group_mytest    mytest                         0   3               3               0               none
group_mytest    mytest                         1   2               2               0               none
group_mytest    mytest                         2   3               3               0               none
#解释：logSize表示消息数量，Offset表示已经消费的消息，Lag代表积压的消息，消息出现积压可以同时调整分区数量和消费者数量来增加消费能力，其中分区数和消费者数量保持一致。
```

