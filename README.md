[![index]( https://youdoc.github.io/img/tencent.jpg )]( https://cloud.tencent.com/act/cps/redirect?redirect=2446&cps_key=736e609d66e0ac4e57813316cec6fd0b&from=console )

<p align="center">
    <a href='https://github.com/201206030/novel'><img alt="Github stars" src="https://img.shields.io/github/stars/201206030/novel?logo=github"></a>
    <a href='https://github.com/201206030/novel'><img alt="Github forks" src="https://img.shields.io/github/forks/201206030/novel?logo=github"></a>
    <a href='https://gitee.com/novel_dev_team/novel'><img alt="Gitee stars" src="https://gitee.com/novel_dev_team/novel/badge/star.svg?theme=gitee"></a>
    <a href='https://gitee.com/novel_dev_team/novel'><img alt="Gitee forks" src="https://gitee.com/novel_dev_team/novel/badge/fork.svg?theme=gitee"></a>
</p>

## 项目简介

novel 是一套基于时下**最新** Java 技术栈 Spring Boot 3 + Vue 3 开发的前后端分离**学习型**
小说项目，配备[保姆级教程](https://docs.xxyopen.com/course/novel)手把手教你**从零开始**开发上线一套生产级别的 Java
系统，由小说门户系统、作家后台管理系统、平台后台管理系统等多个子系统构成。包括小说推荐、作品检索、小说排行榜、小说阅读、小说评论、会员中心、作家专区、充值订阅、新闻发布等功能。

## 项目地址

- 后端项目（更新中）：[GitHub](https://github.com/201206030/novel) ｜ [码云](https://gitee.com/novel_dev_team/novel)
- 前端项目（更新中）：[GitHub](https://github.com/201206030/novel-front-web)
  ｜ [码云](https://gitee.com/novel_dev_team/novel-front-web)
- 线上应用版：[GitHub](https://github.com/201206030/novel-plus) ｜ [码云](https://gitee.com/novel_dev_team/novel-plus)
- 微服务版：[GitHub](https://github.com/201206030/novel-cloud) ｜ [码云](https://gitee.com/novel_dev_team/novel-cloud)

## 开发环境

- MySQL 8.0
- Redis 7.0
- Elasticsearch 8.2.0（可选）
- RabbitMQ 3.10.2（可选）
- XXL-JOB 2.3.1（可选）
- JDK 21
- Maven 3.8
- IntelliJ IDEA（可选）
- Node 16.14

**注：Elasticsearch、RabbitMQ 和 XXL-JOB 默认关闭，可通过 application.yml 配置文件中相应的`enable`配置属性开启。**

## 后端技术选型

| 技术                  |      版本      | 说明                      | 官网                              |                                                            学习                                                            |
|---------------------|:------------:|-------------------------| ------------------------------------ |:------------------------------------------------------------------------------------------------------------------------:|
| Spring Boot         |    3.3.0     | 容器 + MVC 框架             | [进入](https://spring.io/projects/spring-boot) |                            [进入](https://docs.spring.io/spring-boot/docs/3.0.0/reference/html)                            |
| Spring AI           |    1.0.0-SNAPSHOT     | Spring 官方 AI 框架         | [进入](https://spring.io/projects/spring-ai) |                                                          [进入](https://docs.spring.io/spring-ai/reference/)                                                          |
| MyBatis             |    3.5.9     | ORM 框架                  | [进入](http://www.mybatis.org)               |                                    [进入](https://mybatis.org/mybatis-3/zh/index.html)                                     |
| MyBatis-Plus        |    3.5.3     | MyBatis 增强工具            | [进入](https://baomidou.com/)                |                                         [进入](https://baomidou.com/pages/24112f/)                                         |
| JJWT                |    0.11.5    | JWT 登录支持                | [进入](https://github.com/jwtk/jjwt)         |                                                            -                                                             |
| Lombok              |   1.18.24    | 简化对象封装工具                | [进入](https://github.com/projectlombok/lombok) |                                       [进入](https://projectlombok.org/features/all)                                       |
| Caffeine            |    3.1.0     | 本地缓存支持                  | [进入](https://github.com/ben-manes/caffeine)            |                               [进入](https://github.com/ben-manes/caffeine/wiki/Home-zh-CN)                                |
| Redis               |     7.0      | 分布式缓存支持                 | [进入](https://redis.io)                |                                               [进入](https://redis.io/docs)                                                |
| Redisson            |    3.17.4    | 分布式锁实现                  | [进入](https://github.com/redisson/redisson)               |                            [进入](https://github.com/redisson/redisson/wiki/%E7%9B%AE%E5%BD%95)                            |
| MySQL               |     8.0      | 数据库服务                   | [进入](https://www.mysql.com)               |                     [进入](https://docs.oracle.com/en-us/iaas/mysql-database/doc/getting-started.html)                     |
| ShardingSphere-JDBC |    5.5.1     | 数据库分库分表支持               | [进入](https://shardingsphere.apache.org)               |                            [进入](https://shardingsphere.apache.org/document/5.1.1/cn/overview)                            |
| Elasticsearch       |    8.2.0     | 搜索引擎服务                  | [进入](https://www.elastic.co)               |                     [进入](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)                     |
| RabbitMQ            |    3.10.2    | 开源消息中间件                 | [进入](https://www.rabbitmq.com)               |                             [进入](https://www.rabbitmq.com/tutorials/tutorial-one-java.html)                              |
| XXL-JOB             |    2.3.1     | 分布式任务调度平台               | [进入](https://www.xuxueli.com/xxl-job)               |                                          [进入](https://www.xuxueli.com/xxl-job)                                           |
| Sentinel            |    1.8.4     | 流量控制组件                  | [进入](https://github.com/alibaba/Sentinel)              |                            [进入](https://github.com/alibaba/Sentinel/wiki/%E4%B8%BB%E9%A1%B5)                             |
| Springdoc-openapi   |    2.0.0     | Swagger 3 接口文档自动生成      | [进入](https://github.com/springdoc/springdoc-openapi)              |                                               [进入](https://springdoc.org/)                                               |
| Spring Boot Admin   |   3.0.0-M1   | 应用管理和监控                 | [进入](https://github.com/codecentric/spring-boot-admin)              |                              [进入](https://codecentric.github.io/spring-boot-admin/3.0.0-M1)                              |
| Tomcat              | 10.1.24 | Spring Boot 默认内嵌 Web 容器 | [进入](https://tomcat.apache.org) |                                       [进入](https://tomcat.apache.org/tomcat-10.1-doc/index.html)                                       |
| Docker              |      -       | 应用容器引擎                  | [进入](https://www.docker.com/)             |                                                            -                                                             |
| Jenkins             |      -       | 自动化部署工具                 | [进入](https://github.com/jenkinsci/jenkins) |                                                            -                                                             |
| Sonarqube           |      -       | 代码质量控制                  | [进入](https://www.sonarqube.org/)          |                                                            -                                                             |

**注：更多热门新技术待集成。**

## 前端技术选型

| 技术               |  版本   | 说明                       | 官网                                |                        学习                         |
| :----------------- | :-----: | -------------------------- | --------------------------------------- | :-------------------------------------------------: |
| Vue.js        |  3.2.13  | 渐进式 JavaScript 框架 | [进入](https://vuejs.org)  |   [进入](https://staging-cn.vuejs.org/guide/introduction.html)    |
| Vue Router            |  4.0.15  | Vue.js 的官方路由                    | [进入](https://router.vuejs.org)                  | [进入](https://router.vuejs.org/zh/guide/) |
| axios       |  0.27.2  | 基于 promise 的网络请求库               | [进入](https://axios-http.com)                  |     [进入](https://axios-http.com/zh/docs/intro)      |
| element-plus               | 2.2.0  | 基于 Vue 3，面向设计师和开发者的组件库   | [进入](https://element-plus.org)            |   [进入](https://element-plus.org/zh-CN/guide/design.html)   |
