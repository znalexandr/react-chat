import styled from '@emotion/styled';
import { rgba } from 'polished';

import { colors } from '..';

import { Online } from '../Online';

type DialogCardProps = {
  isSelected?: boolean;
};

const colorCardSelected = rgba(colors.primaryHover, 0.08);

export const DialogCard = styled.div<DialogCardProps>`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 12px;
  width: 100%;
  height: 60px;
  padding: 8px;
  background-color: ${(p) => p.isSelected && colorCardSelected};
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${colorCardSelected};
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;

  ${Online} {
    position: absolute;
    bottom: 4px;
    right: 2px;
    z-index: 1;
    box-shadow: 0 0 0 2px ${colors.white};
  }
`;

export const Username = styled.div`
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Date = styled.div`
  text-align: right;
  color: ${colors.gray400};
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 74px;
  grid-gap: 4px;
  margin-bottom: 8px;
`;

export const Message = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Status = styled.div`
  text-align: right;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 32px;
`;

export const Count = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${colors.red};
  color: ${colors.white};
  font-size: 12px;
  line-height: 16px;
`;
