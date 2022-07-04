import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/Button";
import AttachFileIcon from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { editProfile, updateProfile } from "../../API/Api";
import { sampleSelector } from "../../redux/slice/index";
import ProfileForm from "./ProfileForm";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { sample } = useSelector(sampleSelector);
  const [multipleFiles, setMultipleFiles] = useState("");

  const [Value, setValue] = useState({
    email: sample?.data?.email,
    mobile: sample?.data?.mobile,
    firstname: sample?.data?.firstname,
    lastname: sample?.data?.lastname,
    address1: sample?.data?.address1,
    address2: sample?.data?.address2,
  });

  useEffect(() => {
    dispatch(editProfile());
    if (sample) {
      setValue(sample?.data);
    }
    // setValue(sample?.data);
  }, []);

  console.log("state", Value);
  console.log("api", sample);

  //   useEffect(() => {
  //     setValue( Value.email= sample?.data?.email)
  //     setValue(Value.mobile= sample?.data?.mobile)
  //     setValue(Value.firstname= sample?.data?.firstname)
  //     setValue( Value.lastname= sample?.data?.lastname)
  //     setValue( Value.address1= sample?.data?.address1)
  //     setValue(Value.address2= sample?.data?.address2)
  //  }, [sample])

  const handleInput = (e) => {
    e.preventDefault();
    let myData = { ...Value };
    myData[e.target.name] = e.target.value;
    setValue(myData);
  };

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files[0]);
  };

  const formValue = new FormData();
  formValue.append("firstname", Value?.firstname);
  formValue.append("lastname", Value?.lastname);
  formValue.append("email", Value?.email);
  formValue.append("mobile", Value?.mobile);
  for (let i = 0; i < multipleFiles.length; i++) {
    formValue.append("photoUrl", multipleFiles[i]);
  }
  formValue.append("password", Value?.password);
  formValue.append("address1", Value?.address1);
  formValue.append("address2", Value?.address2);
  formValue.append("role", Value?.role);
  formValue.append("status", Value?.status);

  const updateProfileInfo = () => {
    let id = Value?._id;
    dispatch(updateProfile(Value, id));
  };

  const handleCloseForm = () => {};
  return (
    <div>
      <ProfileForm
        updateProfileInfo={updateProfileInfo}
        MultipleFileChange={MultipleFileChange}
        sample={sample}
        handleInput={handleInput}
      />
      {/* <TextField
          autoFocus
          margin="dense"
          label="First Name"
          name="firstname"
          type="text"
          fullWidth
          variant="outlined"
          value={Value?.firstname}
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
          value={Value?.lastname}
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
          value={Value?.email}
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
          value={Value?.mobile}
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
          value={Value?.address1}
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
          value={Value?.address2}
          onChange={(e) => {
            handleInput(e);
          }}
        />

        <IconButton color="primary" component="label">
          <div class="form-group col-lg-6 col-md-6">
            <label for="image">Image</label>
            <input
              type="file"
              class="form-control"
              multiple
              name="images"
              onChange={(e) => multipleFiles(e)}
              required
            />
          </div>

          
          <AttachFileIcon fontSize="medium" />
        </IconButton>
   
        <Button onClick={handleCloseForm}>Cancel</Button>
        <Button onClick={updateProfileInfo}>Update</Button> */}
    </div>
  );
};

export default MyProfile;
