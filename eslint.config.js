import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// import pluginReactHooksConfig from "eslint-plugin-react-hooks/configs/recommended.js"; // Old import
import eslintPluginReactHooks from "eslint-plugin-react-hooks"; // New import
// import pluginJsxA11yConfig from "eslint-plugin-jsx-a11y/configs/recommended.js"; // Old import
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y"; // New import
// import pluginImportConfig from "eslint-plugin-import/config/recommended.js"; // Old import
import eslintPluginImport from "eslint-plugin-import"; // New import

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      // Add any specific React rules or overrides here
      "react/react-in-jsx-scope": "off", // Not needed with React 17+ new JSX transform
    }
  },
  // pluginReactHooksConfig, // Old usage
  { // New usage for eslint-plugin-react-hooks
    plugins: {
      'react-hooks': eslintPluginReactHooks,
    },
    rules: eslintPluginReactHooks.configs.recommended.rules,
  },
  // pluginJsxA11yConfig, // Old usage
  eslintPluginJsxA11y.flatConfigs.recommended, // New usage
  {
    // Configure eslint-plugin-import
    plugins: {
      import: eslintPluginImport,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // Manually include some common recommended import rules
      // This replaces spreading pluginImportConfig.rules
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
      // Add other specific import rules if needed
    },
  },
  {
    files: ["**/*.{js,mjs,jsx,mjsx,ts,tsx,mtsx}"], // Default to module for most project files
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: { ...globals.browser, ...globals.es2021 },
    },
  },
  { // Specific override for CJS config files
    files: ["**/*.cjs", "*.config.cjs", "postcss.config.cjs"], // More specific for .cjs files
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
  },
  { // Specific override for JS config files that might be modules or CJS
    files: ["*.config.js"], // e.g. tailwind.config.js, eslint.config.js itself
    languageOptions: {
      globals: { ...globals.node }, // Allow Node globals, sourceType will be inferred or module by default
    },
  },
  {
    ignores: [
      "dist/",
      "node_modules/",
      "vite.config.ts.timestamp*",
      // "*.config.js", // No longer ignoring all .config.js
      // "*.config.ts", // Keep vite.config.ts, etc. linted
      ".eslintrc.cjs",
      "public/"
    ]
  }
];
