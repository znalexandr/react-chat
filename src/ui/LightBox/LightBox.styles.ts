import styled from '@emotion/styled';

export const LightBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1080;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  opacity: 0.8;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  max-width: 980px;
  margin: auto;
  overflow: hidden;
  border-radius: 4px;
`;
