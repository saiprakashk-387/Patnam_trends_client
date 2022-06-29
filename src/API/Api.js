import axios from "axios";
import { sampleAction } from "../redux/slice";
import { registerUrl } from "../Constants/index";
export const registerApi = (data) => {
  return (dispatch) => {
    axios
      .post(registerUrl, data)
      .then((res) => {
        dispatch(sampleAction(res));
      })
      .catch((err) => {
        console.log("err",err.message);
      });
  };
};
