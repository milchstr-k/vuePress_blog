## docker启动redis报错 oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo

docker启动redis报错

1:C 17 Jun 08:18:04.613 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 17 Jun 08:18:04.613 # Redis version=4.0.14, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 17 Jun 08:18:04.613 # Configuration loaded

 

这是因为redis.conf配置文件中daemonize yes,

这使得redis是以后台启动的方式运行的,由于docker容器在启动时,需要任务在前台运行,否则会启动后立即退出,因此导致redis容器启动后立即退出问题.

将redis.conf中的daemonize字段改为no即可

