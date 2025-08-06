"use client"

import classNames from "classnames"
import noop from "lodash-es/noop"
import Link from "next/link"
import { MouseEvent } from "react"
import translate from "@/utils/translate"

import styles from "./Nav.module.scss"

interface INavProps {
  className?: string
  onLinkClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

const Nav = ({
  className,
  onLinkClick = noop,
}: INavProps) => (
  <nav className={classNames(styles["nav"], className)}>
    <Link
      className={styles["nav__link"]}
      href="/#services"
      onClick={onLinkClick}
    >
      {translate("nav.links.services")}
    </Link>
    <Link
      className={styles["nav__link"]}
      href="/#steps"
      onClick={onLinkClick}
    >
      {translate("nav.links.steps")}
    </Link>
    <Link
      className={styles["nav__link"]}
      href="/#reviews"
      onClick={onLinkClick}
    >
      {translate("nav.links.reviews")}
    </Link>
    <Link
      className={styles["nav__link"]}
      href="/#gallery"
      onClick={onLinkClick}
    >
      {translate("nav.links.gallery")}
    </Link>
  </nav>
)

export default Nav
