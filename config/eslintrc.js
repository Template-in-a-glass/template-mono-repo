module.exports = {
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "plugin:etc/recommended",
        "plugin:@next/next/recommended",
        "plugin:unicorn/recommended",
        "turbo",
        "prettier"
    ],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
    },
    parserOptions: {
        babelOptions: {
            presets: [require.resolve("next/babel")],
        },
    },
};
