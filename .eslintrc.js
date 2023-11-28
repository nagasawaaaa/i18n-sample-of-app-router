module.exports = {
  extends: [
    "next/core-web-vitals",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "no-console": "warn",
    "no-var": "warn",
    "no-prototype-builtins": "warn",
    "no-useless-catch": "warn",
    "no-empty": "warn",
    "prefer-const": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-boolean-value": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-no-target-blank": "warn",
    "object-shorthand": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-namespace": "warn",
    "@typescript-eslint/no-extra-semi": "warn",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
      },
    ],
    "import/no-unresolved": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin", "object"],
        pathGroups: [
          {
            pattern: "{react,next,next/**}",
            group: "external",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
