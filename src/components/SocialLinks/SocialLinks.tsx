"use client"

import classNames from "classnames"
import Link from "next/link"
import useTranslate from "@/hooks/useTranslate"
import SOCIAL_LINKS from "@/utils/constants/socialLinks"
import Social from "@/utils/types/Social"

import InstagramIcon from "./icons/instagram.svg"
import TikTokIcon from "./icons/tiktok.svg"
import TelegramIcon from "@/icons/telegram.svg"

import styles from "./SocialLinks.module.scss"

const SOCIAL_LINKS_ORDER = [
  {
    id: Social.INSTAGRAM,
    icon: <InstagramIcon />,
    url: SOCIAL_LINKS[Social.INSTAGRAM],
  },
  {
    id: Social.TELEGRAM,
    icon: <TelegramIcon />,
    url: SOCIAL_LINKS[Social.TELEGRAM],
  },
  {
    id: Social.TIKTOK,
    icon: <TikTokIcon />,
    url: SOCIAL_LINKS[Social.TIKTOK],
  },
]

interface SocialLinksProps {
  className?: string
  isTextVisible?: boolean
  linkClassName?: string
}

const SocialLinks = ({
  className,
  isTextVisible,
  linkClassName,
}: SocialLinksProps) => {
  const translate = useTranslate()

  return (
    <div className={classNames(styles["social-links"], className)}>
      {SOCIAL_LINKS_ORDER.map(({
        id,
        icon,
        url,
      }) => (
        <Link
          className={classNames(styles["social-links__link"], linkClassName)}
          aria-label={translate(`common.${id}.aria-label`)}
          key={id}
          href={url}
          prefetch={false}
        >
          {icon}
          {isTextVisible && translate(`common.${id}`)}
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
