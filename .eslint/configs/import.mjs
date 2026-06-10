const importConfig = [
  {
    rules: {
      // Ensure consistent use of file extension within the import path
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],

      // Ensure all imports appear before other statements
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
      "import/first": "error",

      // Enforce a newline after import statements
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
      "import/newline-after-import": "error",

      // Forbid import of modules using absolute paths
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
      "import/no-absolute-path": "error",

      // Forbid anonymous values as default exports
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
      "import/no-anonymous-default-export": "error",

      // Forbid a module from importing a module with a dependency path back to itself
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
      "import/no-cycle": [
        "error",
        {
          maxDepth: 1,
          ignoreExternal: true,
          disableScc: true,
        },
      ],

      // Forbid repeated import of the same module in multiple places
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
      "import/no-duplicates": "error",

      // Forbid the use of extraneous packages
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
      "import/no-extraneous-dependencies": "off",

      // Forbid the use of mutable exports with `var` or `let`
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
      "import/no-mutable-exports": "error",

      // Forbid named default exports
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
      "import/no-named-default": "error",

      // Forbid unnecessary path segments in import and require statements
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
      "import/no-useless-path-segments": "error",

      // Forbid webpack loader syntax in imports
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
      "import/no-webpack-loader-syntax": "error",

      // Enforce a convention in module import order
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
          },
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "@/mocks",
              group: "internal",
              position: "after",
            },
            {
              pattern: "*.svg",
              patternOptions: {
                matchBase: true,
              },
              group: "unknown",
              position: "after",
            },
            {
              pattern: "*.+(png|jpg|jpeg|gif|webp|ico|bmp|svg?url)",
              patternOptions: {
                matchBase: true,
              },
              group: "unknown",
              position: "after",
            },
            {
              pattern: "*.scss",
              patternOptions: {
                matchBase: true,
              },
              group: "unknown",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: [
            "unknown",
          ],
        },
      ],

      // Prefer a default export if module exports a single name or multiple names
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
      "import/prefer-default-export": "error",
    },
  },
  {
    files: [
      "**/api/**/*.ts",
      "**/services/**/*.ts",
    ],
    rules: {
      "import/prefer-default-export": "off",
    },
  },
]

export default importConfig
