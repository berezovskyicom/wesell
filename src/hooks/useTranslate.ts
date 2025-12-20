import translate from "@/utils/translate"
import Language from "@/utils/types/Language"

// TODO: add proper i18n logic
const useTranslate = () => {
  const language = Language.UA

  return (key: string) => translate(key, language)
}

export default useTranslate
