module.exports = {
  plugins: [
    "prefixIds",
    {
      name: "preset-default",
      params: {
        overrides: {
          cleanupIds: false,
          removeViewBox: false,
        },
      },
    },
  ],
}
