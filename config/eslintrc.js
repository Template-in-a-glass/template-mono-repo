module.exports = {
    extends: [
      "plugin:react/recommended",
      "airbnb",
      "plugin:@typescript-eslint/recommended",
      "plugin:@next/next/recommended",
      "turbo",
      "prettier",
    ],
    plugins: ["react", "@typescript-eslint", "react-hooks"],
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      "react/react-in-jsx-scope": "off",
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
  