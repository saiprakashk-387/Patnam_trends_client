import React ,{useState}from 'react'
import Button from "@mui/material/Button";
import IconButton from "@mui/material/Button";
import AttachFileIcon from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import UploadImage from './UploadImage';

const ProfileForm = ({updateProfileInfo,MultipleFileChange,sample,handleInput}) => {
  return (
    <div>
        
 <TextField
          autoFocus
          margin="dense"
          label="First Name"
          name="firstname"
          type="text"
          fullWidth
          variant="outlined"
          value={sample?.data?.firstname}
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
          value={sample?.data?.lastname}
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
          value={sample?.data?.email}
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
          value={sample?.data?.mobile}
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
          value={sample?.data?.address1}
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
          value={sample?.data?.address2}
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <UploadImage/>

        {/* <IconButton color="primary" component="label">
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
        </IconButton> */}
      
        <Button onClick={updateProfileInfo}>Update</Button>

    </div>
  )
}

export default ProfileForm