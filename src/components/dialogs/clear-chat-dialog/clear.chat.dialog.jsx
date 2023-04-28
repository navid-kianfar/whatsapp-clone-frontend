import React from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ClearChatDialog = ({ chat, handleClose }) => {
  const confirm = () => {
    handleClose();
  };

  return (
    <Dialog
      className="clear-delete-dialog-wrapper"
      open={true}
      onClose={handleClose}
    >
      <DialogTitle>Clear this chat?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Messages will only be removed from this device and your devices on the
          newer versions of WhatsApp.
        </DialogContentText>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Keep starred messages"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button className="primary" onClick={confirm}>
          Clear chat
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ClearChatDialog;
