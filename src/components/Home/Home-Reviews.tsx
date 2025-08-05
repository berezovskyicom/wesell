import Container from "@/components/Container"
import Heading from "@/components/Heading/Heading"
import translate from "@/utils/translate"

import StarsIcon from "./icons/stars.svg"

import styles from "./Home-Reviews.module.scss"

const REVIEW_IDS = {
  ANGELINA: "angelina",
  MAX: "max",
  MIKE: "mike",
}

const REVIEW_IDS_ORDER = [
  REVIEW_IDS.MIKE,
  REVIEW_IDS.MAX,
  REVIEW_IDS.ANGELINA,
]

const Reviews = () => (
  <section id="reviews">
    <Container className={styles["home__reviews"]}>
      <Heading>
        {translate("home.reviews.title")}
      </Heading>
      <div className={styles["home__reviews-container"]}>
        {REVIEW_IDS_ORDER.map(id => (
          <div
            className={styles["home__reviews-item"]}
            key={id}
          >
            <div className={styles["home__reviews-item-header"]}>
              <div className={styles["home__reviews-item-avatar"]}>
                {id.slice(0, 1)}
              </div>
              <div>
                <div className={styles["home__reviews-item-title"]}>
                  {translate(`home.reviews.${id}.name`)}
                </div>
                <StarsIcon className={styles["home__reviews-item-stars"]} />
              </div>
            </div>
            <p className={styles["home__reviews-item-description"]}>
              {translate(`home.reviews.${id}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
)

export default Reviews
