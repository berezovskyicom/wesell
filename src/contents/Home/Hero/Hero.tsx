import Image from "next/image"
import Link from "next/link"
import Container from "@/components/Container"
import Title, { TitleSize } from "@/components/Title"
import META from "@/utils/constants/meta"
import translate from "@/utils/translate"

import PhoneIcon from "@/icons/phone.svg"
import TelegramIcon from "@/icons/telegram.svg"

import styles from "./Hero.module.scss"

const Hero = () => (
  <section className={styles["home__hero"]}>
    <Container>
      <Title className={styles["home__hero-title"]} size={TitleSize.MD}>
        {translate("home.hero.title")}
      </Title>
      <div className={styles["home__hero-address-container"]}>
        {Object.entries(META).map(([address, { phone, telegram }]) => (
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
              href={`tel:${phone}`}
            >
              <PhoneIcon />
              {phone}
            </Link>
            <Link
              className={styles["home__hero-telegram"]}
              href={telegram}
              prefetch={false}
            >
              <TelegramIcon />
              Telegram
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

export default Hero
