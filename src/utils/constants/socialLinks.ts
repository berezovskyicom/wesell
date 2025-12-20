import META from "@/utils/constants/meta"
import Branch from "@/utils/types/Branch"
import Social from "@/utils/types/Social"

const SOCIAL_LINKS = {
  [Social.INSTAGRAM]: "https://www.instagram.com/wesell_service_kyiv",
  [Social.TELEGRAM]: META[Branch.BEREZNIAKY].telegram,
  [Social.TIKTOK]: "https://www.tiktok.com/@wesell_service",
}

export default SOCIAL_LINKS
