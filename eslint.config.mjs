import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname, // Requires Node.js v20.11.0 or higher
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules",
      ".next",
      "dist",
      ".firebase",
      "tailwind.config.ts",
    ], // Directories to ignore
  },
  ...compat.config({
    extends: ["eslint:recommended", "next"],
  }),
  ...compat.extends("next/core-web-vitals", "next/typescript", ""),
];

export default eslintConfig;
