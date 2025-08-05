import Link from "next/link"
import Container from "@/components/Container"
import Nav from "@/components/Nav"
import Social from "@/components/Social/Social"

import LogoIcon from "@/icons/logo.svg"

import styles from "./Home-Footer.module.scss"

const HomeFooter = () => (
  <footer className={styles["home__footer"]}>
    <Container className={styles["home__footer-container"]}>
      <Link href="/" prefetch={false}>
        <LogoIcon className={styles["home__footer-logo"]} />
      </Link>
      <Nav className={styles["home__footer-nav"]} />
      <Social className={styles["home__footer-social"]} />
    </Container>
  </footer>
)

export default HomeFooter
