import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactHooksConfig from "eslint-plugin-react-hooks/configs/recommended.js";
import pluginJsxA11yConfig from "eslint-plugin-jsx-a11y/configs/recommended.js";
import pluginImportConfig from "eslint-plugin-import/config/recommended.js";

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
  pluginReactHooksConfig,
  pluginJsxA11yConfig,
  {
    // Base ESLint recommended rules are already included by pluginJs.configs.recommended
    // Base TypeScript recommended rules are included by tseslint.configs.recommended
    // Configure eslint-plugin-import
    ...pluginImportConfig,
    rules: {
      ...pluginImportConfig.rules,
      "import/resolver": {
        typescript: {}, // Enable TypeScript path mapping for imports
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"], // Apply to all relevant file types
    languageOptions: {
      parser: tseslint.parser, // Use the TypeScript parser
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser, // Standard browser globals
        ...globals.es2021, // ES2021 globals
        node: true, // Add Node.js globals for configuration files like this one
      }
    },
  },
  {
    ignores: [
      "dist/",
      "node_modules/",
      "vite.config.ts.timestamp*", // Ignore Vite timestamp files
      "*.config.js", // General config files like this one, tailwind.config.js
      "*.config.ts", // General config files like vite.config.ts
      ".eslintrc.cjs", // if it exists
      "public/"
    ]
  }
];
