// TODO: add proper i18n logic
import UA from "@/i18n/ua.json"
import Language from "@/utils/types/Language"

const i18n: {
  [key in Language]: Record<string, string>
} = {
  [Language.UA]: UA,
}

export default i18n
