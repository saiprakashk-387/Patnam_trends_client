import React ,{useState} from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Strong from "@mui/material/Button";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

const StockEdit = () => {
  const location = useLocation();

   const [image, setImage] = useState("");

  const sample = location?.state;

   const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      productname: sample?.name,
      materialtype: sample?.fat,
      price: sample?.calories,
      status: sample?.lastname,
      // photoUrl: url,
    },

    onSubmit: async (Data, reset) => {
      // console.log("data",Data);
    },
  });

  const Input = styled("input")({
    display: "none",
  });
  return (
    <div>
      <Strong>Stock Details - Edit</Strong>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 0, width: "60ch" },
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            "& > :not(style)": { m: 2, width: "25ch" },
          }}
        >
          <TextField
            label="Product Name"
            margin="dense"
            color="secondary"
            name="productname"
            value={formik?.values?.productname}
            onChange={formik.handleChange}
            focused
          />
          <TextField
            label="Material Type"
            margin="dense"
            color="secondary"
            name="materialtype"
            value={formik.values?.materialtype}
            onChange={formik.handleChange}
            focused
          />
          <TextField
            label="Price"
            margin="dense"
            color="secondary"
            name="price"
            value={formik.values?.price}
            onChange={formik.handleChange}
            focused
          />
          <TextField
            label="Status"
            margin="dense"
            color="secondary"
            name="status"
            value={formik.values?.status}
            onChange={formik.handleChange}
            focused
          />
            </Box>
        <Box
          sx={{
            alignItems: "center",
            "& > :not(style)": { m: 8, width: "60ch" },
          }}
        >
          <Stack direction="row" spacing={2}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <IconButton
                    color="secondary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera sx={{ width: 50, height: 50 }} />
                  </IconButton>
                </label>
              }
            >              
            </Badge>
          </Stack>         
        </Box>
      </Box>
      <Button  onClick={formik.handleSubmit} sx={{ m:2 }} variant="outlined">Update </Button>
    </div>
  );
};

export default StockEdit;
