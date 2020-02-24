import React from 'react';
import styled from '@emotion/styled';

import * as M from './Message.mocks';

import { Message } from './Message';

const Messages = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 20px;
`;

export default {
  title: 'Molecules/Message'
};

export const Basic = () => (
  <>
    <h2>Base usage</h2>
    <Message {...M.example} />
  </>
);
export const Attachment = () => (
  <>
    <h2>Example text with images</h2>
    <Message {...M.example2} />
  </>
);

Attachment.story = {
  name: 'Text with images'
};

export const Read = () => (
  <>
    <h2>Message is read</h2>
    <Messages>
      <Message {...M.example} isOwner isRead />
      <Message {...M.example} isOwner />
    </Messages>
  </>
);

Read.story = {
  name: 'isRead'
};

export const Owner = () => (
  <>
    <h2>Message is owner</h2>
    <Messages>
      <Message {...M.example} />
      <Message {...M.example} isRead isOwner />
      <Message {...M.example2} />
      <Message {...M.example2} isOwner isRead />
      <Message {...M.example} isOwner />
    </Messages>
  </>
);

Owner.story = {
  name: 'isOwner'
};

export const Voice = () => (
  <>
    <h2>Voice message</h2>
    <Messages>
      <Message {...M.voice} />
      <Message {...M.voice} isRead isOwner />
    </Messages>
  </>
);
