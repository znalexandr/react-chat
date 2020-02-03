import styled from '@emotion/styled';

type AvatarSize = 'm' | 'l';

type AvatarProps = {
  size?: AvatarSize;
  color?: string;
  colorLighten?: string;
};

function getSize(size: AvatarSize) {
  return size === 'm' ? '30px' : '40px';
}

export const Avatar = styled.div<AvatarProps>`
  position: relative;
  width: ${p => getSize(p.size)};
  height: ${p => getSize(p.size)};
  border-radius: 50%;
  background: ${p =>
    p.color &&
    `linear-gradient(135deg, ${p.color} 0%, ${p.colorLighten} 96.52%)`};
  overflow: hidden;
`;

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
