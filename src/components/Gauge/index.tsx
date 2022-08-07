import { FunctionComponent, useEffect, useState } from "react";
import * as S from "./styles";
import GaugeIndicator from "@assets/icons/gauge-indicator.svg"
import { useIndicator } from "./hooks/useIndicator";
import { useIndicatorPerColors } from "./hooks/useIndicatorPerColors";

export const ChartGauge: FunctionComponent = () => {

  const INTERVAL_PER_DEG = 15;
  const rotateDegIndicator = useIndicator({ intervalPerDeg: INTERVAL_PER_DEG });
  const indicatorPerColors = useIndicatorPerColors({ intervalPerDeg: INTERVAL_PER_DEG })

  return (
    <S.Container>
      <S.Gauge>
        {indicatorPerColors}
        <S.GaugeIndicatorBackground rotate={rotateDegIndicator}>
          <GaugeIndicator />
        </S.GaugeIndicatorBackground>
      </S.Gauge>
    </S.Container>
  )
}
