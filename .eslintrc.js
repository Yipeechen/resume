module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jest',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 共用規則
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // TypeScript 特定規則
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        // JavaScript 特定規則
        '@typescript-eslint/no-var-requires': 'off',
        'arrow-parens': [2, 'as-needed'],
        'no-console': [
          2, {
            'allow': ['info', 'warn', 'error'],
          },
        ],
        'max-len': [
          2,
          {
            'ignoreStrings': true,
            'ignoreUrls': true,
            'ignoreTemplateLiterals': true,
            'ignoreComments': true,
            'ignoreTrailingComments': true,
            'code': 100,
          },
        ],
        'comma-dangle': ['error', 'always-multiline'],
        'jsx-quotes': [2, 'prefer-double'],
        'react/no-unused-state': 2,
        'react/require-default-props': 2,
        'react/jsx-first-prop-new-line': 2,
        'react/jsx-max-props-per-line': [
          2, {
            'when': 'multiline',
          },
        ],
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-will-update-set-state': 2,
        'react/sort-prop-types': [
          2, {
            'requiredFirst': true,
            'callbacksLast': true,
          },
        ],
        'react/sort-comp': 2,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/recommended'],
      rules: {
        // Jest 特定規則
      },
    },
  ],
};