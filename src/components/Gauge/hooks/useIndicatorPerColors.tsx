import { useState, useEffect } from "react";
import * as S from "../styles"

interface UseIndicatorPerColorsProps {
  intervalPerDeg: number
}

export const useIndicatorPerColors = ({ intervalPerDeg }: UseIndicatorPerColorsProps) => {

  const [indicatorPerColorsBackground, setIndicatorPerColorsBackground] = useState<JSX.Element[]>([])
  const [rotateDeg, setRotateDeg] = useState<number>(-90)

  const getColor = (percentage: number) => {
    if (percentage >= 0 && percentage <= 40) {
      return "#45FE00";
    } else if (percentage > 40 && percentage <= 50) {
      return "#F2FE00";
    } else if (percentage > 50 && percentage <= 70) {
      return "#FBA003";
    } else {
      return "#F80703";
    }
  }

  useEffect(() => {
    if (rotateDeg <= 90) {
      const percentage = ((rotateDeg + 90) * 50) / 90
      const color = getColor(percentage)

      setIndicatorPerColorsBackground(state => state.concat([
        <S.IndicatorValueBackground rotate={rotateDeg} key={rotateDeg + Math.random() * 999}>
          <S.IndicatorValue color={color} />
        </S.IndicatorValueBackground>
      ]));
      setRotateDeg(rotateDeg + intervalPerDeg)
    }
  }, [rotateDeg])

  return indicatorPerColorsBackground
}