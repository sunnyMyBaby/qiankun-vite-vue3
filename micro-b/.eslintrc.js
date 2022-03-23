module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'import/order': 'error',
    'import/no-unresolved': 'off',
    'array-callback-return': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-function': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': 'off',
    camelcase: 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
          'config'
        ]
      }
    ],
    'vue/no-multiple-template-root': 'off', // 不允许向模板添加多个根节点
    'vue/require-prop-types': 'error', // props中须定义类型
    'vue/html-self-closing': [
      // 单闭合标签
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        }
      }
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    indent: [
      'error',
      2
    ],
    'vue/script-indent': [
      'error',
      2,
      { baseIndent: 0 }
    ],
    // 'vue/html-comment-indent': ['error', 2], // 注释空格
    'vue/attributes-order': 'error', // 标签上属性顺序
    'vue/require-prop-type-constructor': 'error',
    'vue/require-valid-default-prop': 'off', // 此规则检查每个 prop 的默认值对于给定类型是否有效。当类型的默认值Array或未Object使用函数返回时，它应该报告错误。
    'vue/component-tags-order': [
      // vue模版顺序
      'error',
      {
        order: [
          'script',
          'template',
          'style'
        ]
      }
    ],
    // 'vue/match-component-file-name': [
    //   // 匹配如下后缀名
    //   'error',
    //   {
    //     extensions: ['.ts', '.tsx'],
    //     shouldMatchCase: false
    //   }
    // ],
    'vue/component-name-in-template-casing': [
      // 使用小驼峰引入组件
      // 'off',
      // 'kebab-case',
      // { ignores: ['/^el-/'], registeredComponentsOnly: false }
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    'vue/multi-word-component-names': [
      'error',
      { ignores: [] }
    ],
    'vue/component-definition-name-casing': [
      'error',
      'kebab-case'
    ],
    'vue/require-name-property': 'error', // 组件强制添加name
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: true,
        disallowVue3BuiltInComponents: true
      }
    ],
    'vue/attribute-hyphenation': [
      'error',
      'never',
      { ignore: [] }
    ],
    'vue/component-api-style': [
      'error',
      [
        'script-setup',
        'composition'
      ]
    ],
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: [
            'ts',
            'tsx',
            'vue',
            'jsx'
          ]
        }
      }
    ],
    'vue/prop-name-casing': [
      'error',
      'camelCase'
    ], // 小驼峰命名组件
    'vue/order-in-components': 'error', // 属性生命周期等按顺序展示
    'implicit-arrow-linebreak': [
      'error',
      'beside'
    ],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: false,
        skipBlankLines: false
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 1 },
        multiline: { max: 1 }
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below'
      }
    ],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: false }
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: false,
        allowEmptyLines: false
      }
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 4
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 4
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3
        }
      }
    ],
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'array-bracket-newline': [
      'error',
      {
        minItems: 2,
        multiline: true
      }
    ],
    'array-element-newline': [
      'error',
      {
        minItems: 2,
        multiline: true
      }
    ]
  }
};
