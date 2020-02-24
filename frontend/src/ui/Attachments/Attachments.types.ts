export type AttachmentsType = 'img' | 'file';

export type AttachmentsItem = {
  type: AttachmentsType;
  exp?: string;
  url: string;
};

export type AttachmentsProps = {
  className?: string;
  data: AttachmentsItem[];
};
