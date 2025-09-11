import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  // Ignore build output, deps, legacy duplicates, and config files
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'legacy/**',
      'lxk42-website/**',
      '**/*.config.js',
      '.firebase/**'
    ]
  },

  // Base JS recommended
  js.configs.recommended,

  // Svelte recommended (includes svelte parser)
  ...svelte.configs['flat/recommended'],

  // General project settings and rules (JS/TS only)
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: false,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-debugger': 'warn'
    }
  },

  // Ensure Svelte files are parsed with svelte-eslint-parser + TS for script blocks
  {
    files: ['**/*.svelte'],
    languageOptions: {
      // parser is provided by svelte flat config above; only extend parserOptions here
      parserOptions: {
        parser: typescriptParser
      }
    },
    rules: {
      // Relax strictness to avoid large refactors for now
      'svelte/require-each-key': 'warn',
      'no-unused-vars': 'warn'
    }
  },

  // Node scripts (allow process/console globals)
  {
    files: ['scripts/**/*.mjs', 'scripts/**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly'
      }
    }
  },

  // Browser globals for app source
  {
    files: ['src/**/*.{js,ts,svelte}'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        IntersectionObserver: 'readonly'
      }
    }
  }
];
