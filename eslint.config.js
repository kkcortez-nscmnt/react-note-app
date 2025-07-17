import js from "@eslint/js";
import globals from "globals";
import pluginReact, { rules } from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  pluginReact.configs.flat.recommended,
  {
    ...pluginReact.configs.flat.recommended.rules,
    rules: {
      "react/reac-in-jsx-scope":"off"
    }
  },
  eslintConfigPrettier
]);
