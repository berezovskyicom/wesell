import throttle from "lodash-es/throttle"
import { useState, useEffect } from "react"
import MEDIA from "@/utils/constants/media"
import isMobile from "@/utils/isMobile"

const useIsMobile = (width = MEDIA.MD): boolean => {
  const [isMobileWidth, setIsMobileWidth] = useState(false)

  useEffect(() => {
    const updateSize = throttle(() => setIsMobileWidth(isMobile(width)), 250)

    setIsMobileWidth(isMobile(width))
    window.addEventListener("resize", updateSize)

    return () => {
      window.removeEventListener("resize", updateSize)
      updateSize.cancel()
    }
  }, [width])

  return isMobileWidth
}

export default useIsMobile
