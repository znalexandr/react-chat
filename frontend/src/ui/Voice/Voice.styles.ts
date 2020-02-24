import { css } from '@emotion/core';
import styled from '@emotion/styled';

import WaveSVG from './icons/wave.svg';

export const Audio = styled.audio`
  display: none;
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  outline: none;
  background-color: #0f3997;
  overflow: hidden;
  cursor: pointer;

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 12px;
    height: 12px;
    fill: #fff;
  }
`;

export const Wave = styled(WaveSVG)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

export const CurrentTime = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  opacity: 0.5;
`;

export const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  opacity: 0.15;
`;

export const VoiceContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type VoiceProps = {
  isOwner?: boolean;
};

export const Voice = styled.div<VoiceProps>`
  display: block;
  width: 280px;

  ${p =>
    p.isOwner &&
    css`
      ${Button} {
        background-color: #3674ff;
      }

      ${Progress} {
        background-color: #3674ff;
      }
    `};
`;
