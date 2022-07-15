import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function ViewModelSlide(props) {
  const { open, handleClose ,value} = props;
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{value?`${value} Details` : "User Details"}</DialogTitle>
        <DialogContent>         
          <TextField
            autoFocus
            margin="dense"
             label="Product Name"
            type="text"    
            value={"heiwew"}           
            variant="standard"
            disabled
          /> {""}
          <TextField
            autoFocus
            margin="dense"
             label="Material Type"
            type="text"
            value={"heiwew"}     
             variant="standard"
            disabled
          />{""}
          <TextField
            autoFocus
            margin="dense"
             label="Price"
             value={450}     
            type="number"
             variant="standard"
            disabled
          />{""}
          <TextField
            autoFocus
            margin="dense"
             label="Status"
             value={"heiwew"}     
            type="text"
             variant="standard"
            disabled
          />{""}
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
