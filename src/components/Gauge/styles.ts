import styled, { css } from "styled-components";

interface ContainerProps {
  bg?: string
}

export const Container = styled.div<ContainerProps>`
  ${({bg}) => bg && css`
    background: ${bg};
  `};
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

interface IndicatorProps {
  rotate: number
}

export const GaugeIndicatorBackground = styled.div<IndicatorProps>`
  width: 4rem;
  height: 18rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:${({ rotate }) => css`translate(-50%, -50%) rotate(${rotate - 90}deg)`};
  transition: transform 1s;
`;

export const IndicatorValueBackground = styled.div<IndicatorProps>`
  width: 4rem;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({ rotate }) => css`translate(-50%, -50%) rotate(${rotate - 90}deg)`};

  span {
    position: absolute;
    left: 50%;
    top: -5%;
    transform: translate(-50%);
    color: #9E9E9E;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

interface IndicatorValueProps {
  color?: string
}

export const IndicatorValue = styled.div<IndicatorValueProps>`
  width: 1rem;
  height: 1.5rem;
  background-color: ${({ color }) => color || "#FFF"};
  border-radius: 0.5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

export const TextValue = styled.span`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;