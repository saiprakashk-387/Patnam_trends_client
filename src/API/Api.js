import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sampleAction, startLoading } from "../redux/slice";

import {
  baseUrl,
  loginUrl,
  registerUrl,
  token,
} from "../Constants/index";

export const registerApi = (data, navigate) => {
  return (dispatch) => {
    dispatch(startLoading());
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
    dispatch(startLoading());
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

export const editProfile =  ()  =>{ 
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get(baseUrl + "/myuser", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(sampleAction(res));

        toast.success("Profile details fetched");
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`);
      });
  };
};

export const updateProfile = (Value,id) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .put(baseUrl +`/edituser/${id}`,Value, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(sampleAction(res));
        toast.success("Profile Updated");
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`);
      });
  };
};
