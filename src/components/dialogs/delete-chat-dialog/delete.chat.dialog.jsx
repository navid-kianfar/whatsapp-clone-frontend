import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DeleteChatDialog = ({ chat, handleClose }) => {
  const confirm = () => {
    handleClose();
  };

  return (
    <Dialog
      className="clear-delete-dialog-wrapper"
      open={true}
      onClose={handleClose}
    >
      <DialogTitle>Changes to clearing or deleting a chat</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Clearing or deleting entire chats will only remove messages from this
          device and your devices on the newer versions of WhatsApp.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button className="primary" onClick={confirm}>
          Delete chat
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteChatDialog;
