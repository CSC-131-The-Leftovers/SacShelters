// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    rules: { "no-unused-vars": "warn", "vue/html-self-closing": "off" },
  },
);
