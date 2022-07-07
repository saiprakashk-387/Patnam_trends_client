import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { hasError, sampleAction, startLoading } from "../redux/slice";
 
import {
  baseUrl,
  loginUrl,
  registerUrl,
  ACCESS_TOKEN 
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
        sessionStorage.setItem("Token",res?.data?.token)
        sessionStorage.setItem("access_token",res?.data?.token)

        dispatch(sampleAction(res));
        navigate("/dashboard");
        toast.success("Login Succesfully");
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`);
        dispatch(hasError(err.response.data.error))
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
          Authorization : ACCESS_TOKEN() ? `Bearer ${ACCESS_TOKEN()}` : undefined,
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
          Authorization : ACCESS_TOKEN() ? `Bearer ${ACCESS_TOKEN()}` : undefined,
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
