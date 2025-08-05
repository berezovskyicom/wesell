const LANGUAGES = {
  UA: "ua",
}

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES]

export default LANGUAGES
