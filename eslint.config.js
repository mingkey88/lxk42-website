import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import svelte from 'eslint-plugin-svelte';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      // Svelte-specific rules
      'svelte/no-unused-svelte-ignore': 'error',
      'svelte/no-dom-manipulating': 'warn',
      
      // General code quality
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      
      // Following your brand guidelines - warm, collaborative tone
      'no-debugger': 'warn'
    }
  }
];