import { Modal } from '@mui/material';
import { useImperativeHandle, forwardRef, useState } from 'react'

const PaymentModal = (props, ref) => {
  const [open, setOpen] = useState(false);
  //const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref,()=>({
    handleOpen:() => setOpen(true)
  }));

  return (
    <Modal open={open} onClose={handleClose}>
        Hi
    </Modal>
  )
}

export default forwardRef(PaymentModal);