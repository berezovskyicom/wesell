import find from "lodash-es/find"
import Image from "next/image"
import Link from "next/link"
import Container from "@/components/Container"
import Heading from "@/components/Heading"
import useTranslate from "@/hooks/useTranslate"
import SOCIAL from "@/utils/constants/social"
import SOCIAL_IDS from "@/utils/constants/socialIds"

import styles from "./Instagram.module.scss"

const Instagram = () => {
  const translate = useTranslate()

  return (
    <section id="gallery" className={styles["home__instagram"]}>
      <Container>
        <Heading className={styles["home__instagram-title"]}>
          {translate("home.instagram.title")}
        </Heading>
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
              href={find(SOCIAL, ["id", SOCIAL_IDS.INSTAGRAM])?.url || ""}
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
