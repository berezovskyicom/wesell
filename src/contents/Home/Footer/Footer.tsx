import Link from "next/link"
import Container from "@/components/Container"
import Nav from "@/components/Nav"
import Social from "@/components/Social"
import useTranslate from "@/hooks/useTranslate"

import LogoIcon from "@/icons/logo.svg"

import styles from "./Footer.module.scss"

const Footer = () => {
  const translate = useTranslate()

  return (
    <footer className={styles["home__footer"]}>
      <Container className={styles["home__footer-container"]}>
        <Link
          aria-label={translate("common.homepage.aria-label")}
          href="/public"
        >
          <LogoIcon className={styles["home__footer-logo"]} />
        </Link>
        <Nav className={styles["home__footer-nav"]} />
        <Social className={styles["home__footer-social"]} />
      </Container>
    </footer>
  )
}

export default Footer
