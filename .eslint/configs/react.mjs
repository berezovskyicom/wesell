const reactConfig = [
  {
    rules: {
      // Disallow usage of `button` elements without an explicit `type` attribute
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
      "react/button-has-type": "error",

      // Enforce boolean attributes notation in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
      "react/jsx-boolean-value": "error",

      // Enforce closing bracket location in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
      "react/jsx-closing-bracket-location": [
        "error",
        "line-aligned",
      ],

      // Enforce closing tag location for multiline JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
      "react/jsx-closing-tag-location": "error",

      // Disallow unnecessary JSX expressions when literals alone are sufficient
      // or enforce JSX expressions on literals in JSX children or attributes
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],

      // Enforce consistent linebreaks in curly braces in JSX attributes and expressions
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
      "react/jsx-curly-newline": "error",

      // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
      "react/jsx-curly-spacing": [
        "error",
        "never",
        {
          allowMultiline: true,
        },
      ],

      // Enforce or disallow spaces around equal signs in JSX attributes
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
      "react/jsx-equals-spacing": "error",

      // Enforce proper position of the first property in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
      "react/jsx-first-prop-new-line": "error",

      // Enforce shorthand or standard form for React fragments
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
      "react/jsx-fragments": "error",

      // Enforce JSX indentation
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
      "react/jsx-indent": [
        "error",
        2,
      ],

      // Enforce props indentation in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
      "react/jsx-indent-props": [
        "error",
        2,
      ],

      // Enforce maximum of props on a single line in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
      "react/jsx-max-props-per-line": [
        "error",
        {
          when: "multiline",
        },
      ],

      // Disallows JSX context provider values from taking values that will cause needless rerenders
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
      "react/jsx-no-constructed-context-values": "error",

      // Require one JSX element per line
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
      "react/jsx-one-expression-per-line": "error",

      // Enforce PascalCase for user-defined JSX components
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
      "react/jsx-pascal-case": "error",

      // Disallow multiple spaces between inline JSX props
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
      "react/jsx-props-no-multi-spaces": "error",

      // Enforce whitespace in and around the JSX opening and closing brackets
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
      "react/jsx-tag-spacing": [
        "error",
        {
          beforeClosing: "never",
        },
      ],

      // Disallow missing parentheses around multiline JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
      "react/jsx-wrap-multilines": [
        "error",
        {
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
        },
      ],

      // Disallow usage of Array index in keys
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
      "react/no-array-index-key": "error",

      // Disallow passing of children as props
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
      "react/no-children-prop": "error",

      // Disallow usage of invalid attributes
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
      "react/no-invalid-html-attribute": "error",

      // Disallow unescaped HTML entities from appearing in markup
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
      "react/no-unescaped-entities": "error",

      // Disallow extra closing tags for components without children
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
      "react/self-closing-comp": "error",

      // Enforce style prop value is an object
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
      "react/style-prop-object": "error",
    },
  },
]

export default reactConfig
