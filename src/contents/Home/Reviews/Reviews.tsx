import Container from "@/components/Container"
import Title from "@/components/Title"
import translate from "@/utils/translate"

import StarsIcon from "./icons/stars.svg"

import styles from "./Reviews.module.scss"

enum Review {
  ANGELINA = "angelina",
  MAX = "max",
  MIKE = "mike",
}

const REVIEWS_ORDER = [
  Review.MIKE,
  Review.MAX,
  Review.ANGELINA,
]

const Reviews = () => (
  <section id="reviews">
    <Container className={styles["home__reviews"]}>
      <Title>
        {translate("home.reviews.title")}
      </Title>
      <div className={styles["home__reviews-container"]}>
        {REVIEWS_ORDER.map(id => (
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
