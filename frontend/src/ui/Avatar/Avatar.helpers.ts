import { rgb } from 'polished';

function getCorrectIndex(number: number): number {
  if (number > 255) {
    return 255;
  }

  if (number < 0) {
    return 0;
  }

  return number;
}

export function getAvatarColors(hash: string): string {
  const [red, green, blue] = hash
    .substr(3, 3)
    .split('')
    .map((char) => getCorrectIndex(char.charCodeAt(0)));

  return rgb({ red, green, blue });
}
