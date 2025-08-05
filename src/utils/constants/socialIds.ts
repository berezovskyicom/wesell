const SOCIAL_IDS = {
  INSTAGRAM: "instagram",
  TELEGRAM: "telegram",
  TIKTOK: "tiktok",
}

export type SocialId = typeof SOCIAL_IDS[keyof typeof SOCIAL_IDS];

export default SOCIAL_IDS
