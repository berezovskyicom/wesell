import classNames from "classnames"
import { ReactNode } from "react"

import styles from "./Container.module.scss"

interface IContainerProps {
  children: ReactNode
  className?: string
}

const Container = ({
  children,
  className,
}: IContainerProps) => (
  <div className={classNames(styles["container"], className)}>
    {children}
  </div>
)

export default Container
