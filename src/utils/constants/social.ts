import ADDRESS from "@/utils/constants/address"
import SOCIAL_IDS from "@/utils/constants/socialIds"
import TELEGRAM from "@/utils/constants/telegram"

const SOCIAL = [
  {
    id: SOCIAL_IDS.INSTAGRAM,
    name: "Instagram",
    url: "https://www.instagram.com/wesell_service_kyiv",
  },
  {
    id: SOCIAL_IDS.TELEGRAM,
    name: "Telegram",
    url: TELEGRAM[ADDRESS.BEREZNIAKY],
  },
  {
    id: SOCIAL_IDS.TIKTOK,
    name: "Tiktok",
    url: "https://www.tiktok.com/@wesell_service",
  },
]

export default SOCIAL
