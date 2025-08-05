import Link from "next/link"
import Container from "@/components/Container"
import useTranslate from "@/hooks/useTranslate"
import SOCIAL from "@/utils/constants/social"
import SOCIAL_IDS, { SocialId } from "@/utils/constants/socialIds"

import InstagramIcon from "@/icons/instagram.svg"
import TelegramIcon from "@/icons/telegram.svg"
import TikTokIcon from "@/icons/tiktok.svg"

import styles from "./SocialCta.module.scss"

const SocialCta = () => {
  const translate = useTranslate()

  const renderIcon = (id: SocialId) => {
    switch (id) {
      case SOCIAL_IDS.INSTAGRAM:
        return <InstagramIcon />
      case SOCIAL_IDS.TELEGRAM:
        return <TelegramIcon />
      case SOCIAL_IDS.TIKTOK:
        return <TikTokIcon />
      default:
        return null
    }
  }

  return (
    <section className={styles["social-cta"]}>
      <Container className={styles["social-cta__container"]}>
        <p className={styles["social-cta__title"]}>
          {translate("social-cta.title")}
        </p>
        <div className={styles["social-cta__links"]}>
          {SOCIAL.map(({
            id,
            name,
            url,
          }) => (
            <Link
              className={styles["social-cta__link"]}
              key={id}
              href={url}
              prefetch={false}
            >
              {renderIcon(id)}
              {name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SocialCta
