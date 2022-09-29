import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CartSummary(props) {
  const { cartView, handleCartView, cartItems } = props;
  console.log("cartItems", cartItems);
  return (
    <div>
      <Dialog
        fullScreen
        open={cartView}
        onClose={handleCartView}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Cart Summary
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCartView}>
              Cancel {""}
              <IconButton edge="start" color="inherit" aria-label="close">
                <CloseIcon />
              </IconButton>
            </Button>
          </Toolbar>
        </AppBar>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            width: "80%",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          {cartItems&&cartItems.length >= 1
            ? cartItems.map((val, i) => {
                return (
                  <>
                    <Grid container spacing={3}>
                      <Grid item xs={6} md={4}>
                           <Img alt="complex" src={val?.product_image} sx={{ width: 300, height: 128 }}/>
                       </Grid>
                      <Grid item  direction="column" spacing={2}>
                        <Grid item xs={6} md={4}>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="subtitle1"
                              component="div"
                            >
                              Product Name : {val?.material_type}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              Quantity : {val?.qty}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Price (1) : {val?.price}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item xs={6} md={4}>
                          <Typography variant="subtitle1" component="div">
                          Total :  INR {val?.qty * val?.price}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <hr />
                  </>
                );
              })
            : "loading"}
        </Paper>
      </Dialog>
    </div>
  );
}
