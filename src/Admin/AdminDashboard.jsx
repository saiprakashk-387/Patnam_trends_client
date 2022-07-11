import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MovingIcon from "@mui/icons-material/Moving";
import SettingsIcon from "@mui/icons-material/Settings";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function AdminDashboard() {
  return (
    <Box sx={{ display: "flex", columnGap: 5 }}>
      <Card sx={{ display: "flex" }}>
        <PeopleAltIcon sx={{ width: 50, height: 100, color: "blue" }} />
        <CardContent sx={{ backgroundColor: "#f3e7e700" }}>
          <Typography sx={{ fontSize: 20 }} color="blue" gutterBottom>
            <strong> Users</strong>
          </Typography>
          <Typography variant="body2">well meaning and kindly.</Typography>
        </CardContent>
      </Card>
      <Card sx={{ display: "flex" }}>
        <MovingIcon sx={{ width: 50, height: 100, color: "burlywood" }} />
        <CardContent sx={{ backgroundColor: "#f3e7e700" }}>
          <Typography sx={{ fontSize: 20 }} color="burlywood" gutterBottom>
            <strong>Stock</strong>
          </Typography>
          <Typography variant="body2">well meaning and kindly.</Typography>
        </CardContent>
      </Card>
      <Card sx={{ display: "flex" }}>
        <CurrencyRupeeIcon sx={{ width: 50, height: 100, color: "rebeccapurple" }} />
        <CardContent sx={{ backgroundColor: "#f3e7e700" }}>
          <Typography sx={{ fontSize: 20 }} color="rebeccapurple" gutterBottom>
            <strong>Price Details</strong>
          </Typography>
          <Typography variant="body2">well meaning and kindly.</Typography>
        </CardContent>
      </Card>
      <Card sx={{ display: "flex" }}>
        <SettingsIcon sx={{ width: 50, height: 100, color: "green" }} />
        <CardContent sx={{ backgroundColor: "#f3e7e700" }}>
          <Typography sx={{ fontSize: 20 }} color="green" gutterBottom>
            <strong>Settings</strong>
          </Typography>
          <Typography variant="body2">well meaning and kindly.</Typography>
        </CardContent>
      </Card>
     
    </Box>
  );
}
