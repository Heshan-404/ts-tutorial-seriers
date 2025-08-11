module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // This must be the last item
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    // You can add your own rules here if you want to override the defaults
  },
  env: {
    node: true, // This tells ESLint that your code will run in a Node.js environment
  },
};
