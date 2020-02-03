import { rgb, lighten, saturate } from 'polished';

function getCorrectIndex(number: number): number {
  if (number > 255) {
    return 255;
  }

  if (number < 0) {
    return 0;
  }

  return number;
}

type AvatarColors = {
  color: string;
  colorLighten: string;
};

export function getAvatarColors(hash: string): AvatarColors {
  const [red, green, blue] = hash
    .substr(0, 3)
    .split('')
    .map(char => getCorrectIndex(char.charCodeAt(0)));

  return {
    color: saturate(0.1, lighten(0.1, rgb({ red, green, blue }))),
    colorLighten: saturate(0.3, lighten(0.3, rgb({ red, green, blue })))
  };
}
