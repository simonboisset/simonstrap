import * as React from 'react';
import { Button, Modal } from 'simon-ui';
import { FormExemple } from '../components/FormExample';

export const ModalPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open</Button>
      <Modal
        open={open}
        title="Formulaire"
        onClose={handleClose}
        actions={
          <>
            <Button variant="contained" color="secondary" xs={4}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" color="primary" xs={4}>
              Submit
            </Button>
          </>
        }
      >
        <FormExemple />
      </Modal>
    </div>
  );
};
