import Image from "next/image"
import Container from "@/components/Container"

import styles from "./Home-CarBrands.module.scss"

const CarBrands = () => (
  <section className={styles["home__car-brands"]}>
    <Container className={styles["home__car-brands-container"]}>
      <div className={styles["home__car-brands-image-wrapper"]}>
        <Image
          src="/assets/home/car-brands/bmw.png"
          alt="BMW"
          width={80}
          height={80}
        />
      </div>
      <div className={styles["home__car-brands-image-wrapper"]}>
        <Image
          src="/assets/home/car-brands/mini.png"
          alt="BMW"
          width={140}
          height={80}
        />
      </div>
      <div className={styles["home__car-brands-image-wrapper"]}>
        <Image
          src="/assets/home/car-brands/alpina.png"
          alt="BMW"
          width={80}
          height={80}
        />
      </div>
      <div className={styles["home__car-brands-image-wrapper"]}>
        <Image
          src="/assets/home/car-brands/m-badge.png"
          alt="BMW"
          width={140}
          height={80}
        />
      </div>
      <div className={styles["home__car-brands-image-wrapper"]}>
        <Image
          src="/assets/home/car-brands/rolls-royce.png"
          alt="BMW"
          width={80}
          height={80}
        />
      </div>
    </Container>
  </section>
)

export default CarBrands
