import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sampleAction } from "../redux/slice";
import { loginUrl, registerUrl } from "../Constants/index";

export const registerApi = (data) => {
  return (dispatch) => {
    axios
      .post(registerUrl, data)
      .then((res) => {
        dispatch(sampleAction(res));
        toast("Registered Succesfully");
      })
      .catch((err) => {
        toast(`${err.response.data.error}`);
      });
  };
};

export const loginApi = (data) => {
  return (dispatch) => {
    axios
      .post(loginUrl, data)
      .then((res) => {
        dispatch(sampleAction(res));
        toast("Login Succesfully");
      })
      .catch((err) => {
        toast(`${err.response.data.error}`);
      });
  };
};
