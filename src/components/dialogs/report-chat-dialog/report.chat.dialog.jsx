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

const ReportChatDialog = ({ chat, handleClose }) => {
  const confirm = () => {
    handleClose();
  };

  return (
    <Dialog className="report-dialog-wrapper" open={true} onClose={handleClose}>
      <DialogTitle>Report this contact to WhatsApp?</DialogTitle>
      <DialogContent>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Block contact and clear chat"
        />
        <div className="report-desc">&nbsp;</div>
        <DialogContentText>
          The last 5 messages from this contact will be forwarded to WhatsApp.
          If you block this contact and clear the chat, messages will only be
          removed from this device and your devices on the newer versions of
          WhatsApp
        </DialogContentText>
        <DialogContentText>
          This contact will not be notified.
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

export default ReportChatDialog;
