import classNames from "classnames"

import { ReactNode } from "react"
import styles from "./Heading.module.scss"

const TAGS = {
  1: "h1",
  2: "h2",
  3: "h3",
} as const

interface IHeadingProps {
  children: ReactNode
  className?: string
  type?: 1 | 2 | 3
}

// TODO: Rename to Title
const Heading = ({
  children,
  className,
  type = 2,
}: IHeadingProps) => {
  const Element = TAGS[type as keyof typeof TAGS]

  return (
    <Element
      className={classNames(
        styles["heading"],
        styles[`heading--${type}`],
        className,
      )}
    >
      {children}
    </Element>
  )
}

export default Heading
