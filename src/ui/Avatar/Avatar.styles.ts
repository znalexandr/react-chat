import styled from '@emotion/styled';

import * as T from './Avatar.types';

type AvatarProps = {
  size?: T.AvatarSize;
  color?: string;
  colorLighten?: string;
};

function getSize(size: T.AvatarSize) {
  return size === 's' ? '30px' : '40px';
}

export const Name = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: 18px;
  text-align: center;
  color: #fff;
`;

export const Avatar = styled.div<AvatarProps>`
  position: relative;
  width: ${p => getSize(p.size)};
  height: ${p => getSize(p.size)};
  border-radius: 50%;
  background: ${p =>
    p.color &&
    `linear-gradient(135deg, ${p.color} 0%, ${p.colorLighten} 96.52%)`};
  overflow: hidden;

  img {
    width: 100%;
  }

  ${Name} {
    font-size: ${p => p.size === 's' && '14px'};
  }
`;
