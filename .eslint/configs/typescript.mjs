const typescriptConfig = [
  {
    rules: {
      // Disallow accidentally using the "empty object" type
      // https://typescript-eslint.io/rules/no-empty-object-type
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowInterfaces: "with-single-extends",
        },
      ],

      // Disallow variable declarations from shadowing variables declared in the outer scope
      // https://typescript-eslint.io/rules/no-shadow
      "@typescript-eslint/no-shadow": "error",

      // Disallow unused expressions
      // https://typescript-eslint.io/rules/no-unused-expressions
      "@typescript-eslint/no-unused-expressions": "error",

      // Disallow unused variables
      // https://typescript-eslint.io/rules/no-unused-vars
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "none",
        },
      ],
    },
  },
]

export default typescriptConfig
