"use client"

import classNames from "classnames"
import noop from "lodash-es/noop"
import Link from "next/link"
import { ReactNode, MouseEvent } from "react"

import styles from "./Button.module.scss"

interface IButtonProps {
  children: ReactNode
  className?: string
  disabled?: boolean
  href?: string
  type?: "submit"
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

const Button = ({
  children,
  className,
  disabled,
  href,
  type,
  onClick = noop,
}: IButtonProps) => {
  const Element = href ? Link : "button"

  return (
    <Element
      className={classNames(styles["button"], className)}
      disabled={href ? undefined : disabled}
      type={type}
      href={(href || undefined) as string}
      prefetch={href ? false : undefined}
      onClick={onClick}
    >
      {children}
    </Element>
  )
}

export default Button
