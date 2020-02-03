import React from 'react';
import styled from '@emotion/styled';

import { Avatar, AvatarProps, Flex } from '@/ui';

type RowProps = {
  spaceX?: string;
  spaceY?: string;
};

const Row = styled.div<RowProps>`
  margin-bottom: ${p => p.spaceX};
  margin-right: ${p => p.spaceY};
`;

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

export default function HomePage() {
  return (
    <div>
      <h1>Components</h1>
      <Row>
        <h2>Avatar</h2>
        <Flex>
          {avatars.map(item => (
            <Row spaceY=".5rem" key={item.id}>
              <Avatar {...item} />
            </Row>
          ))}
        </Flex>
      </Row>
    </div>
  );
}
