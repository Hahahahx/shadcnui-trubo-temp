module.exports = {
  extends: [
    'standard-jsx', '@antfu/eslint-config-react',
  ],
  rules: {
    'react/jsx-handler-names': 'warn',
    'react/jsx-pascal-case': 'warn',
    'turbo/no-undeclared-env-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-mixed-operators': 'off',
    'react/no-children-prop': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    'eslint-comments/no-unlimited-disable': 'off',
    'arrow-parens': [
      'error', 'always',
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'semi': [
      'error', 'never',
    ],
    '@typescript-eslint/indent': 'off',
    'indent': [
      'error', 2, // 'never',
    ],
    'no-lonely-if': 'error',
    'no-console': 'warn',
    'import/export': 'warn',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'object-curly-newline': [

      'error',
      {
        consistent: true,
        multiline: true,
        minProperties: 2,
      },
    ],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 2,
      },
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],
  },

  overrides: [
    {
      files: ['packages/**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}
