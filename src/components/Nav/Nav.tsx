import classNames from "classnames"
import Link from "next/link"
import translate from "@/utils/translate"

import styles from "./Nav.module.scss"

interface INavProps {
  className?: string
}

// TODO: Fix i18n keys
const Nav = ({
  className,
}: INavProps) => (
  <nav className={classNames(styles["nav"], className)}>
    <Link
      className={styles["nav__link"]}
      href="/#services"
      prefetch={false}
    >
      {translate("header.links.services")}
    </Link>
    <Link
      className={styles["nav__link"]}
      href="/#steps"
      prefetch={false}
    >
      {translate("header.links.steps")}
    </Link>
    <Link
      className={styles["nav__link"]}
      href="/#reviews"
      prefetch={false}
    >
      {translate("header.links.reviews")}
    </Link>
    <Link
      className={styles["nav__link"]}
      href="/#gallery"
      prefetch={false}
    >
      {translate("header.links.gallery")}
    </Link>
  </nav>
)

export default Nav
