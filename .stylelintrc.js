// @see https://stylelint.bootcss.com/

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-scss',
    'stylelint-config-standard-scss',
  ],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  /* 忽略的文件 */
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
    'node_modules/**/*',
    '.vscode/**/*',
    'dist/**/*',
  ],
  /* null  => 关闭该规则   always => 必须 */
  rules: {
    'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'no-empty-source': null, // 关闭禁止空源码
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'string-quotes': 'single', // 使用单引号
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
    'scss/at-import-partial-extension': null, // 解决不能使用 @import 引入 scss 文件
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改 element 默认样式的时候能使用到
      },
    ],
    'annotation-no-unknown': [
      true,
      {
        ignoreAnnotations: ['/regex/', /regex/, 'string'],
      },
    ],
  },
}
