const svgr = config => {
  let oneOfRule = {}

  return {
    ...config,
    module: {
      ...config?.module,
      rules: [
        ...config?.module?.rules?.map(rule => {
          if (rule?.test?.source?.includes("svg") && rule?.issuer?.not?.source?.includes("scss")) {
            const { test, ...imageRule } = rule

            oneOfRule = { ...imageRule }

            return {
              test: new RegExp(test?.source?.replace("|svg", "")),
              ...imageRule,
            }
          }

          return rule
        }) || [],
        {
          test: /\.svg$/i,
          oneOf: [
            {
              issuer: oneOfRule?.issuer,
              resourceQuery: {
                not: [
                  ...oneOfRule?.resourceQuery?.not || [],
                  /url/,
                ],
              },
              use: [
                "@svgr/webpack",
              ],
            },
            {
              ...oneOfRule,
              resourceQuery: /url/,
            },
          ],
        },
      ],
    },
  }
}

module.exports = svgr
