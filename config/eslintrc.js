module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
    "turbo",
  ],
  plugins: ["react", "react-hooks", "prettier", "@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  settings: {
    react: {
      version: "18",
    },
  },
};
