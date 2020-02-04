import styled from '@emotion/styled';

import { Avatar as AvatarUI, colors } from '..';

export const Message = styled.div`
  position: relative;
`;

export const MessageBox = styled.div`
  display: flex;
`;
export const Avatar = styled(AvatarUI)`
  flex-shrink: 0;
  margin: auto 14px 22px 0;
`;

export const Time = styled.div`
  margin-top: 8px;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.gray400};
`;

export const Babel = styled.div`
  display: inline-block;
  max-width: 400px;
  padding: 15px 14px 10px;
  border-radius: 12px 12px 12px 0;
  background: #3674ff;
  box-shadow: 0 5px 5px rgba(54, 116, 255, 0.19);
  color: #fff;
`;
