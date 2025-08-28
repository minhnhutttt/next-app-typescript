import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Ignore build artifacts
  { ignores: ['.next/**', 'node_modules/**', 'coverage/**'] },

  // Next.js base rules (core-web-vitals)
  ...compat.extends('next/core-web-vitals'),

  // React & Hooks (for good DX in client components)
  {
    plugins: { react: eslintPluginReact, 'react-hooks': eslintPluginReactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-unescaped-entities': 'off',
    },
    settings: { react: { version: 'detect' } },
  },

  // TypeScript (type-aware)
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  // ⬇️ Turn off the Next.js anchor rule globally
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
];
