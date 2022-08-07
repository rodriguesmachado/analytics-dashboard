import { useState, useEffect } from "react";
import * as S from "../styles"

interface UseIndicatorPerColorsProps {
  intervalPerDeg: number
}

export const useIndicatorPerColors = ({ intervalPerDeg }: UseIndicatorPerColorsProps) => {

  const [indicatorPerColorsBackground, setIndicatorPerColorsBackground] = useState<JSX.Element[]>([])
  const [rotateDeg, setRotateDeg] = useState<number>(-90)

  useEffect(() => {
    if (rotateDeg <= 90) {
      setIndicatorPerColorsBackground(state => state.concat([
        <S.IndicatorValueBackground rotate={rotateDeg} key={rotateDeg + Math.random() * 999}>
          <S.IndicatorValue />
        </S.IndicatorValueBackground>
      ]));
      setRotateDeg(rotateDeg + intervalPerDeg)
    }
  }, [rotateDeg])

  return indicatorPerColorsBackground
}