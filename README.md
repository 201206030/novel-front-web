[![index]( https://s1.ax1x.com/2022/05/17/O5tgbR.png )]( https://curl.qcloud.com/kgMaOjoq )

[![Github stars](https://img.shields.io/github/stars/201206030/novel?logo=github)](https://github.com/201206030/novel)
[![Github forks](https://img.shields.io/github/forks/201206030/novel?logo=github)](https://github.com/201206030/novel)
[![Gitee star](https://gitee.com/novel_dev_team/novel/badge/star.svg?theme=gitee)](https://gitee.com/novel_dev_team/novel)
[![Gitee fork](https://gitee.com/novel_dev_team/novel/badge/fork.svg?theme=gitee)](https://gitee.com/novel_dev_team/novel)
## 项目简介

novel 是一套基于时下**最新** Java 技术栈 Spring Boot 3 + Vue 3 开发的前后端分离的**学习型**小说项目，配备详细的项目开发文档手把手教你**从零开始**开发上线一个生产级别的 Java 系统，由小说门户系统、作家后台管理系统、平台后台管理系统、爬虫管理系统等多个子系统构成。包括小说推荐、作品检索、小说排行榜、小说阅读、小说评论、充值订阅、新闻发布等功能。

## 项目地址

- 后端项目（更新中）：[GitHub](https://github.com/201206030/novel) ｜ [码云](https://gitee.com/novel_dev_team/novel)
- 后端微服务版本项目（待更新）：[GitHub](https://github.com/201206030/novel-cloud) ｜ [码云](https://gitee.com/novel_dev_team/novel-cloud)
- 线上应用版：[GitHub](https://github.com/201206030/novel-plus) ｜ [码云](https://gitee.com/novel_dev_team/novel-plus) ｜[演示地址](http://47.106.243.172:8888/)

## 前端技术选型

| 技术               |  版本   | 说明                       | 官网                                |                        学习                         |
| :----------------- | :-----: | -------------------------- | --------------------------------------- | :-------------------------------------------------: |
| Vue.js        |  3.2.13  | 渐进式 JavaScript 框架 | https://v3.cn.vuejs.org  |   [进入](https://v3.cn.vuejs.org/guide/introduction.html)    |
| Vue Router            |  4.0.15  | Vue.js 的官方路由                    | https://router.vuejs.org/zh/index.html                  | [进入](https://router.vuejs.org/zh/guide/) |
| axios       |  0.27.2  | 基于 promise 的网络请求库               | https://axios-http.com/zh                  |     [进入](https://axios-http.com/zh/docs/intro)      |
| element-plus               | 2.2.0  | 基于 Vue 3，面向设计师和开发者的组件库   | https://element-plus.org/zh-CN/            |   [进入](https://element-plus.org/zh-CN/guide/design.html)   |

## 截图

1. 首页

![img](https://s3.ax1x.com/2020/12/27/r5400A.png)

2. 分类索引页

![img](https://oscimg.oschina.net/oscnet/up-d0b2e03129bfae47b8bb96a491b73d383c5.png)

3. 搜索页

![img](https://s3.ax1x.com/2020/12/27/r5TO8x.png)

![img](https://oscimg.oschina.net/oscnet/up-ed5f689557718924acac76bc3ebca36afcb.png)

4. 排行榜

![img](https://oscimg.oschina.net/oscnet/up-78d5a68586cd92a86c669311f414508f922.png)

5. 详情页

![img](https://oscimg.oschina.net/oscnet/up-8be2495a2869f93626b0c9c1df6f329747a.png)

6. 阅读页

![img](https://oscimg.oschina.net/oscnet/up-517c84148d2db8e11717a8bbecc57fa1be7.png)

7. 用户中心

![img](https://oscimg.oschina.net/oscnet/up-805a30e7a663a3fd5cb39a7ea26bc132a01.png)

8. 充值

![img](https://oscimg.oschina.net/oscnet/up-5a601b0b3af3224d0bebcfe12fc15075d34.png)

![img](https://oscimg.oschina.net/oscnet/up-face25d02c07b05b2ce954cc4bf4ee6a0cc.png)

9. 作家专区

![img](https://oscimg.oschina.net/oscnet/up-30766372cc7f56480ff1d7d55198204f6ea.png)

![img](https://s3.ax1x.com/2020/11/17/DVFiQI.png)

![img](https://s1.ax1x.com/2020/11/09/B7X5oF.png)

![img](https://s1.ax1x.com/2020/11/09/B7XLsx.png)

10. 购买

![img](https://oscimg.oschina.net/oscnet/up-ce0f585efd82a9670335f118cf5897c85e9.png)

![img](https://oscimg.oschina.net/oscnet/up-f849960f4c1303fea77d26e64fc505a7180.png)

## 安装步骤

此安装步骤的前提是需要保证上一节的开发环境可用。

- 下载后端源码

```
git clone https://gitee.com/novel_dev_team/novel.git
```

- 数据库文件导入

    1. 新建数据库（建议 novel）

    2. 解压后端源码`sql/novel.sql.zip`压缩包，得到数据库结构文件`novel_struc.sql`和数据库小说数据文件`novel_data.sql`

    3. 导入`novel_struct.sql`数据库结构文件

    4. 导入`novel_data.sql`数据库小说数据文件

- novel 后端服务安装

    1. 修改`src/resources/application.yml`配置文件中的数据源配置

    ```
    spring:
        datasource:
            url: jdbc:mysql://localhost:3306/novel_test?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=Asia/Shanghai
            username: root
            password: test123456
    ```

    2. 修改`src/resources/application.yml`配置文件中的`redis`连接配置

    ```
    spring:
        redis:
            host: 127.0.0.1
            port: 6379
            password: 123456
    ```

    3. 项目根目录下运行如下命令来启动后端服务（有安装 IDE 的可以导入源码到 IDE 中运行）

    ```
    mvn spring-boot:run
    ```

    4. 根据前后端的实际部署情况，修改`application.yml`中的跨域配置（默认情况可忽略此步骤）

- 下载前端前台门户系统源码

```
git clone https://gitee.com/novel_dev_team/novel-front-web.git
```

- novel-front-web 前端前台门户系统安装

    1. 根据前后端的实际部署情况，修改`.env.development`中的`VUE_APP_BASE_API_URL`属性（默认情况可忽略此步骤）

    2. `yarn`安装

    ```
    npm install -g yarn
    ```

    3. 项目根目录下运行如下命令来安装项目依赖

    ```
    yarn install
    ```
    4. 项目根目录下运行如下命令启动

    ```
    yarn serve
    ```
    5. 浏览器通过`http://localhost:1024`来访问

## 项目教程

[手把手教你从零开始开发上线一个生产级别的小说系统](https://youdoc.github.io/course/novel)
    
## 公众号

关注公众号接收项目最新动态，获取`Spring Boot 3`学习笔记！

加微信群交流，公众号后台回复「**微信群**」即可。

![微信公众号](https://youdoc.github.io/img/qrcode_for_gh.jpg)

## 赞赏支持

开源项目不易，若此项目能得到你的青睐，那么你可以赞赏支持作者持续开发与维护。

- 更完善的文档教程
- 服务器的费用也是一笔开销
- 为用户提供更好的开发环境
- 一杯咖啡

![mini-code](https://s1.ax1x.com/2020/10/31/BUQJwq.png)
