import Image from "next/image"
import Container from "@/components/Container"
import Heading from "@/components/Heading/Heading"
import { SERVICE_IDS_ORDER } from "@/utils/constants/serviceIds"
import translate from "@/utils/translate"

import styles from "./Home-Services.module.scss"

const Services = () => (
  <section id="services">
    <Container className={styles["home__services"]}>
      <Heading>
        {translate("home.services.title")}
      </Heading>
      <p
        className={styles["home__services-description"]}
        dangerouslySetInnerHTML={{ __html: translate("home.services.description") }}
      />
      <div className={styles["home__services-list"]}>
        {SERVICE_IDS_ORDER.map(id => (
          <div
            className={styles["home__services-list-item"]}
            key={id}
          >
            <Image
              className={styles["home__services-list-item-image"]}
              src={`/assets/home/services/${id}.png`}
              alt={translate(`home.services.${id}.title`)}
              width={256}
              height={156}
            />
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
