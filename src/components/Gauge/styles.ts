import styled from "styled-components";

export const Container = styled.div`
  height: 18rem;
  overflow: hidden;
`;

export const Gauge = styled.div`
  height: 30rem;
  width: 30rem;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

interface GaugeIndicatorBackgroundProps {
  rotate: number
}

export const GaugeIndicatorBackground = styled.div<GaugeIndicatorBackgroundProps>`
  width: 4rem;
  height: 18rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:${({ rotate }) => `translate(-50%, -50%) rotate(${rotate}deg)`};
  transition: transform 1s;
`;

interface IndicatorValueBackgroundProps {
  rotate: number
}

export const IndicatorValueBackground = styled.div<IndicatorValueBackgroundProps>`
  width: 4rem;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({ rotate }) => `translate(-50%, -50%) rotate(${rotate}deg)`};
`;

export const IndicatorValue = styled.div`
  width: 1rem;
  height: 1.5rem;
  background: #FFF;
  border-radius: 0.5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;