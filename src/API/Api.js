import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addProductAction,
  cartAction,
  cartListAction,
   CreateUserAccountAction,
   productAction,
   updateCartAction,
  UserEditProfileAction,
  UserLoginAction,
  usersAction,
  UserUpdateProfileAction,
} from "../redux/slice";

import { baseUrl, ACCESS_TOKEN } from "../Constants/index";

export const registerApi = (data, navigate) => {
  return (dispatch) => {
     axios
      .post(baseUrl + "/register", data)
      .then((res) => {
        dispatch(CreateUserAccountAction(res));
        navigate("/");
        toast.success("Registered Succesfully");
      })
      .catch((err) => {
        dispatch(CreateUserAccountAction(err));
        toast.error(`${err.response.data.error}`);
      });
  };
};

export const loginApi = (data, navigate) => {
  return (dispatch) => {
     axios
      .post(baseUrl + "/login", data)
      .then((res) => {
        sessionStorage.setItem("access_token", res?.data?.token);
        sessionStorage.setItem("role", res?.data?.user?.role);
        dispatch(UserLoginAction(res));
        if (res?.data?.user?.role === "customer") {
          navigate("/dashboard");
        } else if (res?.data?.user?.role === "admin") {
          navigate("/admindashboard");
        }
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`);
        dispatch(UserLoginAction(err));
       });
  };
};

export const editProfile = () => {
  return (dispatch) => {
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
        dispatch(UserEditProfileAction(res));
      })
      .catch((err) => {
          dispatch(UserEditProfileAction(err));
        toast.error(`${err.response.data.error}`);
      });
  };
};

export const updateProfile = (Value, id) => {
  return (dispatch) => {
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
        dispatch(UserUpdateProfileAction(res));
      })
      .catch((err) => {
        toast.error(`${err.response.data.error}`);
        dispatch(UserUpdateProfileAction(err));
      });
  };
};

///////////////////////admin api's///////////////////////

export const addstock = (data,navigate) => {
  return (dispatch) => {
     
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
        navigate("/viewstock");
      })
      .catch((err) => {
        // toast.error(`${err.message}`);
      });
  };
};
export const getStockList = () => {
  return (dispatch) => {
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
      .delete(baseUrl + `/deluser/${id}`, {
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

//////cart apis.//////
export const getCart = () => {
  return (dispatch) => {
    axios
      .get(baseUrl + "/allcarts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        dispatch(cartAction(res));
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  };
};
export const addCart = (val) => {
  return (dispatch) => {
    axios
      .post(baseUrl + "/addcart", val, {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        // console.log("res",res);
        dispatch(cartListAction(res));
      })
      .catch((error) => {
        // toast.error(`${error}`);
        toast.error(`${error.response.data.error}`);
      });
  };
};
export const removeCartItem = (id) => {
  return (dispatch) => {
    axios
      .delete(baseUrl + `/delCart/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
        console.log("res", res);
        // dispatch(cartAction(res));
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  };
};
export const updateCartItems = (id,value) => {
  return (dispatch) => {
    axios
      .put(baseUrl+`/updateCart/${id}`,value, {
        headers: {
          "Content-Type": "application/json",
          Authorization: ACCESS_TOKEN()
            ? `Bearer ${ACCESS_TOKEN()}`
            : undefined,
        },
      })
      .then((res) => {
          dispatch(updateCartAction(res));
        console.log("res", res);
      })
      .catch((err) => {
        toast.error(`${err}`);
        // console.log("err", err);
      });
  };
};
