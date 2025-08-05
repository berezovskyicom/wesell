"use client"

import MEDIA from "@/utils/constants/media"

type Boundary = "min" | "max"

const isMobile = (width: number = MEDIA.MD, boundary: Boundary = "max"): boolean => (
  window.matchMedia(`(${boundary}-width: ${width}px)`).matches
)

export default isMobile
