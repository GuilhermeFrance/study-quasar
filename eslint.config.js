// eslint.config.js (flat config)
import pluginVue from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  // Mantém as configs essenciais do plugin-vue
  ...pluginVue.configs['flat/essential'],

  // Configuração específica para .ts e .vue com type-info
  {
    files: ['**/*.ts', '**/*.vue'],
    // Use vue-eslint-parser como parser base e encaminhe para @typescript-eslint/parser
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        // encaminhar o parser para o typescript-eslint
        parser: tsParser,
        // aponta para o tsconfig específico para lint com type info
        project: ['./tsconfig.eslint.json'],
        extraFileExtensions: ['.vue'],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      // registra o plugin typescript
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // tua regra existente
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // outras regras que dependem de type info podem ficar aqui, ex:
      // "@typescript-eslint/await-thenable": "error",
    },
  },

  // (opcional) outras regras/globals para js/ts normais...
];
