import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { updateProfile } from "../../API/Api";
import Loader from "../Loader/Loader";

const ProfileForm = (props) => {
  const dispatch = useDispatch();
  const { sample ,error ,isLoading} = props;
  const [status, setStatus] = useState(false);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [Value, setValue] = useState({
    email: "",
    mobile: "",
    firstname: "",
    lastname: "",
    address2: "",
    address1: "",
    photoUrl: url,
  });

  useEffect(() => {
    setValue(sample.data);
  }, [props]);
  console.log("user", Value?.photoUrl);
  sessionStorage.setItem("profilephoto", Value?.photoUrl);
  const handleInput = (e) => {
    e.preventDefault();
    let myData = { ...Value };
    myData[e.target.name] = e.target.value;
    setValue(myData);
  };
  const uploadImage = () => {
    setStatus(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "lisuczwe");
    data.append("cloud_name", "dignfufky");
    fetch("https://api.cloudinary.com/v1_1/dignfufky/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        setStatus(false);
      })
      .catch((err) => console.log(err));
  };

  const formValue = new FormData();
  formValue.append("firstname", Value?.firstname);
  formValue.append("lastname", Value?.lastname);
  formValue.append("email", Value?.email);
  formValue.append("mobile", Value?.mobile);
  formValue.append("address1", Value?.address1);
  formValue.append("address2", Value?.address2);
  formValue.append("role", Value?.role);
  formValue.append("status", Value?.status);
  formValue.append("password", Value?.password);
  formValue.append("photoUrl", Value?.photoUrl);

  const updateProfileInfo = () => {
    let id = Value?._id;
    dispatch(updateProfile(Value, id));
  };
  return (
    <div>
      <TextField
        label="First Name"
        fullWidth
        margin="dense"
        color="secondary"
        name="firstname"
        value={Value?.firstname}
        onChange={(e) => {
          handleInput(e);
        }}
        focused
      />
      <TextField
        label="Last Name"
        fullWidth
        margin="dense"
        color="secondary"
        name="lastname"
        value={Value?.lastname}
        onChange={(e) => {
          handleInput(e);
        }}
        focused
      />
      <TextField
        label="Email"
        fullWidth
        margin="dense"
        color="secondary"
        name="email"
        value={Value?.email}
        onChange={(e) => {
          handleInput(e);
        }}
        focused
      />
      <TextField
        label="Mobile"
        fullWidth
        margin="dense"
        color="secondary"
        name="mobile"
        value={Value?.mobile}
        onChange={(e) => {
          handleInput(e);
        }}
        focused
      />
      <TextField
        label="Address 1"
        fullWidth
        margin="dense"
        color="secondary"
        name="address1"
        value={Value?.address1}
        onChange={(e) => {
          handleInput(e);
        }}
        focused
      />
      <TextField
        label="Address 2 "
        fullWidth
        margin="dense"
        color="secondary"
        name="address2"
        value={Value?.address2}
        onChange={(e) => {
          handleInput(e);
        }}
        focused
      />
      <TextField
        label="Photo Url"
        fullWidth
        disabled
        margin="dense"
        color="secondary"
        name="address1"
        value={url}
        onChange={(e) => {
          handleInput(e);
        }}
        focused
      />
      <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        {image && (
          <span onClick={uploadImage}>
            {url ? (
              <Button color="success">Photo Uploaded</Button>
            ) : (
              <Button variant="outlined">Update Photo</Button>
            )}
          </span>
        )}
      </div>
      {url && (
        <div>
          <img src={url} width={200} height={100} alt="Prfile Pic" />
        </div>
      )}
      {status || isLoading? (
        <Loader />
      ) : (
        <Button onClick={updateProfileInfo}>Update</Button>
      )}
    </div>
  );
};

export default ProfileForm;
