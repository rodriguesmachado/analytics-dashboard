import { useState, useEffect } from "react";

interface UseIndicatorProps {
  intervalPerDeg: number
}

export const useIndicator = ({ intervalPerDeg }: UseIndicatorProps) => {

  const [rotateDegIndicator, setRotateDegIndicator] = useState<number>(-90)

  useEffect(() => {
    setTimeout(() => {
      if (rotateDegIndicator < 90) {
        setRotateDegIndicator(rotateDegIndicator + intervalPerDeg)
      } else {
        setRotateDegIndicator(-90)
      }
    }, 1000)
  }, [rotateDegIndicator])

  return rotateDegIndicator
}