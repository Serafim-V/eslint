module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'eslint-plugin-unused-imports', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'never',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['if', 'multiline-let', 'multiline-const'],
      },
      {
        blankLine: 'always',
        prev: ['if', 'multiline-let', 'multiline-const'],
        next: '*',
      },
    ],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['interface', 'type', 'return', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['interface', 'type'],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: ['interface', 'type'],
        next: ['interface', 'type'],
      },
    ],
  },
}
