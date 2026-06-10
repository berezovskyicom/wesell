import Image from "next/image"
import Link from "next/link"
import Container from "@/components/Container"
import Title from "@/components/Title"
import useTranslate from "@/hooks/useTranslate"
import SOCIAL_LINKS from "@/utils/constants/socialLinks"
import Social from "@/utils/types/Social"

import styles from "./Instagram.module.scss"

const Instagram = () => {
  const translate = useTranslate()

  return (
    <section id="gallery" className={styles["home__instagram"]}>
      <Container>
        <Title className={styles["home__instagram-title"]}>
          {translate("home.instagram.title")}
        </Title>
        <div className={styles["home__instagram-gallery"]}>
          <div className={styles["home__instagram-gallery-item"]}>
            <Image
              className={styles["instagram__gallery-item-image"]}
              src="/assets/home/instagram/instagram-1.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["home__instagram-gallery-item-image"]}
              src="/assets/home/instagram/instagram-2.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["home__instagram-gallery-item-image"]}
              src="/assets/home/instagram/instagram-3.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["home__instagram-gallery-item-image"]}
              src="/assets/home/instagram/instagram-4.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
          </div>
          <div className={styles["home__instagram-gallery-profile"]}>
            <Link
              aria-label={translate("common.instagram.aria-label")}
              href={SOCIAL_LINKS[Social.INSTAGRAM]}
            >
              <Image
                src="/assets/home/instagram/instagram-phone.png"
                alt={translate("home.instagram.img-iphone.alt")}
                width={294}
                height={600}
              />
            </Link>
          </div>
          <div className={styles["home__instagram-gallery-item"]}>
            <Image
              className={styles["home__instagram-gallery-item-image"]}
              src="/assets/home/instagram/instagram-5.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["home__instagram-gallery-item-image"]}
              src="/assets/home/instagram/instagram-6.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["home__instagram-gallery-item-image"]}
              src="/assets/home/instagram/instagram-7.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["home__instagram-gallery-item-image"]}
              src="/assets/home/instagram/instagram-8.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Instagram
