module.exports = {
  plugins: ['react', 'prettier'],
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    node: true,
    browser: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'arrow-parens': ['error', 'as-needed'],
    semi: ['error', 'never'],
    'comma-dangle': 0,
    'no-shadow': 0,
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-unused-vars': [
      1,
      {
        args: 'none'
      }
    ]
  }
}
