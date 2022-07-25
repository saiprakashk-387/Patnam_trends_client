import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Strong from "@mui/material/Button";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Cart() {
  const [productCount, setproductCount] = useState(1);

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
      <Grid container>
        <Grid sx={{ width: "35%" }}>
          <ButtonBase>
            <Img
              alt="complex"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWTxRA7IAIDPkiTYsZcftPYHWI2RvRflZqw&usqp=CAU"
              sx={{ width: 300, height: 200 }}
            />
          </ButtonBase>
        </Grid>
        <Grid sm container sx={{ width: "50%", margin: "64px" }}>
          <Grid xs container direction="column">
            <Grid xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
          </Grid>
          <Grid xs container direction="column">
            <Grid xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <Button
                  onClick={() => {
                    setproductCount(productCount + 1);
                  }}
                >
                  +
                </Button>
                {productCount}
                <Button
                  onClick={() => {
                    setproductCount(productCount - 1);
                  }}
                >
                  -
                </Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="subtitle1" component="div">
              <CurrencyRupeeIcon/>{`${19 * productCount}.00`}
            </Typography>
            <Typography sx={{ cursor: "pointer" }} variant="body2">
              Remove
            </Typography>
          </Grid>
        </Grid>
      </Grid>{" "}
      <hr />
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ paddingRight: "3rem" }}
        >
          Sub-Total
          <Typography sx={{ cursor: "pointer" }} variant="body2">
            Items (1)
          </Typography>
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ paddingRight: "10rem" }}
        >
          <CurrencyRupeeIcon/>{`${19 * productCount}.00`}
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
        <Button variant="contained" sx={{ borderRadius: 20, width: "17%" }}>
          Checkout
        </Button>
      </Typography>
    </Paper>
  );
}
