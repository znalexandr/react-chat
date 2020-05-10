import { SyntheticEvent } from 'react';

import * as icons from './icons';

export type IconName = keyof typeof icons;

export type StyleProps = {
  color?: string;
  hoverColor?: string;
  pointer?: true;
};

export type Props = {
  icon: IconName | JSX.Element;
  width?: number | string;
  height?: number | string;
  onClick?: (ev: SyntheticEvent) => void;
} & StyleProps;
