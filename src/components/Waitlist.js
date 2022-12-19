import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import FormControl from "@mui/material/FormControl";
import { Grid, Button, Input, Link, Box } from "@mui/material";

//Popup
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
//popup

export default function Waitlist({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  wishlistCount,
  traderName,
}) {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="popup-content waitlist-content">
          <DialogContentText
            id="alert-dialog-slide-description"
            className="waitlist"
          >
            <h4>You have been successfully added to our waitlist</h4>
            <div className="trader-summry">
              <div className="trader-name">
                <span>Trader Name</span>
                <h3>{traderName}</h3>
              </div>
              <div className="wait-list">
                <span>Waitlist</span>
                <h3>{wishlistCount}/5000</h3>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button className='submit-popup' onClick={handleClose}>Close</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}
