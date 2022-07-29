import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Span from "@mui/material/Button";
import Strong from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeCartItem, updateCartItems } from "../API/Api";
import { cartSelector } from "../redux/slice";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Cart() {
  const dispatch = useDispatch();
  const { cart, isLoading, error } = useSelector(cartSelector);
  const [initialCount, setinitialCount] = useState(1);
  const [productCount, setproductCount] = useState(1);
  const [ind, setInd] = useState(null);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  console.log("cart",cart);
  const prize = cart?.data?.map((r, i) => {
    ///number(),math.floor() -to convert string to number 
     return Number( r.price) ;
  });
  const result = prize?.reduce((total, currentValue) => total = total + currentValue);
 
  const increment = (val) => {
    setproductCount((prev)=>prev + 1);
    setInd(val?._id);
  };
  const decrement = (val) => {
   let  countValue=productCount-1
    if (countValue<=0){
      countValue=1
    }
    setInd(val?._id);
    setproductCount(((prev)=>prev - 1));
  };

  const cartUpdate=async(id,value)=>{
   await dispatch(updateCartItems(id,value))
  }
  const removeItem = async (id) => {
    await dispatch(removeCartItem(id));
     dispatch(getCart());
  };
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        marginBottom: "4rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      }}
    >
      <Strong> My - Cart</Strong> <br />
      {isLoading
        ? "Loading "
        : error
        ? "something Went Wrong"
        : cart && cart?.data?.length >= 1
        ? cart?.data?.map((val, i) => {
            return (
              <>
                <Grid container sx={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;",padding:1,marginBottom:2}}>
                  <Grid sx={{ width: "35%" }}>
                    <ButtonBase>
                      <Img
                        alt="complex"
                        src={val?.product_image}
                        sx={{ width: 300, height: 200 }}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid sm container sx={{ width: "50%", margin: "64px" }}>
                    <Grid xs container direction="column">
                      <Grid xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          Material Type :{val?.material_type}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Cloth Type:{val?.cloth_type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ID: {val?._id}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid xs container direction="column">
                      <Grid xs key={i}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          <Button
                            onClick={() => {
                              increment(val);
                            }}
                          >
                            +
                          </Button>
                          {ind === val?._id ? productCount : initialCount}
                          <Button
                            onClick={() => {
                              decrement(val);
                            }}
                          >
                            -
                          </Button>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid>
                      <Typography variant="subtitle1" component="div">
                        <CurrencyRupeeIcon />
                        {ind === val?._id
                          ? val?.price * productCount
                          : val?.price}
                      </Typography>
                      <Typography sx={{ cursor: "pointer" }} variant="body2">
                        <Span
                          onClick={() => {
                            removeItem(val?._id);
                          }}
                        >
                          {" "}
                          Remove
                        </Span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            );
          })
        : "No records found"}
      <hr />
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ paddingRight: "3rem" }}
        >
          Sub-Total
          <Typography sx={{ cursor: "pointer" }} variant="body2">
            Items ({cart?.data?.length})
          </Typography>
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ paddingRight: "10rem" }}
        >
          <CurrencyRupeeIcon />
          {result}
        </Typography>
        <br />
      </Grid>
      <Typography
        variant="subtitle1"
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "10rem",
        }}
      >
        <Button variant="contained" sx={{ borderRadius: 20, width: "17%" }} onClick={cartUpdate}>
          Checkout
        </Button>
      </Typography>
    </Paper>
  );
}
