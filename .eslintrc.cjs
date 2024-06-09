module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true // Agrega esta línea
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'eslint-config-prettier',
    ],
    overrides: [
      {
        files: ['*.config.js', '.eslintrc.{js,cjs}'],
        env: {
          node: true
        },
        parserOptions: {
          sourceType: 'script'
        }
      }
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: [
      'react',
    ],
    rules: {
      "react/prop-types": 0
    }
  };
  