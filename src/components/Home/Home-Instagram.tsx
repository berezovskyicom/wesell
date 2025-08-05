import Image from "next/image"
import Container from "@/components/Container"
import Heading from "@/components/Heading/Heading"
import useTranslate from "@/hooks/useTranslate"

import styles from "./Home-Instagram.module.scss"

const HomeInstagram = () => {
  const translate = useTranslate()

  return (
    <section id="gallery" className={styles["instagram"]}>
      <Container>
        <Heading className={styles["instagram__title"]}>
          {translate("home.instagram.title")}
        </Heading>
        <div className={styles["instagram__gallery"]}>
          <div className={styles["instagram__gallery-tile"]}>
            <Image
              className={styles["instagram__gallery-tile-image"]}
              src="/assets/home/instagram/instagram-1.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["instagram__gallery-tile-image"]}
              src="/assets/home/instagram/instagram-2.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["instagram__gallery-tile-image"]}
              src="/assets/home/instagram/instagram-3.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["instagram__gallery-tile-image"]}
              src="/assets/home/instagram/instagram-4.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
          </div>
          <div className={styles["instagram__gallery-profile"]}>
            <Image
              src="/assets/home/instagram/instagram-phone.png"
              alt={translate("home.instagram.img-iphone.alt")}
              width={294}
              height={600}
            />
          </div>
          <div className={styles["instagram__gallery-tile"]}>
            <Image
              className={styles["instagram__gallery-tile-image"]}
              src="/assets/home/instagram/instagram-5.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["instagram__gallery-tile-image"]}
              src="/assets/home/instagram/instagram-6.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["instagram__gallery-tile-image"]}
              src="/assets/home/instagram/instagram-7.png"
              alt={translate("home.instagram.img.alt")}
              width={180}
              height={280}
            />
            <Image
              className={styles["instagram__gallery-tile-image"]}
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

export default HomeInstagram
