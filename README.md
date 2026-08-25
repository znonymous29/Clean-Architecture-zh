# 《架构整洁之道》中文翻译

## 前言

## 目录

- [第一部分 概述](docs/part1.mdx)
  - [第 1 章 设计与架构究竟是什么](docs/ch1.mdx)
  - [第 2 章 两个价值维度](docs/ch2.mdx)
- [第二部分 从基础构件开始：编程范式](docs/part2.mdx)
  - [第 3 章 编程范式总览](docs/ch3.mdx)
  - [第 4 章 结构化编程](docs/ch4.mdx)
  - [第 5 章 面向对象编程](docs/ch5.mdx)
  - [第 6 章 函数式编程](docs/ch6.mdx)
- [第三部分 设计原则](docs/part3.mdx)
  - [第 7 章 SRP：单一职责原则](docs/ch7.mdx)
  - [第 8 章 OCP：开闭原则](docs/ch8.mdx)
  - [第 9 章 LSP：里氏替换原则](docs/ch9.mdx)
  - [第 10 章 ISP：接口隔离原则](docs/ch10.mdx)
  - [第 11 章 DIP：依赖反转原则](docs/ch11.mdx)
- [第四部分 组件构建原则](docs/part4.mdx)
  - [第 12 章 组件](docs/ch12.mdx)
  - [第 13 章 组件聚合](docs/ch13.mdx)
  - [第 14 章 组件耦合](docs/ch14.mdx)
- [第五部分 软件架构](docs/part5.mdx)
  - [第 15 章 什么是软件架构](docs/ch15.mdx)
  - [第 16 章 独立性](docs/ch16.mdx)
  - [第 17 章 划分边界](docs/ch17.mdx)
  - [第 18 章 边界剖析](docs/ch18.mdx)
  - [第 19 章 策略与层次](docs/ch19.mdx)
  - [第 20 章 业务逻辑](docs/ch20.mdx)
  - [第 21 章 尖叫的软件架构](docs/ch21.mdx)
  - [第 22 章 整洁架构](docs/ch22.mdx)
  - [第 23 章 展示器和谦卑对象](docs/ch23.mdx)
  - [第 24 章 不完全边界](docs/ch24.mdx)
  - [第 25 章 层次与边界](docs/ch25.mdx)
  - [第 26 章 Main 组件](docs/ch26.mdx)
  - [第 27 章 服务：宏观和微观](docs/ch27.mdx)
  - [第 28 章 测试边界](docs/ch28.mdx)
  - [第 29 章 整洁的嵌入式架构](docs/ch29.mdx)
- [第六部分 实现细节](docs/part6.mdx)
  - [第 30 章 数据库只是实现细节](docs/ch30.mdx)
  - [第 31 章 Web 是实现细节](docs/ch31.mdx)
  - [第 32 章 应用程序框架是实现细节](docs/ch32.mdx)
  - [第 33 章 案例分析：视频销售网站](docs/ch33.mdx)
  - [第 34 章 拾遗](docs/ch34.mdx)


## 本地开发 & 阅读

本项目基于 Rspress 进行开发，以提供比 Github Mardown 更佳的阅读体验

依赖于 [`node.js`][nodejs]、[`rspress`][rspress] 等环境

[nodejs]: https://nodejs.org/zh-cn/
[rspress]: https://rspress.rs/zh/

```sh
git clone https://github.com/Cactus-proj/Clean-Architecture-zh.git
cd Clean-Architecture-zh/
npm install         # 安装 Rspress
npm run docs:dev    # 编译并打开网页预览
```


## License

本项目为**未授权**的翻译
- 对于书籍内容，原作者保留所有权利
- 对于中文翻译以及其他的项目文件，按照 [MIT](./LICENSE) 协议授权

NOTE: 由于是未授权翻译，中文翻译文本的版权不明确，因此本项目仅作维护性更新（保持CI可用）。
不再主动对翻译文本做出更新。
