import Image from "next/image"
import Container from "@/components/Container"
import Title from "@/components/Title"
import translate from "@/utils/translate"

import styles from "./Services.module.scss"

enum ServiceId {
  CAR_ACCIDENT_REPAIR = "car-accident-repair",
  CAR_AUCTION_REPAIR = "car-auction-repair",
  COMPUTER_DIAGNOSTICS = "computer-diagnostics",
  ELECTRONICS = "electronics",
  ENDOSCOPE = "endoscope",
  SUSPENSION_DIAGNOSTICS = "suspension-diagnostics",
  SUSPENSION_REPAIR = "suspension-repair",
  TUNING = "tuning",
}

const Services = () => (
  <section id="services">
    <Container className={styles["home__services"]}>
      <Title>
        {translate("home.services.title")}
      </Title>
      <p
        className={styles["home__services-description"]}
        dangerouslySetInnerHTML={{ __html: translate("home.services.description") }}
      />
      <div className={styles["home__services-list"]}>
        {[
          ServiceId.COMPUTER_DIAGNOSTICS,
          ServiceId.SUSPENSION_DIAGNOSTICS,
          ServiceId.ENDOSCOPE,
          ServiceId.SUSPENSION_REPAIR,
          ServiceId.CAR_ACCIDENT_REPAIR,
          ServiceId.CAR_AUCTION_REPAIR,
          ServiceId.ELECTRONICS,
          ServiceId.TUNING,
        ].map(id => (
          <div
            className={styles["home__services-list-item"]}
            key={id}
          >
            <div className={styles["home__services-list-item-image-wrapper"]}>
              <Image
                className={styles["home__services-list-item-image"]}
                src={`/assets/home/services/${id}.png`}
                alt={translate(`home.services.${id}.title`)}
                sizes="(min-width: 1200px) 260px, 100vw"
                fill
              />
            </div>
            <div className={styles["home__services-list-item-inner"]}>
              <div className={styles["home__services-list-item-title"]}>
                {translate(`home.services.${id}.title`)}
              </div>
              <p className={styles["home__services-list-item-description"]}>
                {translate(`home.services.${id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
)

export default Services
