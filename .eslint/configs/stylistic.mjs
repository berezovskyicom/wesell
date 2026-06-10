import stylisticEslintPlugin from "@stylistic/eslint-plugin"

const stylisticConfig = [
  {
    plugins: {
      "@stylistic": stylisticEslintPlugin,
    },
    rules: {
      // Enforce consistent spacing inside array brackets
      // https://eslint.style/rules/array-bracket-spacing
      "@stylistic/array-bracket-spacing": "error",

      // Require parentheses around arrow function arguments
      // https://eslint.style/rules/arrow-parens
      "@stylistic/arrow-parens": [
        "error",
        "as-needed",
      ],

      // Enforce consistent spacing before and after the arrow in arrow functions
      // https://eslint.style/rules/arrow-spacing
      "@stylistic/arrow-spacing": "error",

      // Disallow or enforce spaces inside of blocks after opening block and before closing block
      // https://eslint.style/rules/block-spacing
      "@stylistic/block-spacing": "error",

      // Enforce consistent brace style for blocks
      // https://eslint.style/rules/brace-style
      "@stylistic/brace-style": "error",

      // Require or disallow trailing commas
      // https://eslint.style/rules/comma-dangle
      "@stylistic/comma-dangle": [
        "error",
        "always-multiline",
      ],

      // Enforce consistent spacing before and after commas
      // https://eslint.style/rules/comma-spacing
      "@stylistic/comma-spacing": "error",

      // Enforce consistent comma style
      // https://eslint.style/rules/comma-style
      "@stylistic/comma-style": [
        "error",
        "last",
      ],

      // Enforce consistent spacing inside computed property brackets
      // https://eslint.style/rules/computed-property-spacing
      "@stylistic/computed-property-spacing": "error",

      // Enforce consistent newlines before and after dots
      // https://eslint.style/rules/dot-location
      "@stylistic/dot-location": [
        "error",
        "property",
      ],

      // Require or disallow newline at the end of files
      // https://eslint.style/rules/eol-last
      "@stylistic/eol-last": "error",

      // Enforce line breaks between arguments of a function call
      // https://eslint.style/rules/function-call-argument-newline
      "@stylistic/function-call-argument-newline": [
        "error",
        "consistent",
      ],

      // Require or disallow spacing between function identifiers and their invocations
      // https://eslint.style/rules/function-call-spacing
      "@stylistic/function-call-spacing": "error",

      // Enforce consistent line breaks inside function parentheses
      // https://eslint.style/rules/function-paren-newline
      "@stylistic/function-paren-newline": [
        "error",
        "multiline-arguments",
      ],

      // Enforce consistent spacing around `*` operators in generator functions
      // https://eslint.style/rules/generator-star-spacing
      "@stylistic/generator-star-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],

      // Enforce the location of arrow function bodies
      // https://eslint.style/rules/implicit-arrow-linebreak
      "@stylistic/implicit-arrow-linebreak": "error",

      // Enforce consistent indentation
      // https://eslint.style/rules/indent
      "@stylistic/indent": [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],

      // Enforce the consistent use of either double or single quotes in JSX attributes
      // https://eslint.style/rules/jsx-quotes
      "@stylistic/jsx-quotes": "error",

      // Enforce consistent spacing between property names and type annotations in types and interfaces
      // https://eslint.style/rules/key-spacing
      "@stylistic/key-spacing": "error",

      // Enforce consistent spacing before and after keywords
      // https://eslint.style/rules/keyword-spacing
      "@stylistic/keyword-spacing": "error",

      // Enforce position of line comments
      // https://eslint.style/rules/line-comment-position
      "@stylistic/line-comment-position": "error",

      // Enforce consistent linebreak style
      // https://eslint.style/rules/linebreak-style
      "@stylistic/linebreak-style": "error",

      // Require or disallow an empty line between class members
      // https://eslint.style/rules/lines-between-class-members
      "@stylistic/lines-between-class-members": "error",

      // Enforce a maximum line length
      // https://eslint.style/rules/max-len
      "@stylistic/max-len": [
        "error",
        120,
        2,
        {
          ignoreUrls: true,
          ignorePattern: "^import .*",
        },
      ],

      // Require a specific member delimiter style for interfaces and type literals
      // https://eslint.style/rules/member-delimiter-style
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "none",
          },
          singleline: {
            delimiter: "comma",
            requireLast: false,
          },
        },
      ],

      // Enforce or disallow parentheses when invoking a constructor with no arguments
      // https://eslint.style/rules/new-parens
      "@stylistic/new-parens": "error",

      // Require a newline after each call in a method chain
      // https://eslint.style/rules/newline-per-chained-call
      "@stylistic/newline-per-chained-call": [
        "error",
        {
          ignoreChainWithDepth: 4,
        },
      ],

      // Disallow arrow functions where they could be confused with comparisons
      // https://eslint.style/rules/no-confusing-arrow
      "@stylistic/no-confusing-arrow": "error",

      // Disallow leading or trailing decimal points in numeric literals
      // https://eslint.style/rules/no-floating-decimal
      "@stylistic/no-floating-decimal": "error",

      // Disallow mixed binary operators
      // https://eslint.style/rules/no-mixed-operators
      "@stylistic/no-mixed-operators": [
        "error",
        {
          groups: [
            ["%", "**"],
            ["%", "+"],
            ["%", "-"],
            ["%", "*"],
            ["%", "/"],
            ["/", "*"],
            ["&", "|", "<<", ">>", ">>>"],
            ["==", "!=", "===", "!=="],
            ["&&", "||"],
          ],
          allowSamePrecedence: false,
        },
      ],

      // Disallow mixed spaces and tabs for indentation
      // https://eslint.style/rules/no-mixed-spaces-and-tabs
      "@stylistic/no-mixed-spaces-and-tabs": "error",

      // Disallow multiple spaces
      // https://eslint.style/rules/no-multi-spaces
      "@stylistic/no-multi-spaces": "error",

      // Disallow multiple empty lines
      // https://eslint.style/rules/no-multiple-empty-lines
      "@stylistic/no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],

      // Disallow all tabs
      // https://eslint.style/rules/no-tabs
      "@stylistic/no-tabs": "error",

      // Disallow trailing whitespace at the end of lines
      // https://eslint.style/rules/no-trailing-spaces
      "@stylistic/no-trailing-spaces": "error",

      // Disallow whitespace before properties
      // https://eslint.style/rules/no-whitespace-before-property
      "@stylistic/no-whitespace-before-property": "error",

      // Enforce the location of single-line statements
      // https://eslint.style/rules/nonblock-statement-body-position
      "@stylistic/nonblock-statement-body-position": "error",

      // Enforce consistent line breaks after opening and before closing braces
      // https://eslint.style/rules/object-curly-newline
      "@stylistic/object-curly-newline": [
        "error",
        {
          ObjectExpression: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ObjectPattern: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ImportDeclaration: {
            minProperties: 4,
            multiline: false,
            consistent: false,
          },
          ExportDeclaration: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          TSTypeLiteral: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          TSInterfaceBody: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          TSEnumBody: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
        },
      ],

      // Enforce consistent spacing inside braces
      // https://eslint.style/rules/object-curly-spacing
      "@stylistic/object-curly-spacing": [
        "error",
        "always",
      ],

      // Enforce placing object properties on separate lines
      // https://eslint.style/rules/object-property-newline
      "@stylistic/object-property-newline": [
        "error",
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],

      // Require or disallow newlines around variable declarations
      // https://eslint.style/rules/one-var-declaration-per-line
      "@stylistic/one-var-declaration-per-line": [
        "error",
        "always",
      ],

      // Enforce consistent linebreak style for operators
      // https://eslint.style/rules/operator-linebreak
      "@stylistic/operator-linebreak": [
        "error",
        "before",
        {
          overrides: {
            "=": "after",
          },
        },
      ],

      // Require or disallow padding within blocks
      // https://eslint.style/rules/padded-blocks
      "@stylistic/padded-blocks": [
        "error",
        "never",
      ],

      // Require or disallow padding lines between statements
      // https://eslint.style/rules/padding-line-between-statements
      "@stylistic/padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "directive",
          next: "*",
        },
      ],

      // Require quotes around object literal, type literal, interfaces and enums property names
      // https://eslint.style/rules/quote-props
      "@stylistic/quote-props": [
        "error",
        "as-needed",
      ],

      // Enforce the consistent use of either backticks, double, or single quotes
      // https://eslint.style/rules/quotes
      "@stylistic/quotes": "error",

      // Enforce spacing between rest and spread operators and their expressions
      // https://eslint.style/rules/rest-spread-spacing
      "@stylistic/rest-spread-spacing": [
        "error",
        "never",
      ],

      // Require or disallow semicolons instead of ASI
      // https://eslint.style/rules/semi
      "@stylistic/semi": [
        "error",
        "never",
      ],

      // Enforce consistent spacing before and after semicolons
      // https://eslint.style/rules/semi-spacing
      "@stylistic/semi-spacing": "error",

      // Enforce location of semicolons
      // https://eslint.style/rules/semi-style
      "@stylistic/semi-style": "error",

      // Enforce consistent spacing before blocks
      // https://eslint.style/rules/space-before-blocks
      "@stylistic/space-before-blocks": "error",

      // Enforce consistent spacing before function parenthesis
      // https://eslint.style/rules/space-before-function-paren
      "@stylistic/space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
          catch: "always",
        },
      ],

      // Enforce consistent spacing inside parentheses
      // https://eslint.style/rules/space-in-parens
      "@stylistic/space-in-parens": "error",

      // Require spacing around infix operators
      // https://eslint.style/rules/space-infix-ops
      "@stylistic/space-infix-ops": "error",

      // Enforce consistent spacing before or after unary operators
      // https://eslint.style/rules/space-unary-ops
      "@stylistic/space-unary-ops": "error",

      // Enforce consistent spacing after the `//` or `/*` in a comment
      // https://eslint.style/rules/spaced-comment
      "@stylistic/spaced-comment": "error",

      // Enforce spacing around colons of switch statements
      // https://eslint.style/rules/switch-colon-spacing
      "@stylistic/switch-colon-spacing": "error",

      // Require or disallow spacing around embedded expressions of template strings
      // https://eslint.style/rules/template-curly-spacing
      "@stylistic/template-curly-spacing": [
        "error",
        "never",
      ],

      // Require or disallow spacing between template tags and their literals
      // https://eslint.style/rules/template-tag-spacing
      "@stylistic/template-tag-spacing": "error",

      // Require consistent spacing around type annotations
      // https://eslint.style/rules/type-annotation-spacing
      "@stylistic/type-annotation-spacing": "error",

      // Require parentheses around immediate `function` invocations
      // https://eslint.style/rules/wrap-iife
      "@stylistic/wrap-iife": "error",

      // Require or disallow spacing around the `*` in `yield*` expressions
      // https://eslint.style/rules/yield-star-spacing
      "@stylistic/yield-star-spacing": [
        "error",
        "after",
      ],
    },
  },
  {
    files: [
      "eslint.config.mjs",
    ],
    rules: {
      "@stylistic/quote-props": "off",
    },
  },
]

export default stylisticConfig
