"use client"

import classNames from "classnames"
import Link from "next/link"
import { useState } from "react"
import Button from "@/components/Button/Button"
import Container from "@/components/Container"
import Nav from "@/components/Nav/Nav"
import useTranslate from "@/hooks/useTranslate"

import MenuIcon from "./icons/menu.svg"
import LocationIcon from "@/icons/location.svg"
import LogoIcon from "@/icons/logo.svg"

import styles from "./Header.module.scss"

const Header = () => {
  const translate = useTranslate()
  const [isMenuActive, setIsMenuActive] = useState(false)

  const renderMenu = () => (
    <>
      <Nav className={styles["header__nav"]} />
      <div className={styles["header__contact"]}>
        <span className={styles["header__location"]}>
          <LocationIcon />
          {translate("common.location")}
        </span>
        <Button href="/#contact-us">
          {translate("header.cta")}
        </Button>
      </div>
    </>
  )

  return (
    <header
      className={classNames(styles["header"], {
        [styles["header--menu-active"]]: isMenuActive,
      })}
    >
      <Container className={styles["header__inner"]}>
        <Link
          className={styles["header__logo"]}
          href="/"
          prefetch={false}
        >
          <LogoIcon />
        </Link>
        <button
          className={styles["header__menu-button"]}
          type="button"
          onClick={() => {
            setIsMenuActive(!isMenuActive)
          }}
        >
          <MenuIcon />
        </button>
        <div
          className={classNames(styles["header__menu"], {
            [styles["header__menu--active"]]: isMenuActive,
          })}
        >
          {renderMenu()}
        </div>
      </Container>
    </header>
  )
}

export default Header
