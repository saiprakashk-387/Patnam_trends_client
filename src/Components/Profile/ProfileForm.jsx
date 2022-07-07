import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { updateProfile } from "../../API/Api";
import Loader from "../Loader/Loader";
import { useFormik } from "formik";
import * as yup from "yup";

const ProfileForm = (props) => {
  const dispatch = useDispatch();

  const { sample } = props;
  const [status, setStatus] = useState(false);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: sample?.data?.email,
      mobile: sample.data?.mobile,
      firstname: sample?.data?.firstname,
      lastname: sample?.data?.lastname,
      address2: sample?.data?.address2,
      address1: sample?.data?.address1,
      photoUrl: url,
    },

    onSubmit: async (Data, reset) => {
      dispatch(updateProfile(Data, sample.data._id, (Data.photoUrl = url)));
    },
  });
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

  return (
    <div>
      <TextField
        label="First Name"
        fullWidth
        margin="dense"
        color="secondary"
        name="firstname"
        value={formik?.values?.firstname}
        onChange={formik.handleChange}
        focused
      />
      <TextField
        label="Last Name"
        fullWidth
        margin="dense"
        color="secondary"
        name="lastname"
        value={formik.values?.lastname}
        onChange={formik.handleChange}
        focused
      />
      <TextField
        label="Email"
        fullWidth
        margin="dense"
        color="secondary"
        name="email"
        value={formik.values?.email}
        onChange={formik.handleChange}
        focused
      />
      <TextField
        label="Mobile"
        fullWidth
        margin="dense"
        color="secondary"
        name="mobile"
        value={formik.values?.mobile}
        onChange={formik.handleChange}
        focused
      />
      <TextField
        label="Address 1"
        fullWidth
        margin="dense"
        color="secondary"
        name="address1"
        value={formik.values?.address1}
        onChange={formik.handleChange}
        focused
      />
      <TextField
        label="Address 2 "
        fullWidth
        margin="dense"
        color="secondary"
        name="address2"
        value={formik.values?.address2}
        onChange={formik.handleChange}
        focused
      />
      <div>
        <input
          type="file"
          name="photoUrl"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
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

      {status ? (
        <Loader />
      ) : (
        <Button onClick={formik.handleSubmit}>Update</Button>
      )}
    </div>
  );
};

export default ProfileForm;
