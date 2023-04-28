import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const MuteChatDialog = ({ handleClose }) => {
  const options = [
    { label: "8 Hours", value: 1 },
    { label: "1 Week", value: 2 },
    { label: "Always", value: 3 },
  ];

  const confirm = () => {
    handleClose();
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Mute notifications</DialogTitle>
      <DialogContent>
        <DialogContentText>
          No one else in this chat will see that you muted it, and you will
          still be notified if you are mentioned.
        </DialogContentText>

        <RadioGroup defaultValue={options[0].value}>
          {options.map((opt) => (
            <FormControlLabel
              key={opt.value}
              value={opt.value}
              control={<Radio />}
              label={opt.label}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button className="primary" onClick={confirm}>
          Mute
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MuteChatDialog;
