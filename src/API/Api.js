import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sampleAction } from "../redux/slice";
import { auth, baseUrl, loginUrl, registerUrl } from "../Constants/index";

export const registerApi = (data, navigate) => {
  return (dispatch) => {
    axios
      .post(registerUrl, data)
      .then((res) => {
        dispatch(sampleAction(res));
        navigate("/");
        toast.success("Registered Succesfully");
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`);
      });
  };
};

export const loginApi = (data, navigate) => {
  return (dispatch) => {
    axios
      .post(loginUrl, data)
      .then((res) => {
        dispatch(sampleAction(res));
        navigate("/dashboard");
        toast.success("Login Succesfully");
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`);
      });
  };
};

export const editProfile = () => {
  
  // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJlNzZhMzMyOTM4Y2RiYjVhNDE3ZDgiLCJlbWFpbCI6InNhaUBnbWFpLmNvbSIsImlhdCI6MTY1NjY1MTcwMX0.YP8Bo0YNx2kqEgsHjpm3DIFyYCy9zHfEbetj3W-Pxns";
  let token = sessionStorage.getItem("userToken");

  return (dispatch) => {
    axios
      .get(baseUrl + "/myuser",{headers:{ "Content-Type":"application/json",
        "Authorization": `Bearer ${token}` }} )
      .then((res) => {
        dispatch(sampleAction(res));
        toast.success("Profile details fetched");
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`);
      });
  };
};
