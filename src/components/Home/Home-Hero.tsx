import find from "lodash-es/find"
import values from "lodash-es/values"
import Image from "next/image"
import Link from "next/link"
import Container from "@/components/Container"
import Heading from "@/components/Heading"
import ADDRESS, { Address } from "@/utils/constants/address"
import PHONE_NUMBER from "@/utils/constants/phoneNumber"
import SOCIAL from "@/utils/constants/social"
import SOCIAL_IDS from "@/utils/constants/socialIds"
import TELEGRAM from "@/utils/constants/telegram"
import formatPhoneNumber from "@/utils/formatPhoneNumber"
import translate from "@/utils/translate"

import PhoneIcon from "@/icons/phone.svg"
import TelegramIcon from "@/icons/telegram.svg"

import styles from "./Home-Hero.module.scss"

const Hero = () => {
  const { name: telegramText } = find(SOCIAL, ["id", SOCIAL_IDS.TELEGRAM]) || {}

  return (
    <section className={styles["home__hero"]}>
      <Container>
        <Heading type={1} className={styles["home__hero-title"]}>
          {translate("home.hero.title")}
        </Heading>
        <div className={styles["home__hero-address-container"]}>
          {values(ADDRESS).map((address: Address) => (
            <div
              className={styles["home__hero-address"]}
              key={address}
            >
              <p className={styles["home__hero-address-title"]}>
                {translate(`home.hero.location-${address}.title`)}
              </p>
              <div className={styles["home__hero-address-street"]}>
                {translate(`home.hero.location-${address}.street`)}
              </div>
              <Link
                className={styles["home__hero-address-phone"]}
                href={`tel:${formatPhoneNumber(PHONE_NUMBER[address])}`}
              >
                <PhoneIcon />
                {formatPhoneNumber(PHONE_NUMBER[address])}
              </Link>
              <Link
                className={styles["home__hero-telegram"]}
                href={TELEGRAM[address]}
                prefetch={false}
              >
                <TelegramIcon />
                {telegramText}
              </Link>
            </div>
          ))}
        </div>
      </Container>
      <div className={styles["home__hero-image-wrapper"]}>
        <Image
          src="/assets/home/hero/service.png"
          alt="WeSell Service"
          fill
          priority
        />
      </div>
    </section>
  )
}

export default Hero
