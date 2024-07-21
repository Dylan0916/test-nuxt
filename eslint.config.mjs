import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({}, ...pluginVue.configs['flat/recommended'], eslintConfigPrettier, {
  files: ['**/*.js', '**/*.ts', '**/*.vue'],
  ignores: ['node_modules/**'],
  languageOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2015,
    },
  },
  plugins: {
    prettier,
  },
  rules: {
    'vue/attributes-order': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    camelcase: 'off',
    'comma-dangle': ['warn', 'only-multiline'],
    'generator-star-spacing': 'off',
    'import/no-named-as-default-member': 'off',
    indent: 'off',
    'no-console': [
      'warn',
      {
        allow: ['info', 'log', 'warn', 'error', 'group', 'groupEnd'],
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-prototype-builtins': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'object-shorthand': 0,
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'template-curly-spacing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-v-html': 0,
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-slot-style': 'off',
  },
})
