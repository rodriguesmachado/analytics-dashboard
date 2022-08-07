import { FunctionComponent, useEffect, useState } from "react";
import * as S from "./styles";
import GaugeIndicator from "@assets/icons/gauge-indicator.svg"


export const ChartGauge: FunctionComponent = () => {

  const INTERVAL_PER_DEG = 9;
  const [rotateDeg, setRotateDeg] = useState<number>(-90)
  const [indicatorValueBackground, setIndicatorValueBackground] = useState<JSX.Element[]>([])
  const [rotateDegIndicator, setRotateDegIndicator] = useState<number>(-90)

  useEffect(() => {
    setTimeout(() => {
      if (rotateDegIndicator <= 90) {
        setRotateDegIndicator(rotateDegIndicator + INTERVAL_PER_DEG)
      } else {
        setRotateDegIndicator(-90)
      }
    }, 1000)
  }, [rotateDegIndicator])

  useEffect(() => {
    if (rotateDeg <= 90) {
      setIndicatorValueBackground(state => state.concat([
        <S.IndicatorValueBackground rotate={rotateDeg} key={rotateDeg + Math.random() * 999}>
          <S.IndicatorValue />
        </S.IndicatorValueBackground>
      ]));
      setRotateDeg(rotateDeg + INTERVAL_PER_DEG)
    }
  }, [rotateDeg])

  return (
    <S.Container>
      <S.Gauge>
        {indicatorValueBackground.map(element => element)}
        <S.GaugeIndicatorBackground rotate={rotateDegIndicator}>
          <GaugeIndicator id="gaugeIndicator" />
        </S.GaugeIndicatorBackground>
      </S.Gauge>
    </S.Container>
  )
}
