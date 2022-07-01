import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { editProfile } from "../../API/Api";
import { sampleSelector } from "../../redux/slice/index";

const MyProfile = () => {
    const dispatch = useDispatch();
  const { sample } = useSelector(sampleSelector);
  console.log("profilepage",sample);

  const [Value, setValue] = useState({
    email: "",
    mobile: "",
    firstname: "",
    lastname:"",
    address1: "",
    address2:"",
    password:"",
  });
  useEffect(() => {
    setValue(sample?.data)
   dispatch( editProfile())
  }, []); 

  const handleInput = (e) => {
    e.preventDefault();
    let myData = { ...Value };
    myData[e.target.name] = e.target.value;
    setValue(myData);
  };
  const update = (e) => {
    e.preventDefault();
    // console.log("Value", Value);
    
    // setValue({ email: "", mobile: "", username: "", id: "" });
 
  };
  const handleCloseForm=()=>{

  }
  return (  
     <div>   
        <DialogTitle>Update User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            name="firstname"
            type="text"
            fullWidth
            variant="outlined"
            value={Value.firstname}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Last Name"
            name="lastname"
            type="text"
            fullWidth
            variant="outlined"
            value={Value.lastname}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            name="email"
            type="email"
            fullWidth
            variant="outlined"
            value={Value.email}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Mobile"
            type="number"
            name="mobile"
            fullWidth
            variant="outlined"
            value={Value.mobile}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Address 1"
            name="address1"
            type="text"
            fullWidth
            variant="outlined"
            value={Value.address1}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Address 2"
            name="address2"
            type="text"
            fullWidth
            variant="outlined"
            value={Value.address2}
            onChange={(e) => {
              handleInput(e);
            }}
          />
           <TextField
            autoFocus
            margin="dense"
            label="Photo"
            name="photoUrl"
            type="image"
            fullWidth
            variant="outlined"
            value={Value.photoUrl}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Password"
            name="password"
            type="text"
            fullWidth
            variant="outlined"
            value={Value.password}
            onChange={(e) => {
              handleInput(e);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button onClick={update}>Update</Button>
        </DialogActions>
    </div>
  );
};

export default MyProfile;
