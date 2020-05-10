import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../styles';

import { DialogCard } from './DialogCard';

export default {
  title: 'Molecules/DialogCard',
};

const Wrapper = styled.div`
  width: 320px;
  border: 1px solid ${colors.gray300};
`;

const mocks = {
  baseUsage: {
    message:
      'В настоящее время рынок шоколада в России измеряется тысячами изделий разнообразных крупных и небольших компаний.',
    countMessages: 4,
    lastMessageDate: '2020-05-10T16:43:59.878Z',
    user: {
      id: 'user_id',
      name: 'Today News',
      isOnline: true,
    },
  },
};

export function BaseUsage() {
  return (
    <Wrapper>
      <DialogCard {...mocks.baseUsage} />
    </Wrapper>
  );
}
