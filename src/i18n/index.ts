// TODO: add proper i18n logic
import LANGUAGES from "@/utils/constants/i18n"
import UA from "./ua.json"

const i18n = {
  [LANGUAGES.UA]: UA,
}

export type TranslationKeys = keyof typeof UA

export default i18n
