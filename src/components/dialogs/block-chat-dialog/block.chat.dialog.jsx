import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PhoneFormatter from "../../phone-formatter/phone.formatter";

const BlockChatDialog = ({ chat, handleClose }) => {
  const confirm = () => {
    handleClose();
  };

  return (
    <Dialog className="block-dialog-wrapper" open={true} onClose={handleClose}>
      <DialogTitle>
        Block <PhoneFormatter phone={chat.identifier} />?
      </DialogTitle>
      <DialogContent>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Report contact"
        />
        <div className="report-desc">
          The last 5 messages from this user will be forwarded to WhatsApp.
        </div>
        <DialogContentText>
          Blocked contacts will no longer be able to call you or send you
          messages. This contact will not be notified.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button className="primary" onClick={confirm}>
          Block
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BlockChatDialog;
