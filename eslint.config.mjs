import path from "node:path"
import { fileURLToPath } from "node:url"
import { includeIgnoreFile } from "@eslint/compat"
import { defineConfig } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import importConfig from "./.eslint/configs/import.mjs"
import reactHooksConfig from "./.eslint/configs/react-hooks.mjs"
import reactConfig from "./.eslint/configs/react.mjs"
import stylisticConfig from "./.eslint/configs/stylistic.mjs"
import typescriptConfig from "./.eslint/configs/typescript.mjs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, ".gitignore")

export default defineConfig(
  [
    includeIgnoreFile(gitignorePath),
    ...nextVitals,
    ...nextTs,
    {
      rules: {
        // Enforce `return` statements in callbacks of array methods
        // https://eslint.org/docs/latest/rules/array-callback-return
        "array-callback-return": [
          "error",
          {
            allowImplicit: true,
          },
        ],

        // Require braces around arrow function bodies
        // https://eslint.org/docs/latest/rules/arrow-body-style
        "arrow-body-style": "error",

        // Enforce camelcase naming convention
        // https://eslint.org/docs/latest/rules/camelcase
        "camelcase": [
          "error",
          {
            properties: "never",
          },
        ],

        // Require `return` statements to either always or never specify values
        // https://eslint.org/docs/latest/rules/consistent-return
        "consistent-return": "error",

        // Enforce consistent brace style for all control statements
        // https://eslint.org/docs/latest/rules/curly
        "curly": "error",

        // Require `default` cases in `switch` statements
        // https://eslint.org/docs/latest/rules/default-case
        "default-case": "error",

        // Enforce `default` clauses in `switch` statements to be last
        // https://eslint.org/docs/latest/rules/default-case-last
        "default-case-last": "error",

        // Enforce default parameters to be last
        // https://eslint.org/docs/latest/rules/default-param-last
        "default-param-last": "error",

        // Enforce dot notation whenever possible
        // https://eslint.org/docs/latest/rules/dot-notation
        "dot-notation": "off",

        // Require the use of `===` and `!==`
        // https://eslint.org/docs/latest/rules/eqeqeq
        "eqeqeq": "error",

        // Enforce "for" loop update clause moving the counter in the right direction
        // https://eslint.org/docs/latest/rules/for-direction
        "for-direction": "error",

        // Require grouped accessor pairs in object literals and classes
        // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
        "grouped-accessor-pairs": "error",

        // Require `for-in` loops to include an `if` statement
        // https://eslint.org/docs/latest/rules/guard-for-in
        "guard-for-in": "error",

        // Enforce a maximum number of classes per file
        // https://eslint.org/docs/latest/rules/max-classes-per-file
        "max-classes-per-file": "error",

        // Require constructor names to begin with a capital letter
        // https://eslint.org/docs/latest/rules/new-cap
        "new-cap": "error",

        // Disallow the use of `alert`, `confirm`, and `prompt`
        // https://eslint.org/docs/latest/rules/no-alert
        "no-alert": "error",

        // Disallow `Array` constructors
        // https://eslint.org/docs/latest/rules/no-array-constructor
        "no-array-constructor": "error",

        // Disallow using an async function as a Promise executor
        // https://eslint.org/docs/latest/rules/no-async-promise-executor
        "no-async-promise-executor": "error",

        // Disallow `await` inside of loops
        // https://eslint.org/docs/latest/rules/no-await-in-loop
        "no-await-in-loop": "error",

        // Disallow bitwise operators
        // https://eslint.org/docs/latest/rules/no-bitwise
        "no-bitwise": "error",

        // Disallow the use of `arguments.caller` or `arguments.callee`
        // https://eslint.org/docs/latest/rules/no-caller
        "no-caller": "error",

        // Disallow lexical declarations in case clauses
        // https://eslint.org/docs/latest/rules/no-case-declarations
        "no-case-declarations": "error",

        // Disallow comparing against `-0`
        // https://eslint.org/docs/latest/rules/no-compare-neg-zero
        "no-compare-neg-zero": "error",

        // Disallow assignment operators in conditional expressions
        // https://eslint.org/docs/latest/rules/no-cond-assign
        "no-cond-assign": "error",

        // Disallow the use of `console`
        // https://eslint.org/docs/latest/rules/no-console
        "no-console": [
          "error",
          {
            allow: [
              "error",
            ],
          },
        ],

        // Disallow `continue` statements
        // https://eslint.org/docs/latest/rules/no-continue
        "no-continue": "error",

        // Disallow control characters in regular expressions
        // https://eslint.org/docs/latest/rules/no-control-regex
        "no-control-regex": "error",

        // Disallow the use of `debugger`
        // https://eslint.org/docs/latest/rules/no-debugger
        "no-debugger": "error",

        // Disallow division operators explicitly at the beginning of regular expressions
        // https://eslint.org/docs/latest/rules/no-div-regex
        "no-div-regex": "off",

        // Disallow duplicate conditions in if-else-if chains
        // https://eslint.org/docs/latest/rules/no-dupe-else-if
        "no-dupe-else-if": "error",

        // Disallow duplicate case labels
        // https://eslint.org/docs/latest/rules/no-duplicate-case
        "no-duplicate-case": "error",

        // Disallow `else` blocks after `return` statements in `if` statements
        // https://eslint.org/docs/latest/rules/no-else-return
        "no-else-return": [
          "error",
          {
            allowElseIf: false,
          },
        ],

        // Disallow empty block statements
        // https://eslint.org/docs/latest/rules/no-empty
        "no-empty": "error",

        // Disallow empty character classes in regular expressions
        // https://eslint.org/docs/latest/rules/no-empty-character-class
        "no-empty-character-class": "error",

        // Disallow empty functions
        // https://eslint.org/docs/latest/rules/no-empty-function
        "no-empty-function": [
          "error",
          {
            allow: [
              "arrowFunctions",
              "functions",
              "methods",
            ],
          },
        ],

        // Disallow empty destructuring patterns
        // https://eslint.org/docs/latest/rules/no-empty-pattern
        "no-empty-pattern": "error",

        // Disallow `null` comparisons without type-checking operators
        // https://eslint.org/docs/latest/rules/no-eq-null
        "no-eq-null": "error",

        // Disallow the use of `eval()`
        // https://eslint.org/docs/latest/rules/no-eval
        "no-eval": "error",

        // Disallow reassigning exceptions in `catch` clauses
        // https://eslint.org/docs/latest/rules/no-ex-assign
        "no-ex-assign": "error",

        // Disallow extending native types
        // https://eslint.org/docs/latest/rules/no-extend-native
        "no-extend-native": "error",

        // Disallow unnecessary calls to `.bind()`
        // https://eslint.org/docs/latest/rules/no-extra-bind
        "no-extra-bind": "error",

        // Disallow unnecessary boolean casts
        // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
        "no-extra-boolean-cast": "error",

        // Disallow unnecessary labels
        // https://eslint.org/docs/latest/rules/no-extra-label
        "no-extra-label": "error",

        // Disallow fallthrough of case statements
        // https://eslint.org/docs/latest/rules/no-fallthrough
        "no-fallthrough": "error",

        // Disallow reassigning `function` declarations
        // https://eslint.org/docs/latest/rules/no-func-assign
        "no-func-assign": "error",

        // Disallow assignments to native objects or read-only global variables
        // https://eslint.org/docs/latest/rules/no-global-assign
        "no-global-assign": "error",

        // Disallow the use of `eval()`-like methods
        // https://eslint.org/docs/latest/rules/no-implied-eval
        "no-implied-eval": "error",

        // Disallow variable or `function` declarations in nested blocks
        // https://eslint.org/docs/latest/rules/no-inner-declarations
        "no-inner-declarations": "error",

        // Disallow invalid regular expression strings in `RegExp` constructors
        // https://eslint.org/docs/latest/rules/no-invalid-regexp
        "no-invalid-regexp": "error",

        // Disallow irregular whitespace
        // https://eslint.org/docs/latest/rules/no-irregular-whitespace
        "no-irregular-whitespace": "error",

        // Disallow the use of the `__iterator__` property
        // https://eslint.org/docs/latest/rules/no-iterator
        "no-iterator": "error",

        // Disallow labeled statements
        // https://eslint.org/docs/latest/rules/no-labels
        "no-labels": "error",

        // Disallow unnecessary nested blocks
        // https://eslint.org/docs/latest/rules/no-lone-blocks
        "no-lone-blocks": "error",

        // Disallow `if` statements as the only statement in `else` blocks
        // https://eslint.org/docs/latest/rules/no-lonely-if
        "no-lonely-if": "error",

        // Disallow function declarations that contain unsafe references to loop variables
        // https://eslint.org/docs/latest/rules/no-loop-func
        "no-loop-func": "error",

        // Disallow literal numbers that lose precision
        // https://eslint.org/docs/latest/rules/no-loss-of-precision
        "no-loss-of-precision": "error",

        // Disallow characters which are made with multiple code points in character class syntax
        // https://eslint.org/docs/latest/rules/no-misleading-character-class
        "no-misleading-character-class": "error",

        // Disallow use of chained assignment expressions
        // https://eslint.org/docs/latest/rules/no-multi-assign
        "no-multi-assign": "error",

        // Disallow multiline strings
        // https://eslint.org/docs/latest/rules/no-multi-str
        "no-multi-str": "error",

        // Disallow nested ternary expressions
        // https://eslint.org/docs/latest/rules/no-nested-ternary
        "no-nested-ternary": "error",

        // Disallow `new` operators with the `Function` object
        // https://eslint.org/docs/latest/rules/no-new
        "no-new": "error",

        // Disallow `Function` constructors
        // https://eslint.org/docs/latest/rules/no-new-func
        "no-new-func": "error",

        // Disallow `Object` constructors
        // https://eslint.org/docs/latest/rules/no-new-wrappers
        "no-new-wrappers": "error",

        // Disallow octal escape sequences in string literals
        // https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
        "no-nonoctal-decimal-escape": "error",

        // Disallow calling global object properties as functions
        // https://eslint.org/docs/latest/rules/no-obj-calls
        "no-obj-calls": "error",

        // Disallow `Object` constructors
        // https://eslint.org/docs/latest/rules/no-object-constructor
        "no-object-constructor": "error",

        // Disallow octal literals
        // https://eslint.org/docs/latest/rules/no-octal
        "no-octal": "error",

        // Disallow octal escape sequences in string literals
        // https://eslint.org/docs/latest/rules/no-octal-escape
        "no-octal-escape": "error",

        // Disallow reassigning function parameters
        // https://eslint.org/docs/latest/rules/no-param-reassign
        "no-param-reassign": [
          "error",
          {
            props: true,
          },
        ],

        // Disallow the unary operators `++` and `--`
        // https://eslint.org/docs/latest/rules/no-plusplus
        "no-plusplus": [
          "error",
          {
            allowForLoopAfterthoughts: true,
          },
        ],

        // Disallow returning values from Promise executor functions
        // https://eslint.org/docs/latest/rules/no-promise-executor-return
        "no-promise-executor-return": "error",

        // Disallow the use of the `__proto__` property
        // https://eslint.org/docs/latest/rules/no-proto
        "no-proto": "error",

        // Disallow calling some `Object.prototype` methods directly on objects
        // https://eslint.org/docs/latest/rules/no-prototype-builtins
        "no-prototype-builtins": "error",

        // Disallow multiple spaces in regular expressions
        // https://eslint.org/docs/latest/rules/no-regex-spaces
        "no-regex-spaces": "error",

        // Disallow assignment operators in `return` statements
        // https://eslint.org/docs/latest/rules/no-return-assign
        "no-return-assign": [
          "error",
          "always",
        ],

        // Disallow `javascript:` urls
        // https://eslint.org/docs/latest/rules/no-script-url
        "no-script-url": "error",

        // Disallow assignments where both sides are exactly the same
        // https://eslint.org/docs/latest/rules/no-self-assign
        "no-self-assign": "error",

        // Disallow comparisons where both sides are exactly the same
        // https://eslint.org/docs/latest/rules/no-self-compare
        "no-self-compare": "error",

        // Disallow comma operators
        // https://eslint.org/docs/latest/rules/no-sequences
        "no-sequences": "error",

        // Disallow returning values from setters
        // https://eslint.org/docs/latest/rules/no-setter-return
        "no-setter-return": "error",

        // Disabled in favor of @typescript-eslint/no-shadow
        // Disallow variable declarations from shadowing variables declared in the outer scope
        // https://eslint.org/docs/latest/rules/no-shadow
        "no-shadow": "off",

        // Disallow sparse arrays
        // https://eslint.org/docs/latest/rules/no-sparse-arrays
        "no-sparse-arrays": "error",

        // Disallow template literal placeholder syntax in regular strings
        // https://eslint.org/docs/latest/rules/no-template-curly-in-string
        "no-template-curly-in-string": "error",

        // Disallow throwing literals as exceptions
        // https://eslint.org/docs/latest/rules/no-throw-literal
        "no-throw-literal": "error",

        // Disallow dangling underscores in identifiers
        // https://eslint.org/docs/latest/rules/no-underscore-dangle
        "no-underscore-dangle": "error",

        // Disallow ternary operators when simpler alternatives exist
        // https://eslint.org/docs/latest/rules/no-unneeded-ternary
        "no-unneeded-ternary": "error",

        // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
        // https://eslint.org/docs/latest/rules/no-unreachable
        "no-unreachable": "error",

        // Disallow loops with a body that allows only one iteration
        // https://eslint.org/docs/latest/rules/no-unreachable-loop
        "no-unreachable-loop": "error",

        // Disallow control flow statements in `finally` blocks
        // https://eslint.org/docs/latest/rules/no-unsafe-finally
        "no-unsafe-finally": "error",

        // Disallow negating the left operand of relational operators
        // https://eslint.org/docs/latest/rules/no-unsafe-negation
        "no-unsafe-negation": "error",

        // Disabled in favor of @typescript-eslint/no-unused-expressions
        // Disallow unused expressions
        // https://eslint.org/docs/latest/rules/no-unused-expressions
        "no-unused-expressions": "off",

        // Disallow unused labels
        // https://eslint.org/docs/latest/rules/no-unused-labels
        "no-unused-labels": "error",

        // Disabled in favor of @typescript-eslint/no-unused-vars
        // Disallow unused variables
        // https://eslint.org/docs/latest/rules/no-unused-vars
        "no-unused-vars": "off",

        // Disallow useless backreferences in regular expressions
        // https://eslint.org/docs/latest/rules/no-useless-backreference
        "no-useless-backreference": "error",

        // Disallow unnecessary `catch` clauses
        // https://eslint.org/docs/latest/rules/no-useless-catch
        "no-useless-catch": "error",

        // Disallow unnecessary computed property keys in objects and classes
        // https://eslint.org/docs/latest/rules/no-useless-computed-key
        "no-useless-computed-key": "error",

        // Disallow unnecessary concatenation of literals and template literals
        // https://eslint.org/docs/latest/rules/no-useless-concat
        "no-useless-concat": "error",

        // Disallow unnecessary escape characters
        // https://eslint.org/docs/latest/rules/no-useless-escape
        "no-useless-escape": "error",

        // Disallow renaming import, export, and destructured assignments to the same name
        // https://eslint.org/docs/latest/rules/no-useless-rename
        "no-useless-rename": "error",

        // Disallow redundant return statements
        // https://eslint.org/docs/latest/rules/no-useless-return
        "no-useless-return": "error",

        // Disallow `void` operators
        // https://eslint.org/docs/latest/rules/no-void
        "no-void": "error",

        // Disallow `with` statements
        // https://eslint.org/docs/latest/rules/no-with
        "no-with": "error",

        // Require or disallow method and property shorthand syntax for object literals
        // https://eslint.org/docs/latest/rules/object-shorthand
        "object-shorthand": [
          "error",
          "always",
          {
            avoidQuotes: true,
          },
        ],

        // Enforce variables to be declared either together or separately in functions
        // https://eslint.org/docs/latest/rules/one-var
        "one-var": [
          "error",
          "never",
        ],

        // Require or disallow assignment operator shorthand where possible
        // https://eslint.org/docs/latest/rules/operator-assignment
        "operator-assignment": "error",

        // Require using arrow functions for callbacks
        // https://eslint.org/docs/latest/rules/prefer-arrow-callback
        "prefer-arrow-callback": "error",

        // Require destructuring from arrays and/or objects
        // https://eslint.org/docs/latest/rules/prefer-destructuring
        "prefer-destructuring": [
          "error",
          {
            VariableDeclarator: {
              array: false,
              object: true,
            },
            AssignmentExpression: {
              array: true,
              object: false,
            },
          },
          {
            enforceForRenamedProperties: false,
          },
        ],

        // Disallow the use of `Math.pow` in favor of the `**` operator
        // https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
        "prefer-exponentiation-operator": "error",

        // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
        // https://eslint.org/docs/latest/rules/prefer-numeric-literals
        "prefer-numeric-literals": "error",

        // Require `Object.hasOwn()` instead of `Object.prototype.hasOwnProperty.call()`
        // https://eslint.org/docs/latest/rules/prefer-object-has-own
        "prefer-object-has-own": "error",

        // Disallow using `Object.assign` with an object literal as the first argument
        // and prefer the use of object spread instead
        // https://eslint.org/docs/latest/rules/prefer-object-spread
        "prefer-object-spread": "error",

        // Require using Error objects as Promise rejection reasons
        // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
        "prefer-promise-reject-errors": [
          "error",
          {
            allowEmptyReject: true,
          },
        ],

        // Disallow the use of the `RegExp` constructor in favor of regular expression literals
        // https://eslint.org/docs/latest/rules/prefer-regex-literals
        "prefer-regex-literals": [
          "error",
          {
            disallowRedundantWrapping: true,
          },
        ],

        // Require template literals instead of string concatenation
        // https://eslint.org/docs/latest/rules/prefer-template
        "prefer-template": "error",

        // Enforce the consistent use of the radix argument when using `parseInt()`
        // https://eslint.org/docs/latest/rules/radix
        "radix": "error",

        // Require generator functions to contain `yield`
        // https://eslint.org/docs/latest/rules/require-yield
        "require-yield": "error",

        // Require symbol descriptions
        // https://eslint.org/docs/latest/rules/symbol-description
        "symbol-description": "error",

        // Require or disallow the Unicode BOM
        // https://eslint.org/docs/latest/rules/unicode-bom
        "unicode-bom": "error",

        // Require calls to `isNaN()` when checking for `NaN`
        // https://eslint.org/docs/latest/rules/use-isnan
        "use-isnan": "error",

        // Require or disallow "Yoda" conditions
        // https://eslint.org/docs/latest/rules/yoda
        "yoda": "error",
      },
    },
    ...typescriptConfig,
    ...importConfig,
    ...stylisticConfig,
    ...reactConfig,
    ...reactHooksConfig,
    {
      files: [
        "eslint.config.mjs",
      ],
      rules: {
        "no-underscore-dangle": "off",
      },
    },
  ],
)
