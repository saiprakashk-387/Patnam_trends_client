import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { lightGreen } from "@mui/material/colors";
import { loginApi } from "../API/Api";
import { sampleSelector } from "../redux/slice";
import Loader from "../Components/Loader/Loader";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const { sample, isLoading, error } = useSelector(sampleSelector);
  sessionStorage.setItem("userToken", sample?.data?.token);
  sessionStorage.setItem("name", sample?.data?.user?.email);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "6 characters required"),
    }),
    onSubmit: async (data) => {
      await dispatch(loginApi(data, navigate));
    },
  });

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <Box
      fixed
      sx={{
        overflow: "hidden",
        height: "98vh",
        display: "flex",
        backgroundImage: `url(${"https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg"})`,
        backgroundSize: "auto",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Paper
        elevation={4}
        style={{
          borderRadius: 0,
          marginTop: lightGreen,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 360,
          margin: "100px auto",
          padding: 20,
        }}
      >
        {" "}
        <Avatar
          src={"/Patnamtrends_2.png"}
          style={{
            marginTop: lightGreen,
            backgroundColor: lightGreen,
            width: 75,
            height: 75,
          }}
        />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form style={{ marginTop: 3, width: "100%" }}>
          <TextField
            variant="outlined"
            required
            fullWidth
            type="email"
            name="email"
            id="email"
            label="Email"
            autoComplete="email"
            value={formik?.values?.email}
            onChange={formik.handleChange}
            helperText={formik.touched.email ? formik.errors.email : null}
            error={formik.touched.email ? formik.errors.email : null}
          />
          <FormControl required fullWidth sx={{ mt: 3 }} variant="outlined">
            <InputLabel
              required
              error={formik.touched.password ? formik.errors.password : null}
            >
              Password
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-password"
              name="password"
              type={secureTextEntry ? "password" : "text"}
              value={formik?.values?.password}
              onChange={formik.handleChange}
              error={formik.touched.password ? formik.errors.password : null}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleSecureEntry}
                    edge="end"
                  >
                    {secureTextEntry ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText error>
              {formik.touched.password ? formik.errors.password : null}
            </FormHelperText>
          </FormControl>
          <Grid container marginTop={3}>
            <Grid item xs>
              <FormControlLabel
                style={{ display: "table-cell" }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item style={{ marginTop: 1 }}>
              <Link
                to="/forgot"
                variant="body2"
                style={{ textDecoration: "none" }}
              >
                Forgot password?
              </Link>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: 4 }}
            onClick={formik.handleSubmit}
          >
            {isLoading ? (
              <span>
                <Loader />
              </span>
            ) : (
              "Login"
            )}
          </Button>
        </form>
        <Grid item container style={{ marginTop: 6, marginLeft: 15 }}>
          <Typography>Don&apos;t have an account? </Typography>
          <Link
            to="/register"
            variant="body2"
            style={{
              textDecoration: "none",
              marginLeft: 0.5,
              color: lightGreen,
            }}
          >
            {"Sign Up"}
          </Link>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Login;
