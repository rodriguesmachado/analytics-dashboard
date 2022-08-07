import { useState, useEffect } from "react";
import * as S from "../styles"

interface UseIndicatorPerColorsProps {
  intervalPerDeg: number;
  maxValue: number;
  unit?: string;
  disableTextIndicatorPerColors: boolean;
}

export const useIndicatorPerColors = ({
  intervalPerDeg,
  maxValue,
  unit = "",
  disableTextIndicatorPerColors = false
}: UseIndicatorPerColorsProps) => {

  const [indicatorPerColorsBackground, setIndicatorPerColorsBackground] = useState<JSX.Element[]>([])
  const [rotateDeg, setRotateDeg] = useState<number>(0)

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
    if (rotateDeg <= 180) {
      setTimeout(() => {
        const percentage = (rotateDeg * 100) / 180
        const color = getColor(percentage)
        setIndicatorPerColorsBackground(state => state.concat([
          <S.IndicatorValueBackground rotate={rotateDeg} key={rotateDeg + Math.random() * 999}>
            <S.IndicatorValue color={color} />
            {!disableTextIndicatorPerColors && <span>{Math.floor((maxValue / 180) * rotateDeg) + unit}</span>}
          </S.IndicatorValueBackground>
        ]));
        setRotateDeg(rotateDeg + intervalPerDeg)
      }, 50);
    }
  }, [rotateDeg])

  return indicatorPerColorsBackground
}