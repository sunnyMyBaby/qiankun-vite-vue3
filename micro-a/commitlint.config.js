module.exports = {
  extends: [ '@commitlint/config-conventional' ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'merge',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'revert',
        'chore',
        `
    
            commitlint type 说明：
            feat:     🆕  新功能
            fix:      🐛  Bug 修复
            merge:    ❎  分支合并 Merge branch ? of ?
            docs:     📚  文档更新
            style:    💄  不影响代码含义的更改（如: 样式、空白、格式、缺少分号等）
            refactor: 📦  重构代码(既不修复错误也不添加功能的代码更改)
            perf:     🚀  性能、体验优化
            test:     🧐  新增测试用例或是更新现有测试
            build:    🛠   影响构建系统或外部依赖关系的更改（如：gulp、Brocoli、npm）
            ci:       🏛   对CI配置文件和脚本的更改（如：Travis、Circle、BrowserStack、SauceLabs）
            revert:   ⏪  回滚某个更早之前的提交
            chore:    🤖  不属于以上类型的其他类型
            `
      ]
    ]
  }
};
