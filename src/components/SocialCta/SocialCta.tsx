"use client"

import Container from "@/components/Container"
import SocialLinks from "@/components/SocialLinks"
import useTranslate from "@/hooks/useTranslate"

import styles from "./SocialCta.module.scss"

const SocialCta = () => {
  const translate = useTranslate()

  return (
    <section className={styles["social-cta"]}>
      <Container className={styles["social-cta__container"]}>
        <p className={styles["social-cta__title"]}>
          {translate("social-cta.title")}
        </p>
        <SocialLinks
          className={styles["social-cta__links"]}
          linkClassName={styles["social-cta__link"]}
          isTextVisible
        />
      </Container>
    </section>
  )
}

export default SocialCta
