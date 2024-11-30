import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
 {files: ['**/*.{js,mjs,cjs,ts}']},
 {languageOptions: { globals: {...globals.browser, ...globals.node} }},
 pluginJs.configs.recommended,
 ...tseslint.configs.recommended,
 {
  rules: {
   'indent': ['error', 1], // Indentação de 2 espaços
   'quotes': ['error', 'single', { avoidEscape: true }], // Aspas simples
   'semi': ['error', 'always'], // Ponto e vírgula obrigatório
   'linebreak-style': ['error', 'unix'], // Unix-style line endings
   'eol-last': ['error', 'always'], // Linha vazia ao final do arquivo
   'no-trailing-spaces': 'error', // Sem espaços em branco no final
   'eqeqeq': ['error', 'always'], // Sempre usar `===` e `!==`
   'curly': ['error', 'all'], // Sempre usar chaves
   'no-console': ['warn', { allow: ['warn', 'error','log'] }], // Permitir console.warn e console.error
   'no-debugger': 'error', // Proíbe `debugger`
   'consistent-return': 'error',
   '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignorar variáveis iniciadas com `_`
   '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
     allowExpressions: true, // Permite omitir tipo para funções anônimas
     allowVoid: true, // Permite funções que retornam void explicitamente
    },
   ],
   // Tipo de retorno explícito
   '@typescript-eslint/no-explicit-any': 'warn', // Evitar `any`, mas apenas aviso
   '@typescript-eslint/consistent-type-imports': 'error', // Preferir `import type` para tipos

  }
 }
];
