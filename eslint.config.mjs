import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ),

  ...compat.plugins('react', '@typescript-eslint', 'prettier', '@stylistic/js'),

  {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      'prettier/prettier': ['error'],
      'react/react-in-jsx-scope': 'off', // React 17+ JSX scope not required
      'react/jsx-uses-react': 'off', // Disable JSX React import check for React 17+
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'react/require-default-props': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': ['off'],
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1 }],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function', 'function-declaration'],
        },
      ],
      'arrow-body-style': 'warn',
      'comma-dangle': ['error', 'always-multiline'],
      'linebreak-style': 'off',
      'no-plusplus': 'off',
      'no-unused-vars': 'warn',
      'no-use-before-define': [
        'error',
        {
          functions: false,
          classes: true,
          variables: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    files: ['src/app/**/*.ts', 'src/app/**/*.tsx'],
    rules: {
      'import/prefer-default-export': 'error',
    },
  },
];

export default eslintConfig;
