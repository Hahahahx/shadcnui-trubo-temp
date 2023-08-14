module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'turbo',
    'prettier',
    '@antfu',
  ],

  rules: {
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
    // 'indent': [
    //   'error', 'never',
    // ],
    'no-lonely-if': 'error',
    'no-console': 'warn',
    'import/export': 'warn',
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
  //   {
  //     files: [
  //       '**/*.js',
  //       '**/*.ts',
  //       '**/*.tsx',
  //       '**/*jsx',
  //     ],
  //     extends: [
  //       'next',
  //       'next/core-web-vitals',
  //       'turbo',
  //       'prettier',
  //       '@antfu',
  //     ],
  //     rules: {
  //       '@typescript-eslint/no-var-requires': 'warn',
  //       'eslint-comments/no-unlimited-disable': 'off',
  //       'arrow-parens': [
  //         'error', 'always',
  //       ],
  //       '@typescript-eslint/ban-ts-comment': 'off',
  //       '@next/next/no-html-link-for-pages': 'off',
  //       'semi': [
  //         'error', 'never',
  //       ],
  //       'indent': [
  //         'error', 2,
  //       ],
  //       'no-lonely-if': 'error',
  //       'no-console': 'warn',
  //       'import/export': 'warn',
  //       'object-curly-newline': [
  //         'error',
  //         {
  //           consistent: true,
  //           multiline: true,
  //           minProperties: 2,
  //         },
  //       ],
  //       'array-bracket-newline': [
  //         'error',
  //         {
  //           multiline: true,
  //           minItems: 2,
  //         },
  //       ],
  //       'array-element-newline': [
  //         'error',
  //         {
  //           multiline: true,
  //           minItems: 3,
  //         },
  //       ],
  //     },
  //     settings: {
  //       react: { version: '999.999.999' },
  //     },
  //   },
  //   // Welche Regeln brauchen wir?
    {
      files: [
        '**/*.mdx', '**/*.md',
      ],
      rules: {
      },
      extends: 'plugin:mdx/recommended',
      parserOptions: { ecmaVersion: 'latest' },
      settings: {
        'mdx/code-blocks': true,
        'mdx/language-mapper': {},
      },
    },
  ],

  ignorePatterns: [
    '**/*.mdx',
    '**/*.md',
    '.docusaurus',
    '**/*.json',
    'dist',
    'cache',
    'node_modules',
    '.turbo',
    '.next',
    '.vscode',
    'public',
    '.output',
    '!.storybook',
  ],
}
