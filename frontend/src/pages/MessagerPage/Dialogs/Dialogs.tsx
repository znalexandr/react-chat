import React from 'react';

import { DialogCard, DialogCardProps, List } from '@/ui';

type Dialog = DialogCardProps & { id: string };

type Props = {
  list: Dialog[];
};

export function Dialogs(props: Props) {
  const { list } = props;

  if (!list || !!list.length) {
    return <>Нет диалогов</>;
  }

  return (
    <List type="row">
      {list.map((dialog) => {
        const { id, ...rest } = dialog;
        return <DialogCard key={id} {...rest} />;
      })}
    </List>
  );
}
