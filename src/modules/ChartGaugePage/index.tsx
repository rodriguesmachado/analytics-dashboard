import { FunctionComponent, useState } from "react";
import * as S from "./styles";
import { ChartGauge } from "@components/Gauge"

export const ChartGaugePage: FunctionComponent = () => {

  return (
    <S.Container>
      <ChartGauge />
    </S.Container>
  )
}
