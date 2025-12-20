import classNames from "classnames"
import { ReactNode, HTMLAttributes } from "react"

import styles from "./Heading.module.scss"

const TAGS = {
  1: "h1",
  2: "h2",
  3: "h3",
} as const

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
  className?: string
  type?: 1 | 2 | 3
}

// TODO: Rename to Title
const Heading = ({
  children,
  className,
  type = 2,
  ...props
}: HeadingProps) => {
  const Element = TAGS[type]

  return (
    <Element
      className={classNames(
        styles["heading"],
        styles[`heading--${type}`],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  )
}

export default Heading
