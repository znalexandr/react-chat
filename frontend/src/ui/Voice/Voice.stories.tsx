import React from 'react';

import { Babel } from '../Babel';
import { Voice } from './Voice';
import styled from '@emotion/styled';

const List = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 20px;
`;

export default {
  title: 'Molecules/Voice'
};

export const Basic = () => (
  <>
    <h2>Base usage</h2>
    <List>
      <div>
        <h3>Base</h3>
        <Babel>
          <Voice src="https://ru.kachevo.org/get/music/20180512/musicbossorg_Joji_-_Yeah_Right_55933099.mp3" />
        </Babel>
      </div>
      <div>
        <h3>Owner</h3>
        <Babel isOwner>
          <Voice
            src="https://ru.kachevo.org/get/music/20180512/musicbossorg_Joji_-_Yeah_Right_55933099.mp3"
            isOwner
          />
        </Babel>
      </div>
    </List>
  </>
);
