import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addProductAction,
  hasError,
  productAction,
  sampleAction,
  startLoading,
  usersAction,
} from "../redux/slice";

import { baseUrl, ACCESS_TOKEN } from "../Constants/index";

export const registerApi = (data, navigate) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .post(baseUrl + "/register", data)
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
      .post(baseUrl + "/login", data)
      .then((res) => {
        sessionStorage.setItem("access_token", res?.data?.token);
        sessionStorage.setItem("role", res?.data?.user?.role);
        dispatch(sampleAction(res));
        if (res?.data?.user?.role === "customer") {
          navigate("/dashboard");
        } else if (res?.data?.user?.role === "admin") {
          navigate("/admindashboard");
        }
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`);
        dispatch(hasError(err.response.data.error));
      });
  };
};

export const editProfile = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get(baseUrl + "/myuser", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        dispatch(sampleAction(res));
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`);
      });
  };
};

export const updateProfile = (Value, id) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .put(baseUrl + `/edituser/${id}`, Value, {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        dispatch(sampleAction(res));
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`);
      });
  };
};

///////////////////////admin api's///////////////////////

export const addstock = (data) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .post(baseUrl + "/createProduct", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        dispatch(addProductAction(res));
        toast.success(`Product Added `);
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });
  };
};
export const getStockList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get(baseUrl + "/allproducts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        dispatch(productAction(res));
      })
      .catch((err) => {
        toast.error(`${err}`);
        console.log("err", err);
      });
  };
};
export const deleteStock = (id) => {
  return (dispatch) => {
    axios
      .delete(baseUrl + `/delProduct/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        // console.log("delres", res);
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  };
};
export const updateStock = (Data, id) => {
  return (dispatch) => {
    axios
      .put(baseUrl + `/updateProduct/${id}`, Data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        toast.success(`Product Updated`);
      })
      .then((err) => {
        toast.error(`${err}`);
      });
  };
};

export const getUserList = () => {
  return (dispatch) => {
    axios
      .get(baseUrl + "/allusers", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        dispatch(usersAction(res));
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  };
};
export const deleteUser = (id) => {
  return (dispatch) => {
    axios   
      .delete(baseUrl+`/deluser/${id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        toast.success(`User Deleted`);
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  };
};
