export type AvatarSize = 's' | 'l';

export type AvatarProps = {
  id: string;
  name: string;
  imageSrc?: string;
  size?: AvatarSize;
};
