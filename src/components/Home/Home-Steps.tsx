import Button from "@/components/Button/Button"
import Container from "@/components/Container"

import Heading from "@/components/Heading/Heading"
import translate from "@/utils/translate"

import ConsultancyIcon from "./icons/consultancy.svg"
import DiagnosticsIcon from "./icons/diagnostics.svg"
import EndIcon from "./icons/end.svg"
import ExecutionIcon from "./icons/execution.svg"
import PricingIcon from "./icons/pricing.svg"
import PhoneIcon from "@/icons/phone.svg"

import styles from "./Home-Steps.module.scss"

const Steps = () => (
  <section id="steps">
    <Container className={styles["home__steps"]}>
      <Heading>
        {translate("home.steps.title")}
      </Heading>
      <div className={styles["home__steps-container"]}>
        <div className={styles["home__step"]}>
          <div className={styles["home__step-icon"]}>
            <PhoneIcon />
          </div>
          <p className={styles["home__step-title"]}>
            {translate("home.steps.call")}
          </p>
        </div>
        <div className={styles["home__step"]}>
          <div className={styles["home__step-icon"]}>
            <ConsultancyIcon />
          </div>
          <p className={styles["home__step-title"]}>
            {translate("home.steps.consultancy")}
          </p>
        </div>
        <div className={styles["home__step"]}>
          <div className={styles["home__step-icon"]}>
            <DiagnosticsIcon />
          </div>
          <p className={styles["home__step-title"]}>
            {translate("home.steps.diagnostics")}
          </p>
        </div>
        <div className={styles["home__step"]}>
          <div className={styles["home__step-icon"]}>
            <PricingIcon />
          </div>
          <p className={styles["home__step-title"]}>
            {translate("home.steps.pricing")}
          </p>
        </div>
        <div className={styles["home__step"]}>
          <div className={styles["home__step-icon"]}>
            <ExecutionIcon />
          </div>
          <p className={styles["home__step-title"]}>
            {translate("home.steps.execution")}
          </p>
        </div>
        <div className={styles["home__step"]}>
          <div className={styles["home__step-icon"]}>
            <EndIcon />
          </div>
          <p className={styles["home__step-title"]}>
            {translate("home.steps.end")}
          </p>
        </div>
      </div>
      <Button className={styles["home__steps-cta"]} href="#contact-us">
        {translate("common.cta")}
      </Button>
    </Container>
  </section>
)

export default Steps
