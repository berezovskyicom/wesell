import classNames from "classnames"
import { ReactNode, HTMLAttributes, ElementType } from "react"

import styles from "./Title.module.scss"

export enum TitleSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
}

const TAG_MAP: Record<TitleSize, "h1" | "h2" | "h3"> = {
  [TitleSize.XS]: "h3",
  [TitleSize.SM]: "h2",
  [TitleSize.MD]: "h1",
}

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
  className?: string
  size?: TitleSize
}

const Title = ({
  children,
  className,
  size = TitleSize.SM,
  ...props
}: TitleProps) => {
  const Tag = TAG_MAP[size] as ElementType

  return (
    <Tag
      className={classNames(
        styles["title"],
        styles[`title--${size}`],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Title
