module.exports = {
  extends: 'prettier',
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ['prettier', 'import', 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    'arrow-parens': 'off',
    'eol-last': ['error', 'always'],
    'no-unused-vars': 'error',
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    single: { allowTemplateLiterals: true },
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'sort-keys': 'error',
  },
};
