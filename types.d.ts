declare module "*.svg?url" {
  // To avoid conflicts with @svgr/webpack plugin
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any

  export default content
}
