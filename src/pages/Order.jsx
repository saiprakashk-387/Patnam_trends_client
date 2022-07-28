import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const navigate = useNavigate();
  const redirect = () => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 200);   
  };
  return (
    <React.Fragment>
      <Container
        sx={{
          p: 2,
          margin: "auto",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          marginBottom: "4rem",
          height: "70vh",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography>No Orders Found</Typography>
          <Button onClick={redirect}>Start Shopping</Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}
