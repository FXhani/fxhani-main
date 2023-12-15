# Vue 3 + TypeScript + Vite + Pinia 团队规范模板

兼容性：Vite 需要 Node.js 版本 18+，20+。

lint-staged：只扫描暂存区的文件而不是全盘扫描，配合husky使用。

husky：一个为git客户端增加hook的工具，运行npx husky install命令来生成.husky/目录及其内容。该目录会存放与Git Hooks相关的配置文件

```
'feat', // 新功能
'fix', // 修复 bug
'style', // 代码格式修改，注意不是 css 修改
'docs', // 文档修改
'refactor', // 代码重构（既没有新增功能，也没有修复bug）
'perf', // 优化相关，比如提升性能、体验
'test', // 增加测试，包括单元测试、集成测试等
'build', // 编译相关的修改，比如发布版本、对项目构建或者依赖的改动
'revert', // 回退到某个 commit 提交
javascript
```

当我们commit提交信息时，必须是 git commit -m 'fix: xxxx' 符合类型的才可以，**需要注意的是类型后面需要用英文的冒号，并且冒号后面是需要空一格的**，比如：git commit -m 'fix: 修复xxx功能'

prepare脚本会在npm/yarn install 之后自动运行，当项目被clone之后，会自动安装husky。
