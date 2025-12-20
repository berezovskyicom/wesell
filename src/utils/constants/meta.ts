import Branch from "@/utils/types/Branch"

export type Meta = {
  [key in Branch]: {
    phone: string
    locationUrl: string
    telegram: string
  }
}

const META: Meta = {
  [Branch.BEREZNIAKY]: {
    phone: "+380(93)-598-21-26",
    locationUrl: "https://maps.app.goo.gl/EvoQZDGMAzxXgKM2A",
    telegram: "https://t.me/CosmAsTG",
  },
  [Branch.BORSHAHIVKA]: {
    phone: "+38(095)-380-00-80",
    locationUrl: "https://maps.app.goo.gl/u4qyZHbSs9NN127a7",
    telegram: "https://t.me/@id7870651105",
  },
}

export default META
