import Container from "@/components/Container"
import translate from "@/utils/translate"

import BrainIcon from "./icons/brain.svg"
import CameraIcon from "./icons/camera.svg"
import RocketIcon from "./icons/rocket.svg"
import RotorIcon from "./icons/rotor.svg"

import styles from "./Home-Features.module.scss"

const Features = () => (
  <Container className={styles["home__features"]}>
    <div className={styles["home__feature"]}>
      <BrainIcon />
      <div className={styles["home__feature-title"]}>
        {translate("home.features.experience.title")}
      </div>
      <span className={styles["home__feature-description"]}>
        {translate("home.features.experience.description")}
      </span>
    </div>
    <div className={styles["home__feature"]}>
      <CameraIcon />
      <div className={styles["home__feature-title"]}>
        {translate("home.features.solution.title")}
      </div>
      <span className={styles["home__feature-description"]}>
        {translate("home.features.solution.description")}
      </span>
    </div>
    <div className={styles["home__feature"]}>
      <RotorIcon />
      <div className={styles["home__feature-title"]}>
        {translate("home.features.parts.title")}
      </div>
      <span className={styles["home__feature-description"]}>
        {translate("home.features.parts.description")}
      </span>
    </div>
    <div className={styles["home__feature"]}>
      <RocketIcon />
      <div className={styles["home__feature-title"]}>
        {translate("home.features.speed.title")}
      </div>
      <span className={styles["home__feature-description"]}>
        {translate("home.features.speed.description")}
      </span>
    </div>
  </Container>
)

export default Features
