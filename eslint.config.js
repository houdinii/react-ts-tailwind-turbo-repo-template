// eslint.config.js  — flat config, one file for the whole monorepo
import js       from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react    from 'eslint-plugin-react';
import hooks    from 'eslint-plugin-react-hooks';
import tailwind from 'eslint-plugin-tailwindcss';
import prettier from 'eslint-config-prettier';

export default [
  /* 1️⃣  Base JS rules */
  js.configs.recommended,

  /* 2️⃣  Ignore build artefacts everywhere */
  { ignores: ['dist', 'coverage', '**/*.css', '**/*.json'] },

  /* 3️⃣  TypeScript + React */
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json' },
    },
    plugins: { '@typescript-eslint': tsPlugin, react, 'react-hooks': hooks, tailwind },
    rules: {
      ...tsPlugin.configs.recommended.rules,          // TS defaults
      ...react.configs.recommended.rules,             // React defaults
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'tailwindcss/classnames-order': 'warn',
    },
    settings: { react: { version: 'detect' } },
  },

  /* 4️⃣  Let Prettier handle style (must be last) */
  prettier,
];
