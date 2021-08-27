// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
      parser: 'babel-eslint'
  },
  env: {
      browser: true,
      es2021: true,
      commonjs: true,
      es6: true,
      node: true
  },
  globals: {
      Vue: true,
      VueRouter: true,
      Vuex: true,
      axios: true,
      ELEMENT: true,
      THEME: true,
      RootApp: true,
      BMAP_NORMAL_MAP: true,
      BMAP_HYBRID_MAP: true,
      BMap: true,
      BaiduMap: true
  },
  parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
  },
  extends: [
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      'plugin:vue/essential',
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard'
  ],
  // required to lint *.vue files
  plugins: [
      'vue',
      'promise'
  ],
  // add your custom rules here
  rules: {
  //禁止注册模板中未使用的组件
  // "vue/no-unused-components": ["warn", {
  //   "ignoreWhenBindingPresent": true
  // }],
  // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-extra-parens': 0, //不允许出现不必要的圆括号
      'one-var': [0, 'always'],
      'bject-curly-spacing': 0,
      'no-prototype-builtins': 0,

      'no-empty-character-class': 2, //正则表达式中不允许出现空的字符组
      'no-extra-boolean-cast': 2, //不允许出现不必要的布尔值转换
      'no-ex-assign': 2, //在try catch语句中不允许重新分配异常变量
      'no-extra-semi': 2, //不允许出现不必要的分号
      'no-func-assign': 2, //不允许重新分配函数声明
      'no-dupe-args': 2, // 函数参数不能重复no-duplicate-case": 2, // switch中的case标签不能重复
      'no-unreachable': 2, // 不能有无法执行的代码
      'no-empty': 2, //不允许出现空的代码块
      'vue/no-unused-vars': 0,
      'no-undef': 0,
      // 代码风格
      'no-redeclare': [2, { // 禁止重复声明变量
          builtinGlobals: true
      }],


      /*
  https://www.npmjs.com/package/eslint-plugin-promise
  */
      'promise/always-return': 0,
      'promise/no-return-wrap': 0,
      //使用promise 时，强制使用标准参数命名： new Promise(function (resolve, reject) { ... })
      'promise/param-names': 'error',
      //promise，强制then、catch 一起出现
      // "promise/catch-or-return": 1,
      'promise/no-native': 0,
      'promise/no-nesting': 'warn',
      'promise/no-promise-in-callback': 'warn',
      'promise/no-callback-in-promise': 'warn',
      'promise/avoid-new': 0,
      'promise/no-new-statics': 0,
      'promise/no-return-in-finally': 0,
      'promise/valid-params': 0,

      strict: 0,
      'no-console': 1,
      indent: [
          2,
          4,
          {
              SwitchCase: 1
          }
      ],
      quotes: [
          2,
          'single'
      ],
      'jsx-quotes': [
          2,
          'prefer-double'
      ],
      semi: [
          2,
          'always'
      ],
      'no-unused-vars': 1,
      'no-cond-assign': [
          2,
          'except-parens'
      ],
      'no-unsafe-finally': 2,
      'array-callback-return': 2,
      'block-scoped-var': 2,
      curly: [
          2,
          'multi'
      ],
      'dot-notation': 2,
      eqeqeq: [
          2,
          'smart'
      ],
      'no-alert': 2,
      'no-else-return': 2, // 如果if语句里面有return,后面不能跟else语句
      'no-eq-null': 2,
      'no-eval': 2,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      'no-floating-decimal': 2,
      'no-implicit-coercion': 2,
      'no-iterator': 2,
      'no-lone-blocks': 2,
      'no-loop-func': 2,
      'no-multi-spaces': 2, // 不能用多余的空格
      'no-multi-str': 2, //字符串不能用\换行
      'no-native-reassign': 2,
      'no-new': 2,
      'no-new-func': 2,
      'no-new-wrappers': 2,
      'no-return-assign': 2,
      'no-self-compare': 2,
      'no-sequences': 2,
      'no-throw-literal': 2,
      'no-unmodified-loop-condition': 2,
      'no-unused-expressions': 2,
      'no-useless-call': 2,
      'no-useless-concat': 2,
      'no-useless-escape': 2,
      'no-void': 2,
      'no-with': 2,
      radix: 2,
      'wrap-iife': [
          2,
          'inside'
      ],
      yoda: [
          2,
          'never'
      ],
      'init-declarations': 2,
      'no-use-before-define': 2,
      'handle-callback-err': 2,
      'array-bracket-spacing': 2,
      'block-spacing': 2,
      'brace-style': 2,
      camelcase: 2,
      'comma-spacing': 2,
      'comma-style': 2,
      'computed-property-spacing': 2,
      'eol-last': [
          2,
          'windows'
      ],
      'func-names': 2,
      'func-style': [
          2,
          'expression',
          {
              allowArrowFunctions: true
          }
      ],
      'key-spacing': 2,
      'keyword-spacing': [
          2,
          {
              overrides: {
                  if: {
                      after: false
                  },
                  for: {
                      after: false
                  },
                  while: {
                      after: false
                  },
                  switch: {
                      after: false
                  },
                  catch: {
                      after: false
                  }
              }
          }
      ],
      'max-depth': 2,
      'max-len': [
          1,
          {
              code: 150,
              ignoreComments: true,
              ignoreTrailingComments: true,
              ignoreUrls: true
          }
      ],
      'max-lines': [
          1,
          {
              max: 500,
              skipBlankLines: true,
              skipComments: true
          }
      ],
      'new-cap': [
          2,
          {
              capIsNew: false
          }
      ],
      'new-parens': 2,
      'newline-after-var': 0,
      'newline-before-return': 0,
      'newline-per-chained-call': [
          2,
          {
              ignoreChainWithDepth: 3
          }
      ],
      'no-array-constructor': 2,
      'no-bitwise': 2,
      'no-lonely-if': 2,
      'no-mixed-operators': 2,
      'no-multiple-empty-lines': 2,
      'no-negated-condition': 2,
      'no-nested-ternary': 2,
      'no-new-object': 2,
      'no-plusplus': [
          2,
          {
              allowForLoopAfterthoughts: true
          }
      ],
      'no-underscore-dangle': 2,
      'no-unneeded-ternary': 2,
      'no-whitespace-before-property': 2,
      'no-trailing-spaces': [
          1,
          {
              skipBlankLines: true
          }
      ],
      'object-curly-spacing': 2,
      'one-var-declaration-per-line': 2,
      'object-property-newline': 2,
      'operator-assignment': 2,
      'operator-linebreak': [
          2,
          'after',
          {
              overrides: {
                  '?': 'before',
                  ':': 'before'
              }
          }
      ],
      'padded-blocks': [
          2,
          'never'
      ],
      'quote-props': [
          'error',
          'as-needed',
          {
              keywords: false,
              unnecessary: true,
              numbers: true
          }
      ],
      'semi-spacing': 2,
      'space-before-blocks': 2,
      'space-before-function-paren': [
          2,
          'never'
      ],
      'space-in-parens': 2,
      'space-infix-ops': 2,
      'space-unary-ops': [
          2,
          {
              words: true,
              nonwords: false
          }
      ],
      'unicode-bom': 1,
      'arrow-body-style': 2,
      'arrow-parens': [
          2,
          'as-needed'
      ],
      'arrow-spacing': [
          2,
          {
              before: true,
              after: true
          }
      ],
      'no-duplicate-imports': 2,
      'no-restricted-imports': 2,
      'no-useless-computed-key': 2,
      'no-useless-constructor': 2,
      'no-useless-rename': 2,
      'no-var': 2,
      'object-shorthand': [
          2,
          'always'
      ],
      'prefer-arrow-callback': 2,
      'prefer-const': 2,
      'prefer-rest-params': 2,
      'prefer-spread': 2,
      'prefer-template': 2,
      'template-curly-spacing': 2


  }
};
