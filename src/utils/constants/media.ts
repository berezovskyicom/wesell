import entries from "lodash-es/entries"
import variables from "@/sass/variables.module.scss"

const MEDIA = Object.fromEntries(
  entries(variables)
    .filter(([key]) => key.startsWith("media_"))
    .map(([key, value]) => [key.replace("media_", "").toUpperCase(), parseInt(value, 10)]),
)

export default MEDIA
