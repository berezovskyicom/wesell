import i18n from "@/utils/constants/i18n"
import Language from "@/utils/types/Language"

const translate = (
  key: string,
  language: Language = Language.UA,
) => (
  (i18n[language][key]) || key
)

export default translate
