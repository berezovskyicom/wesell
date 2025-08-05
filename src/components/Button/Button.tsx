import classNames from "classnames"
import Link from "next/link"
import { ReactNode } from "react"

import styles from "./Button.module.scss"

interface IButtonProps {
  children: ReactNode
  className?: string
  disabled?: boolean
  href?: string
  type?: "submit"
}

const Button = ({
  children,
  className,
  disabled,
  href,
  type,
}: IButtonProps) => {
  const Element = href ? Link : "button"

  return (
    <Element
      className={classNames(styles["button"], className)}
      disabled={href ? undefined : disabled}
      type={type}
      href={(href || undefined) as string}
      prefetch={href ? false : undefined}
    >
      {children}
    </Element>
  )
}

export default Button
