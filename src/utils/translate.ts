import i18n, { TranslationKeys } from "@/i18n"
import LANGUAGES, { Language } from "@/utils/constants/i18n"

const translate = (
  key: string,
  language: Language = LANGUAGES.UA,
) => (
  (i18n[language][key as TranslationKeys]) || key
)

export default translate
