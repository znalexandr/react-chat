import React from 'react';
import styled from '@emotion/styled';

import { Avatar, AvatarProps, Flex } from '..';

type RowProps = {
  spaceX?: string;
  spaceY?: string;
};

const Row = styled.div<RowProps>`
  margin-bottom: ${p => p.spaceX};
  margin-right: ${p => p.spaceY};
`;

export default {
  title: 'Atoms/Avatar'
};

const avatars: AvatarProps[] = [
  {
    id: 'nIiXQFcMpp',
    name: 'Adam'
  },
  {
    id: 'h4lerto',
    name: 'Sam',
    imageSrc: 'https://avatars3.githubusercontent.com/u/7843281?s=40&v=4'
  },
  {
    id: 'yjwrnIiXQF',
    name: 'Bob'
  },
  {
    id: 'cMppSx7In',
    name: 'Alex',
    imageSrc: 'https://avatars1.githubusercontent.com/u/6828924?s=40&amp;v=4'
  }
];

export const Basic = () => (
  <Flex>
    {avatars.map(item => (
      <Row spaceY=".5rem" key={item.id}>
        <Avatar {...item} />
      </Row>
    ))}
  </Flex>
);

export const Size = () => (
  <>
    <h2>Large (default)</h2>
    <Row spaceX="1rem">
      <Flex>
        {avatars.map(item => (
          <Row spaceY=".5rem" key={item.id}>
            <Avatar {...item} />
          </Row>
        ))}
      </Flex>
    </Row>
    <h2>Small</h2>
    <Row>
      <Flex>
        {avatars.map(item => (
          <Row spaceY=".5rem" key={item.id}>
            <Avatar {...item} size="s" />
          </Row>
        ))}
      </Flex>
    </Row>
  </>
);
