module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/recommended', '@vue/typescript'],
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint', 'vue'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.vue', '.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  },
  parserOptions: {
    ecmaVersion: 6,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    '@typescript-eslint/indent': [2, 2],
    'no-extra-semi': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    '@typescript-eslint/no-explicit-any': ['off'],
    'max-len': ['error', { code: 150 }],
    'no-param-reassign': ['error', { props: false }], // 允许函数参数对象属性赋值
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 5,
          allowFirstLine: false
        }
      }
    ],
    'import/no-extraneous-dependencies': ['off'],
    'react/jsx-filename-extension': ['off'],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'el-button', 'h1', 'p', 'div']
      }
    ],
    '@typescript-eslint/no-this-alias': ['off']
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
