"use client"

import MEDIA from "@/utils/constants/media"

const isMobile = (
  width: number = MEDIA.MD,
  boundary: "min" | "max" = "max",
): boolean => (
  window.matchMedia(`(${boundary}-width: ${width}px)`).matches
)

export default isMobile
