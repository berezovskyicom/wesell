import LANGUAGES from "@/utils/constants/i18n"
import translate from "@/utils/translate"

// TODO: add proper i18n logic
const useTranslate = () => {
  const language = LANGUAGES.UA

  return (key: string) => translate(key, language)
}

export default useTranslate
