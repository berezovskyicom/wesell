import Container from "@/components/Container"
import Heading from "@/components/Heading"
import useTranslate from "@/hooks/useTranslate"

import GoalIcon from "./icons/goal.svg"
import MissionIcon from "./icons/mission.svg"

import styles from "./Home-Mission.module.scss"

const HomeMission = () => {
  const translate = useTranslate()

  return (
    <section className={styles["home__mission"]}>
      <Container className={styles["home__mission-container"]}>
        <Heading
          className={styles["home__mission-heading"]}
          dangerouslySetInnerHTML={{ __html: translate("home.mission.title") }}
          type={2}
        />
        <div className={styles["home__mission-info"]}>
          <div className={styles["home__mission-info-icon"]}>
            <MissionIcon />
          </div>
          <div className={styles["home__mission-info-title"]}>
            {translate("home.mission.info-mission.title")}
          </div>
          <p className={styles["home__mission-info-description"]}>
            {translate("home.mission.info-mission.description")}
          </p>
        </div>
        <div className={styles["home__mission-info"]}>
          <div className={styles["home__mission-info-icon"]}>
            <GoalIcon />
          </div>
          <div className={styles["home__mission-info-title"]}>
            {translate("home.mission.info-goal.title")}
          </div>
          <p className={styles["home__mission-info-description"]}>
            {translate("home.mission.info-goal.description")}
          </p>
        </div>
      </Container>
    </section>
  )
}

export default HomeMission
