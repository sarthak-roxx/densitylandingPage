import React, { useEffect, useState,useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import submitform from "../api/form";

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

export default function Popups({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  handleClickOpen1,
  homeemail,
  setwishlistCount,
  traderName,
  settraderName,
  homesetemail
}) {

  //  Validation for email check
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }

    return false;
  }

  //  Validations

  const [error, seterror] = useState(null);

  const [data, setdata] = useState({
    name: "",
    email: "" ,
  });

  // Function for save data
useEffect(() => {
  if(homeemail){
   setdata({
    name: data.name,
    email: homeemail,
  })
}}, [homeemail])


  const onChangetext = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    console.log("target" ,value,name);
    if (name === "username") {
      setdata({
        ...data,
        ...{
          name: value,
          email:homeemail
        },
      });
    } 
    if (name === "email") {
      setdata({
        ...data,
        ...{
          email: value,
        },
      });
      homesetemail(value);

      
    }
  };
  // Basic required for name

  const onsubmit = (e) => {
    e.preventDefault();
    console.log("e", e.preventDefault())
    console.log("datasubmited", data)
    if (data.name === "" && data.email === "") {
      // console.log("datasubmited1", data)

      seterror({
        nameerror: "Please enter your name",
        emailerror: "Please enter your email address",
      });
      return;
    } else if (data.name === ""){
      seterror({
        nameerror: "Please enter your name",
        emailerror: "",
      }); 
      return;
    }

    // Basic required for email address

    if (data.email === "") {
      // console.log("datasubmited2", data);

      seterror({
        nameerror: "",
        emailerror: "Please enter your email address",
      });
      return;
    }
  
    if (data.email !== "") {
      if (ValidateEmail(data.email)) {
      } else {
        seterror({
          nameerror: "",
          emailerror: "Please enter a valid  email address",
        });
        return;
      }
    }

    if (data.name !== "" && data.email !== "") {
    
      submitform(
        data.name,
        data.email,
        handleClose,
        handleClickOpen1,
        setwishlistCount,
        seterror,
        settraderName
      );
      homesetemail("")
      setdata({
        name: "",
        email: "" ,
      })
    }
    // handleClose();
    // handleClickOpen1();
  };
 
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Enter your Details"}</DialogTitle>
        <DialogContent className="popup-content">
          <DialogContentText id="alert-dialog-slide-description">
            <form>
              <FormControl variant="standard">
                <label htmlFor="Full Name">Full Name</label>
                <TextField
                  name="username"
                  value={data.name}
                  error={error == null ? false : true}
                  helperText={error?.nameerror}
                  onChange={onChangetext}
                  className="input-f"
                  fullWidth
                  placeholder="Enter Full Name"
                />
              </FormControl>
              <FormControl variant="standard">
                <label htmlFor="Full Name">Email</label>
                <TextField
                  value={
                    // (data.email === "" || data.email === undefined) ? (homeemail ? homeemail : "") : data.email
                 data.email
                  }
                  error={error == null ? false : true}
                  name="email"
                  onChange={onChangetext}
                  helperText={error?.emailerror}
                  className="input-f"
                  fullWidth
                  // disabled
                  placeholder="Enter Email Id"
                />
                <span className="required"></span>
              </FormControl>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className="submit-popup"
            onClick={(e) => {
              onsubmit(e);
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
