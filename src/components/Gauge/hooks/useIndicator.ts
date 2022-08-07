import { useState, useEffect } from "react";

interface UseIndicatorProps {
  intervalPerDeg: number
}

interface HandleCalcIndicatorProps {
  maxValue: number;
  currentValue: number;
}

export const useIndicator = ({ intervalPerDeg }: UseIndicatorProps) => {

  const [rotateDegIndicator, setRotateDegIndicator] = useState<number>(0)

  useEffect(() => {
    setTimeout(() => {
      if (rotateDegIndicator < 180) {
        setRotateDegIndicator(rotateDegIndicator + intervalPerDeg)
      } else {
        setRotateDegIndicator(0)
      }
    }, 1000)
  }, [rotateDegIndicator])

  const handleCalcIndicator = ({ maxValue, currentValue }: HandleCalcIndicatorProps) => {
    if (maxValue === 0) return 0
    const percentageCurrent = (currentValue * 100) / maxValue;
    const deg = (180 * percentageCurrent) / 100;
    return deg
  }

  return {
    rotateDegIndicator,
    handleCalcIndicator
  }
}