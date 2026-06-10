const reactHooksConfig = [
  {
    rules: {
      // Validates that dependency arrays for React hooks contain all necessary dependencies.
      // https://react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-deps
      "react-hooks/exhaustive-deps": "error",

      // TODO: Enable rules below if valid & useful

      // Validates that components/hooks are pure by checking that they do not call known-impure functions.
      // https://react.dev/reference/eslint-plugin-react-hooks/lints/purity
      "react-hooks/purity": "off",

      // Validates correct usage of refs, not reading/writing during render.
      // https://react.dev/reference/eslint-plugin-react-hooks/lints/refs
      "react-hooks/refs": "off",

      // Validates against calling setState synchronously in an effect,
      // which can lead to re-renders that degrade performance.
      // https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
      "react-hooks/set-state-in-effect": "off",

      // Validates against syntax that React Compiler does not support.
      // If you need to, you can still use this syntax outside of React,
      // such as in a standalone utility function.
      // https://react.dev/reference/eslint-plugin-react-hooks/lints/unsupported-syntax
      "react-hooks/unsupported-syntax": "off",
    },
  },
]

export default reactHooksConfig
