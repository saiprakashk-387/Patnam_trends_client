import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewProduct(props) {
  const { open, handleClose, productData } = props;
  console.log("productData", productData);
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            p: 2,
            margin: "auto",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginBottom: "1rem",
            marginTop: "1rem",
            height: "70vh",
            width: "70%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <Box><img src={productData?.product_image} alt=""  style={{ width: 300, height: 250, borderRadius: 10 }} /></Box>
          <Divider variant="middle" />
          <Box sx={{display:"inline-flex",justifyContent:"space-evenly",alignItems:"center",width:"85%"}}>
            <Box sx={{width:"25%"}}>
                <Typography>Description :add sourceImg, zoomedImg properties to make it possible to use different images for source and zoomed images </Typography>
              
            </Box>
            <Box sx={{width:"25%"}}>
            <Typography>Material : {productData?.material_type}</Typography>
            <Typography>Cloth : {productData?.cloth_type}</Typography>
            <Typography>Status : {productData?.status}</Typography>
            </Box>
            <Box sx={{width:"25%"}}>
                <Typography>Color : NA</Typography>
                <Typography>Price : {`${productData?.price}`}</Typography>
            </Box>
          </Box>
        </Box>        
      </Dialog>
    </div>
  );
}
