import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      semi: "error",
      camelcase: "error",
      "@/comma-dangle": ["error", "always-multiline"],
      quotes: "error",
    },
  },
]);