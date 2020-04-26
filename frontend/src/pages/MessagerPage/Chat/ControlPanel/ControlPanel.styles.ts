import styled from '@emotion/styled';

import { FormInput, Button as ButtonUI, colors } from '@/ui';

export const ControlPanel = styled.div`
  position: relative;
  padding: 12px 16px;
  border-top: 1px solid ${colors.gray300};
  background-color: ${colors.gray100};
`;

export const Input = styled(FormInput)`
  height: 36px;
  font-size: 14px;
`;

export const Button = styled(ButtonUI)`
  height: 36px;
  padding: 0 12px;
  font-size: 14px;
`;

export const GroupControl = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;

  ${Input} {
    border-radius: 4px 0 0 4px;
  }

  ${Button} {
    border-radius: 0 4px 4px 0;
  }
`;
