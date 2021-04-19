import { useState } from 'react';

export const useBoolean = (initValue: boolean = false) => {
  const [open, setOpen] = useState(initValue);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onToogle = () => setOpen(!open);
  return { open, onOpen, onClose, onToogle };
};
