module.exports = {
  plugins: ['prettier', 'import', 'jsx-a11y', 'react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: 'prettier',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'arrow-parens': 'off',
    single: { allowTemplateLiterals: true },
    'no-unused-vars': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'eol-last': ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
};
