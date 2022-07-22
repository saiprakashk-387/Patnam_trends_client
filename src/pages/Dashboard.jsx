import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Span from "@mui/material/Button";
import Button from "@mui/material/Button";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../redux/slice";
import { getStockList } from "../API/Api";

export default function Dashboard() {
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { product, isLoading, error } = useSelector(productSelector);

  useEffect(() => {
    dispatch(getStockList());
  }, []);

  const getClicked = () => {
    console.log("getClicked");
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "4rem" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {isLoading
          ? "Loading....."
          : error
          ? "Something went wrong "
          : product?.data?.map((val, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={`${val.product_image}?w=248&fit=crop&auto=format`}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing sx={{padding:0,marginBottom:"1rem"}}>
                    <Span>{`INR ${val?.price}.00`}</Span>
                    <Button variant="contained">Add to cart</Button>
                    <Checkbox
                      onClick={getClicked}
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                    <Button>
                      <VisibilityIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}
