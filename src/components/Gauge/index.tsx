import { FunctionComponent, useEffect, useState } from "react";
import * as S from "./styles";
import GaugeIndicator from "@assets/icons/gauge-indicator.svg"
import { useIndicator } from "./hooks/useIndicator";
import { useIndicatorPerColors } from "./hooks/useIndicatorPerColors";

interface ChartGaugeProps {
  maxValue: number;
  currentValue: number;
  unit?: string
  disableTextIndicatorPerColors?: boolean
  backgroundColor?: string
}

export const ChartGauge: FunctionComponent<ChartGaugeProps> = ({
  maxValue = 100,
  currentValue = 0,
  unit = "",
  disableTextIndicatorPerColors = false,
  backgroundColor }) => {

  const INTERVAL_PER_DEG = 15;
  const indicatorPerColors = useIndicatorPerColors({
    intervalPerDeg: INTERVAL_PER_DEG,
    maxValue,
    unit,
    disableTextIndicatorPerColors
  })
  const { handleCalcIndicator } = useIndicator({ intervalPerDeg: INTERVAL_PER_DEG })

  return (
    <S.Container bg={backgroundColor}>
      <S.Gauge>
        {indicatorPerColors}
        <S.GaugeIndicatorBackground rotate={handleCalcIndicator({ maxValue, currentValue })}>
          <GaugeIndicator />
        </S.GaugeIndicatorBackground>
        <S.TextValue>{`${currentValue}${unit}`}</S.TextValue>
      </S.Gauge>
    </S.Container>
  )
}
