import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    rules: {
      'semi': ['error', 'always'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
);