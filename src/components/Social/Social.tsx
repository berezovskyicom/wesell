import classNames from "classnames"
import Link from "next/link"
import SOCIAL from "@/utils/constants/social"
import SOCIAL_IDS, { SocialId } from "@/utils/constants/socialIds"

import InstagramIcon from "@/icons/instagram.svg"
import TelegramIcon from "@/icons/telegram.svg"
import TikTokIcon from "@/icons/tiktok.svg"

import styles from "./Social.module.scss"

interface ISocialProps {
  className?: string
}

const Social = ({
  className,
}: ISocialProps) => {
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
    <div className={classNames(styles["social"], className)}>
      {SOCIAL.map(({ id, url }) => (
        <Link
          className={styles["social__link"]}
          key={id}
          href={url}
          prefetch={false}
        >
          {renderIcon(id)}
        </Link>
      ))}
    </div>
  )
}

export default Social
